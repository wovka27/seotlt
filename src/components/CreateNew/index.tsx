import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import newsStore, { INewsItem } from '@/stores/news.store'
import modalStore from '@/stores/modal.store'
import ArticleForm from '@/components/ArticleForm'

const CreateNew: FC = observer(() => {
  const apply = (data: INewsItem) => {
    newsStore.createItem(data)
    modalStore.close()
  }

  const open = () => {
    modalStore.open('Создание статьи', <ArticleForm onSubmit={apply} onCancel={modalStore.close} />)
  }

  return (
    <article
      onClick={open}
      className="newsItem"
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: 350 }}
    >
      <p style={{ fontSize: 80, color: 'gray' }}>+</p>
    </article>
  )
})

export default CreateNew
