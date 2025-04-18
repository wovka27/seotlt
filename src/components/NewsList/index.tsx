import React from 'react'
import { observer } from 'mobx-react-lite'

import NewsListItem from '@/components/NewsList/NewsListItem'
import NewsEmptyList from '@/components/NewsList/NewsEmptyList'
import CreateArticleHOC from '@/components/HOC/CreateArticleHOC'

import newsStore from '@/stores/news.store'

import '@/components/NewsList/news-list.scss'

const NewsList: React.FC = observer(() => {
  if (!newsStore.items.length) return <NewsEmptyList />

  return (
    <div className="newsList">
      {newsStore.items.map((item) => (
        <NewsListItem key={item.uuid} {...item} />
      ))}
      <CreateArticleHOC>
        {(open) => (
          <article
            onClick={open}
            className="newsItem"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 350 }}
          >
            <p style={{ fontSize: 80, color: 'gray' }}>+</p>
          </article>
        )}
      </CreateArticleHOC>
    </div>
  )
})

export default NewsList
