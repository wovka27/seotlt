import React from 'react'
import { observer } from 'mobx-react-lite'

import NewsListItem from '@/components/NewsList/NewsListItem'
import NewsEmptyList from '@/components/NewsList/NewsEmptyList'
import CreateNewHOC from '@/components/HOC/CreateNewHOC'

import newsStore from '@/stores/news.store'

import '@/components/NewsList/news-list.scss'

const NewsList: React.FC = observer(() => {
  return newsStore.items.length ? (
    <div className="newsList">
      {newsStore.items.map((item) => (
        <NewsListItem key={item.uuid} {...item} />
      ))}
      <CreateNewHOC>
        {(open) => (
          <article
            onClick={open}
            className="newsItem"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 350 }}
          >
            <p style={{ fontSize: 80, color: 'gray' }}>+</p>
          </article>
        )}
      </CreateNewHOC>
    </div>
  ) : (
    <NewsEmptyList />
  )
})

export default NewsList
