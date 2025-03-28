import React from 'react'

import '@/app.scss'
import {Routes, Route, HashRouter } from 'react-router-dom'
import DefaultLayout from '@/layouts/DefaultLayout'
import routes from '@/router'

const App: React.FC = () => {
  return (
    <div className="app">
      <HashRouter>
        <DefaultLayout>
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} Component={route.element} />
            ))}
          </Routes>
        </DefaultLayout>
      </HashRouter>
    </div>
  )
}

export default App
