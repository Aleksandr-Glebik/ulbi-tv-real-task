import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Navbar: FC = () => {
    let navigate = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const {logout} = useActions()

    const setPathToLogin = () => {
        navigate(`/login`, { replace: true })
    }

  return (
    <Layout.Header >
      <Row justify='end'>
        {isAuth
            ? <React.Fragment>
                <div style={{color: 'white', }}>{user.username}</div>
                <Menu theme="dark" mode="horizontal" selectable={false}>
                    <Menu.Item onClick={logout}
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
