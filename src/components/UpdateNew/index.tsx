import React, { FC } from 'react'
import { observer } from 'mobx-react-lite'

import UiButton from '@/components/UI/UiButton'
import newsStore, { INewsItem } from '@/stores/news.store'
import ArticleForm from '@/components/ArticleForm'
import modalStore from '@/stores/modal.store'

interface IUpdateNewsProps {
  item: INewsItem
}

const UpdateNew: FC<IUpdateNewsProps> = observer(({ item }) => {
  const apply = (data: INewsItem) => {
    newsStore.updateItem(item.uuid, data)
    modalStore.close()
  }

  const open = () => {
    modalStore.open(
      'Редактирование статьи',
      <ArticleForm initialData={item} onSubmit={apply} onCancel={modalStore.close} />
    )
  }

  return (
    <>
      <UiButton onClick={open} size="small">
        Редактировать
      </UiButton>
    </>
  )
})

export default UpdateNew
