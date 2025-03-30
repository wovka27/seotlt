import React from 'react'
import { observer } from 'mobx-react-lite'

import NewsListItem from '@/pages/NewsList/NewsListItem'
import CreateNew from '@/components/CreateNew'

import newsStore from '@/stores/news.store'

import '@/pages/NewsList/news-list.scss'
import NewsEmptyList from '@/pages/NewsList/NewsEmptyList/index.'

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
