import React, { useRef } from 'react'
import { observer } from 'mobx-react-lite'
import { useNavigate, useParams } from 'react-router'
import { Navigate } from 'react-router-dom'

import Icon from '@/components/Icon'
import IconInfo from '@/components/Icon/IconInfo'
import UpdateArticleHOC from '@/components/HOC/UpdateArticleHOC'
import DeleteArticleHOC from '@/components/HOC/DeleteArticleHOC'
import UiButton from '@/components/UI/UiButton'
import UiImage from '@/components/UI/UiImage'

import newsStore, { INewsItem } from '@/stores/news.store'

import '@/components/ArticleDetail/article-detail.scss'
import CommentsList from '@/components/CommentsList'
import CommentForm from '@/components/CommentForm'
import commentsStore, { ICommentsItem } from '@/stores/comments.store'

const ArticleDetail: React.FC = observer(() => {
  const { uuid } = useParams<{ uuid: string }>()
  const navigate = useNavigate()
  const [articleData] = React.useState<INewsItem | undefined>(newsStore.readItem(uuid!))
  const [comment, setComment] = React.useState<ICommentsItem>(getInitialState())
  const [action, setAction] = React.useState<'create' | 'update'>('create')

  const nodeRef = useRef<HTMLDivElement | null>(null)

  const onBack = () => navigate(-1)

  const apply: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault()

    if (action === 'update') commentsStore.updateItem(comment.uuid, comment)
    else commentsStore.createItem({ ...comment!, article_uuid: uuid! })

    setAction('create')
    setComment(getInitialState())
    commentsStore.filterArticleByUuidList(uuid!)
  }

  const onEdit = (comment: ICommentsItem) => {
    setComment(comment)
    setAction('update')
    nodeRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' })
  }
  const onRemove = (val: string) => {
    commentsStore.deleteItem(val)
    commentsStore.filterArticleByUuidList(uuid!)
  }

  const onCancel = () => {
    setComment(getInitialState())
  }

  commentsStore.filterArticleByUuidList(uuid!)

  if (!uuid || !isValidUUID(uuid)) return <Navigate to="/404" replace />

  if (!articleData) return null

  return (
    <div className="article-detail-wrapper">
      <article className="article-detail">
        <div className="article-detail__header">
          <div className="article-detail__btns">
            <UiButton variant="secondary" size="small" className="article-detail__back" onClick={onBack}>
              <Icon name="arrowLeft" size={18} />
            </UiButton>
            <DeleteArticleHOC uuid={uuid} callback={onBack}>
              {(click) => (
                <UiButton onClick={click} variant="secondary" size="small">
                  <Icon size={18} name="x" />
                </UiButton>
              )}
            </DeleteArticleHOC>
            <UpdateArticleHOC item={articleData}>
              {(open) => (
                <UiButton onClick={open} size="small" variant="secondary">
                  Редактировать
                </UiButton>
              )}
            </UpdateArticleHOC>
          </div>

          <div className="article-detail__meta">
            <IconInfo iconName="tag" value={articleData.category} size={24} />
            <IconInfo iconName="calendar" value={articleData.created_at} size={24} />
          </div>
        </div>

        <div className="article-detail__image-container">
          <UiImage src={articleData.imageUrl} alt={articleData.title} className="article-detail__image" />
        </div>

        <div className="article-detail__content">
          <h1 className="article-detail__title">{articleData.title}</h1>
          <h2 className="article-detail__subtitle">Описание</h2>
          <p className="article-detail__excerpt">{articleData.excerpt}</p>
        </div>
      </article>
      <div ref={nodeRef}>
        <CommentForm data={comment} setData={setComment} onSubmit={apply} onCancel={onCancel} />
      </div>
      <CommentsList onRemove={onRemove} onEdit={onEdit} />
    </div>
  )
})

const isValidUUID = (uuid: string) => {
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(uuid)
}

const getInitialState = (): ICommentsItem => ({
  user_name: '',
  comment: '',
  article_uuid: '',
  uuid: '',
  avatar_url: ''
})

export default ArticleDetail
