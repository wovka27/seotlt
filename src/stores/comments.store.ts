import { computed, makeObservable } from 'mobx'
import CrudStore, { IBaseItem } from '@/stores/crud.store'

export interface ICommentsItem extends IBaseItem {
  user_name: string
  article_uuid: string
  comment: string
  avatar_url: string
}

class CommentsStore extends CrudStore<ICommentsItem> {
  constructor() {
    super('comments')
    makeObservable(this, {
      ...this.observableAnnotations,
      commentsList: computed
    })
  }

  get commentsList() {
    return Object.groupBy(this.items, (item) => item.article_uuid)
  }
}

const commentsStore = new CommentsStore()

export default commentsStore
