import React from 'react'
import { observer } from 'mobx-react-lite'

import NewsListItem from '@/components/NewsList/NewsListItem'
import NewsEmptyList from '@/components/NewsList/NewsEmptyList'
import CreateNew from '@/components/CreateNew'

import newsStore from '@/stores/news.store'

import '@/components/NewsList/news-list.scss'

const NewsList: React.FC = observer(() => {
  return newsStore.items.length ? (
    <div className="newsList">
      {newsStore.items.map((item) => (
        <NewsListItem key={item.uuid} {...item} />
      ))}
      <CreateNew />
    </div>
  ) : (
    <NewsEmptyList />
  )
})

export default NewsList
