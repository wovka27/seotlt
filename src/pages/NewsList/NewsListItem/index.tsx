import React from 'react'
import { observer } from 'mobx-react-lite'

import Icon from '@/components/Icon'
import UiButton from '@/components/UI/UiButton'
import UpdateNew from '@/components/UpdateNew'
import UiImage from '@/components/UI/UiImage'

import newsStore, { INewsItem } from '@/stores/news.store'

import '@/pages/NewsList/NewsListItem/news-list-item.scss'
import { Link } from 'react-router-dom'

type NewsListItemProps = INewsItem

const NewsListItem: React.FC<NewsListItemProps> = observer((props) => {
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
        <Link to={`/${props.uuid}`}>
          <h2 className="newsItem-content__title">{props.title}</h2>
        </Link>
        <p className="newsItem-content-excerpt">{props.excerpt}</p>
      </div>
      <div className="newsItem__update">
        <UpdateNew item={props} />
      </div>
    </article>
  )
})

export default NewsListItem
