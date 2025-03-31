import { FC, ReactNode } from 'react'
import commentFormStore from '@/stores/commentForm.store'
import { observer } from 'mobx-react-lite'

interface ICommentFormActionHOCProps {
  actionType: 'create' | 'update'
  uuid: string
  children: (action: () => void) => ReactNode
}

const CommentFormActionHOC: FC<ICommentFormActionHOCProps> = observer(({ actionType, children, uuid }) => {
  const action = async () => {
    await commentFormStore.setActionType(actionType)
    commentFormStore.submit(uuid)
    await commentFormStore.setActionType('create')
  }

  return children(action)
})

export default CommentFormActionHOC
