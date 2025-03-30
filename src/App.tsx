import React from 'react'
import { Routes, Route } from 'react-router-dom'

import DefaultLayout from '@/layouts/DefaultLayout'

import ArticleDetail from '@/components/ArticleDetail'

import NotFoundPage from '@/pages/NotFoundPage'
import ListPage from '@/pages/ListPage'

import '@/app.scss'

const App: React.FC = () => {
  return (
    <div className="app">
      <DefaultLayout>
        <Routes>
          <Route path="/" element={<ListPage />} />
          <Route path="/:uuid" element={<ArticleDetail />} />
          <Route path="/404" element={<NotFoundPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Routes>
      </DefaultLayout>
    </div>
  )
}

export default App
