import React, { MouseEvent } from 'react'
import { useNavigate } from 'react-router-dom'

import IconInfo from '@/components/Icon/IconInfo'
import UpdateNew from '@/components/UpdateNew'
import UiImage from '@/components/UI/UiImage'
import DeleteNew from '@/components/DeleteNew'

import { INewsItem } from '@/stores/news.store'

import '@/pages/NewsList/NewsListItem/news-list-item.scss'

type NewsListItemProps = INewsItem

const NewsListItem: React.FC<NewsListItemProps> = (props) => {
  const navigate = useNavigate()

  const navigateTo: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
    navigate(`/${props.uuid}`)
  }
  return (
    <UpdateNew item={props}>
      {(open) => (
        <article onClick={open} className="newsItem">
          <div className="newsItem__remove">
            <DeleteNew uuid={props.uuid} />
          </div>
          <div className="newsItem__image">
            <UiImage key={props.imageUrl} src={props.imageUrl} alt={props.title} />
          </div>
          <div className="newsItem-content">
            <div className="newsItem-content__meta">
              <IconInfo iconName="calendar" value={props.date} />
              <IconInfo iconName="tag" value={props.category} />
            </div>
            <div onClick={navigateTo}>
              <h2 className="newsItem-content__title">{props.title}</h2>
            </div>
            <p className="newsItem-content-excerpt">{props.excerpt}</p>
          </div>
        </article>
      )}
    </UpdateNew>
  )
}

export default React.memo(NewsListItem)
