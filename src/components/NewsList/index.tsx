import React from 'react'
import newsStore from '@/stores/news.store'
import NewsListItem from '@/components/NewsList/NewsListItem'
import { observer } from 'mobx-react-lite'

import '@/components/NewsList/news-list.scss'

const NewsList: React.FC = observer(() => {
  return (
    <div className="newsList">
      {newsStore.items.map((item) => (
        <NewsListItem key={item.uuid} {...item} />
      ))}
    </div>
  )
})

export default NewsList
