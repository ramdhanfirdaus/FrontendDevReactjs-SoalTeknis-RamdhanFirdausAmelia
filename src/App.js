import {Suspense} from 'react'
import {Outlet} from 'react-router-dom'
import {AuthInit} from "./components/pages/auth";

const App = () => {
  return (
      <Suspense >
        <AuthInit>
          <Outlet />
        </AuthInit>
      </Suspense>
  )
}

export {App}
