import { DatePicker, Form, Input, Row, Button, Select } from 'antd'
import { Moment } from 'moment'
import React, { FC, useState } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { IEvent } from '../models/IEvent'
import { IUser } from '../models/IUser'
import { formDate } from '../utils/date'
import { rules } from '../utils/rules'

interface EventFormProps {
    guests: IUser[],
    submit: (event: IEvent) => void
}

const EventForm: FC<EventFormProps> = (props) => {
  const [event, setEvent] = useState<IEvent>({
    author: '',
    date: '',
    description: '',
    guest: ''
  } as IEvent)

  const {user} = useTypedSelector(state => state.auth)

  const selectDate = (date: Moment | null) => {
    if (date) {
      // console.log(formDate(date.toDate()));
      setEvent( {...event, date: formDate(date.toDate()) })
    }
  }

  const submitForm = () => {
    // console.log('event', {...event, author: user.username});
    props.submit({...event, author: user.username})
  }

  return (
    <Form onFinish={submitForm}>
        <Form.Item
            label="Описание события"
            name="description"
            rules={[rules.required()]}
        >
        <Input
          onChange={e => setEvent({...event, description: e.target.value})}
          value={event.description}
        />
      </Form.Item>
      <Form.Item
        label="Дата события"
        name="date"
        rules={[rules.required(), rules.isDateAfter('Нельзя создать событие в прошлом')]}
      >
        <DatePicker
          onChange={(date) => selectDate(date)}
        />
      </Form.Item>
      <Form.Item
        label="Выберите гостя"
        name="guest"
        rules={[rules.required()]}
      >
        <Select onChange={(guest: string) => setEvent({...event, guest})}>
            {props.guests.map(guest =>
                <Select.Option key={guest.username} value={guest.username}>
                    {guest.username}
                </Select.Option>
            )}
        </Select>
      </Form.Item>
      <Row justify='end'>
        <Form.Item>
            <Button type="primary" htmlType="submit">
                Создать
            </Button>
        </Form.Item>
      </Row>

    </Form>
  )
}

export default EventForm
