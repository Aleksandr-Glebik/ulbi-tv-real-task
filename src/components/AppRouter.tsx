import React, { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from '../pages/Login'
import Event from '../pages/Event'
import { privateRoutes, publicRoutes } from '../router'
import { useTypedSelector } from '../hooks/useTypedSelector'

const AppRouter: FC = () => {
  const {isAuth} = useTypedSelector(state => state.auth)

  return (
        isAuth
        ? <Routes>
         {privateRoutes.map( route =>
                <Route path={route.path}
                    element={<route.element />}
                    key={route.path}
                />
          )}
          <Route path="*" element={<Event />} />
        </Routes>
        : <Routes>
         {publicRoutes.map( route =>
                <Route path={route.path}
                    element={<route.element />}
                    key={route.path}
                />
          )}
          <Route path="*" element={<Login />} />
        </Routes>
  )
}

export default AppRouter
