import { Calendar } from 'antd'
import { Moment } from 'moment';
import React, { FC } from 'react'
import { IEvent } from '../models/IEvent'
import { formDate } from '../utils/date';

interface EventCalendarProps {
  events: IEvent[];
}

const EventCalendar: FC<EventCalendarProps> = (props) => {

  const dateCellRender = (value: Moment) => {
    const formatedDate = formDate(value.toDate())
    const currentDayEvents = props.events.filter(ev => ev.date === formatedDate)
    return (
      <div>
        {currentDayEvents.map( (ev, ind) =>
          <div key={ind}>{ev.description}</div>
        )}
      </div>
    )
  }

  return (
    <Calendar
      dateCellRender={dateCellRender}
    />
  )
}

export default EventCalendar
