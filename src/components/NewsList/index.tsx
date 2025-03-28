import React from 'react'
import newsStore from '@/stores/news.store'
import NewsListItem from '@/components/NewsList/NewsListItem'
import { observer } from 'mobx-react-lite'

import '@/components/NewsList/news-list.scss'
import CreateNew from '@/components/CreateNew'

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
