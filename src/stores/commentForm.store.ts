import { makeAutoObservable } from 'mobx'
import commentsStore, { ICommentsItem } from '@/stores/comments.store'

class CommentFormStore {
  formData: ICommentsItem = getInitialState()
  actionType: 'create' | 'update' = 'create'

  constructor() {
    makeAutoObservable(this)
  }

  setActionType = (value: typeof this.actionType) => {
    this.actionType = value
  }

  setFormData = (data: ICommentsItem) => {
    this.formData = data
  }

  submit = (article_uuid: ICommentsItem['article_uuid']) => {
    if (this.actionType === 'update') {
      commentsStore.updateItem(this.formData.uuid, this.formData)
    } else {
      commentsStore.createItem({ ...this.formData, article_uuid })
    }

    this.setActionType('create')
    this.resetFormData()
  }

  resetFormData = () => {
    this.formData = getInitialState()
    return this.formData
  }
}

const getInitialState = (): ICommentsItem => ({
  user_name: '',
  comment: '',
  article_uuid: '',
  uuid: '',
  avatar_url: ''
})

const commentFormStore = new CommentFormStore()

export default commentFormStore
