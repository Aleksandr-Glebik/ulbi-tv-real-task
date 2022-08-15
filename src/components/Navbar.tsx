import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar: FC = () => {
    let navigate = useNavigate()
    const auth = false

    const setPathToLogin = () => {
        navigate(`/login`, { replace: true })
    }

  return (
    <Layout.Header >
      <Row justify='end'>
        {auth
            ? <React.Fragment>
                <div style={{color: 'white', }}>Glebik A.A.</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item onClick={() => console.log('exit api')}
                               key={1}
                    >
                        Выйти
                    </Menu.Item>
                </Menu>
            </React.Fragment>
            : <React.Fragment>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item onClick={() => setPathToLogin()}
                               key={1}
                    >
                        Логин
                    </Menu.Item>
                </Menu>
            </React.Fragment>
        }
      </Row>
    </Layout.Header>
  )
}

export default Navbar
