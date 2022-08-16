import { Button, Modal, Row } from 'antd'
import React, { FC, useState } from 'react'
import EventCalendar from '../components/EventCalendar'

const Event: FC = () => {
  const [modalVisible, setModalVisible] = useState(false)


  return (
    <div >
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

      </Modal>
    </div>
  )
}

export default Event
