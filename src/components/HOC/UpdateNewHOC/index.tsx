import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import newsStore, { INewsItem } from '@/stores/news.store'
import ArticleForm from '@/components/ArticleForm'
import modalStore from '@/stores/modal.store'

interface IUpdateNewsProps {
  item: INewsItem
  children: (open: () => void) => React.ReactNode
}

const UpdateNew: FC<IUpdateNewsProps> = observer(({ item, children }) => {
  const apply = (state: INewsItem, payload: INewsItem) => {
    newsStore.updateItem(item.uuid, payload)
    modalStore.close()

    return state
  }

  const open = () => {
    modalStore.open(
      'Редактирование статьи',
      <ArticleForm initialData={item} onSubmit={apply} onCancel={modalStore.close} />
    )
  }

  return children(open)
})

export default UpdateNew
