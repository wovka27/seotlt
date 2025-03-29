import React from 'react'
import { Routes, Route } from 'react-router-dom'

import DefaultLayout from '@/layouts/DefaultLayout'

import NewsList from '@/pages/NewsList'
import ArticleDetail from '@/pages/ArticleDetail'
import NotFound from '@/pages/NotFound'

import '@/app.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<NewsList />} />
          <Route path="/:uuid" element={<ArticleDetail />} />
          <Route path="/404" element={<NotFound />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </DefaultLayout>
    </div>
  )
}

export default App
