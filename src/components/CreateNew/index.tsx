import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import UiButton from '@/components/UI/UiButton'

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
    <>
      <UiButton onClick={open} size="small">
        Создать статью
      </UiButton>
    </>
  )
})

export default CreateNew
