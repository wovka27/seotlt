import React from 'react'
import { observer } from 'mobx-react-lite'

import Icon from '@/components/Icon'
import UiButton from '@/components/UI/UiButton'

import newsStore, { INewsItem } from '@/stores/news.store'

import '@/components/NewsList/NewsListItem/news-list-item.scss'
import UpdateNew from '@/components/UpdateNew'
import { useNavigate } from 'react-router'

type NewsListItemProps = INewsItem

const NewsListItem: React.FC<NewsListItemProps> = observer(({ title, excerpt, imageUrl, date, uuid, category }) => {
  const navigate = useNavigate()
  const convertedDate = date.replace(/(\d+)-(\d+)-(\d+)/g, '$3-$2-$1')

  return (
    <article className="newsItem">
      <div className="newsItem__actions">
        <UpdateNew item={{ title, excerpt, imageUrl, date, uuid, category }} />
        <UiButton size="small" onClick={() => newsStore.deleteItem(uuid)}>
          Удалить
        </UiButton>
      </div>
      <div className="newsItem__image">
        <img loading="lazy" src={imageUrl} alt={title} />
      </div>
      <div className="newsItem-content">
        <div className="newsItem-content__meta">
          <span className="newsItem-content__meta__date">
            <Icon name="calendar" size={16} />
            {convertedDate}
          </span>
          <span className="categoy">
            <Icon name="tag" size={16} />
            {category}
          </span>
        </div>
        <h2 onClick={() => navigate(`/detail/${uuid}`)} className="newsItem-content__title">{title}</h2>
        <p className="newsItem-content-excerpt">{excerpt}</p>
      </div>
    </article>
  )
})

export default NewsListItem
