import { Layout, Row, Menu } from 'antd'
import React, { FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const Navbar: FC = () => {
    let navigate = useNavigate()
    const {isAuth, user} = useTypedSelector(state => state.auth)
    const dispatch = useDispatch() as any

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
                    <Menu.Item onClick={() => dispatch(AuthActionCreators.logout())}
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
