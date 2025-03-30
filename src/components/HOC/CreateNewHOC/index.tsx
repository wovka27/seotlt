import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import newsStore, { INewsItem } from '@/stores/news.store'
import modalStore from '@/stores/modal.store'
import ArticleForm from '@/components/ArticleForm'

interface ICreateNewProps {
  children: (open: () => void) => React.ReactNode
}

const CreateNew: FC<ICreateNewProps> = observer(({ children }) => {
  const apply = (state: INewsItem, payload: INewsItem) => {
    newsStore.createItem(payload)
    modalStore.close()

    return state
  }

  const open = () => {
    modalStore.open('Создание статьи', <ArticleForm onSubmit={apply} onCancel={modalStore.close} />)
  }

  return children(open)
})

export default CreateNew
