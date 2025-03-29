import React from 'react'
import { observer } from 'mobx-react-lite'

import Icon from '@/components/Icon'
import UiButton from '@/components/UI/UiButton'

import newsStore, { INewsItem } from '@/stores/news.store'

import '@/components/NewsList/NewsListItem/news-list-item.scss'
import UpdateNew from '@/components/UpdateNew'
import { useNavigate } from 'react-router'
import UiImage from '@/components/UI/UiImage'

type NewsListItemProps = INewsItem

const NewsListItem: React.FC<NewsListItemProps> = observer((props) => {
  const navigate = useNavigate()
  const convertedDate = props.date.replace(/(\d+)-(\d+)-(\d+)/g, '$3-$2-$1')

  return (
    <article className="newsItem">
      <div className="newsItem__remove">
        <UiButton size="small" variant="secondary" onClick={() => newsStore.deleteItem(props.uuid)}>
          <Icon name="x" size={15} />
        </UiButton>
      </div>
      <div className="newsItem__image">
        <UiImage src={props.imageUrl} alt={props.title} />
      </div>
      <div className="newsItem-content">
        <div className="newsItem-content__meta">
          <span className="newsItem-content__meta__date">
            <Icon name="calendar" size={16} />
            {convertedDate}
          </span>
          <span className="categoy">
            <Icon name="tag" size={16} />
            {props.category}
          </span>
        </div>
        <h2 onClick={() => navigate(`/${props.uuid}`)} className="newsItem-content__title">
          {props.title}
        </h2>
        <p className="newsItem-content-excerpt">{props.excerpt}</p>
      </div>
      <div className="newsItem__update">
        <UpdateNew item={props} />
      </div>
    </article>
  )
})

export default NewsListItem
