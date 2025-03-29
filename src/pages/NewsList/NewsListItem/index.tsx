import React from 'react'
import { Link } from 'react-router-dom'

import Icon from '@/components/Icon'
import UpdateNew from '@/components/UpdateNew'
import UiImage from '@/components/UI/UiImage'
import DeleteNew from '@/components/DeleteNew'

import { INewsItem } from '@/stores/news.store'

import '@/pages/NewsList/NewsListItem/news-list-item.scss'

type NewsListItemProps = INewsItem

const NewsListItem: React.FC<NewsListItemProps> = (props) => {
  return (
    <article className="newsItem">
      <div className="newsItem__remove">
        <DeleteNew uuid={props.uuid} />
      </div>
      <div className="newsItem__image">
        <UiImage src={props.imageUrl} alt={props.title} />
      </div>
      <div className="newsItem-content">
        <div className="newsItem-content__meta">
          <span className="newsItem-content__meta__date">
            <Icon name="calendar" size={16} />
            {props.date}
          </span>
          <span className="newsItem-content__meta__date">
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
}

export default NewsListItem
