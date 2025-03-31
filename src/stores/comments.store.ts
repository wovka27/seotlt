import { action, makeObservable, observable } from 'mobx'
import CrudStore, { IBaseItem } from '@/stores/crud.store'

export interface ICommentsItem extends IBaseItem {
  user_name: string
  article_uuid: string
  comment: string
  avatar_url: string
}

class CommentsStore extends CrudStore<ICommentsItem> {
  public filteredList: ICommentsItem[] = []

  constructor() {
    super('comments')
    makeObservable(this, { ...this.observableAnnotations, filterArticleByUuidList: action, filteredList: observable })
  }

  filterArticleByUuidList(article_uuid: string) {
    this.filteredList = this.items.filter((item) => item.article_uuid === article_uuid)
  }
}

const commentsStore = new CommentsStore()

export default commentsStore
