import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import UiButton from '@/components/UI/UiButton'

import newsStore from '@/stores/news.store'
import modalStore from '@/stores/modal.store'
import ArticleForm from '@/components/ArticleForm'

const CreateNew: FC = observer(() => {
  const open = () => {
    modalStore.open('Создание статьи', <ArticleForm onSubmit={newsStore.createItem} />)
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
