import React from 'react'
import { observer } from 'mobx-react-lite'

import NewsListItem from '@/pages/NewsList/NewsListItem'
import CreateNew from '@/components/CreateNew'

import newsStore from '@/stores/news.store'

import '@/pages/NewsList/news-list.scss'

const NewsList: React.FC = observer(() => {
  return (
    <div className="newsList">
      {newsStore.items.map((item) => (
        <NewsListItem key={item.uuid} {...item} />
      ))}
      <CreateNew />
    </div>
  )
})

export default NewsList
