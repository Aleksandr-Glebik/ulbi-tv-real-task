import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Navbar: FC = () => {
    let navigate = useNavigate()
    const {isAuth} = useTypedSelector(state => state.auth)

    const setPathToLogin = () => {
        navigate(`/login`, { replace: true })
    }

  return (
    <Layout.Header >
      <Row justify='end'>
        {isAuth
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
                               key={2}
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
