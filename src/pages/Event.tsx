import { Button, Layout, Modal, Row } from 'antd'
import React, { FC, useEffect, useState } from 'react'
import EventCalendar from '../components/EventCalendar'
import EventForm from '../components/EventForm'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const {fetchGuests, createEvent} = useActions()
  const {guests, events} = useTypedSelector(state => state.event)

  useEffect(() => {
    fetchGuests()
  }, [])

  return (
    <Layout>
      {JSON.stringify(events)}
      <EventCalendar events={[]}/>
      <Row justify='center'>
        <Button
          onClick={() => setModalVisible(true)}
        >Добавить событие</Button>
      </Row>
      <Modal
        title='Добавить событие'
        visible={modalVisible}
        footer={null}
        onCancel={() => setModalVisible(false)}
      >
      <EventForm
       submit={event => createEvent(event)}
       guests={guests}
      />
      </Modal>
    </Layout>
  )
}

export default Event
