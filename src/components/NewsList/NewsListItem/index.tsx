import React from 'react'
import { useNavigate } from 'react-router-dom'

import IconInfo from '@/components/Icon/IconInfo'
import UpdateNewHOC from '@/components/HOC/UpdateNewHOC'
import DeleteNewHOC from '@/components/HOC/DeleteNewHOC'
import UiImage from '@/components/UI/UiImage'

import { INewsItem } from '@/stores/news.store'

import '@/components/NewsList/NewsListItem/news-list-item.scss'
import UiButton from '@/components/UI/UiButton'
import Icon from '@/components/Icon'

type NewsListItemProps = INewsItem

const NewsListItem: React.FC<NewsListItemProps> = (props) => {
  const navigate = useNavigate()

  const navigateTo: React.MouseEventHandler<HTMLDivElement> = (event) => {
    event.stopPropagation()
    navigate(`/${props.uuid}`)
  }

  return (
    <UpdateNewHOC item={props}>
      {(open) => (
        <article onClick={open} className="newsItem">
          <div className="newsItem__remove">
            <DeleteNewHOC uuid={props.uuid}>
              {(click) => (
                <UiButton onClick={click} variant="secondary" size="small">
                  <Icon size={15} name="x" />
                </UiButton>
              )}
            </DeleteNewHOC>
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
    </UpdateNewHOC>
  )
}

export default React.memo(NewsListItem)
