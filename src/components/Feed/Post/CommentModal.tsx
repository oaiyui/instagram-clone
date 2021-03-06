import React from 'react'
import Modal from '@material-ui/core/Modal'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { CommentType, PostType } from '../../../types/types';


const CommentModal: React.FC<Props> = ({commentId, deleteComment, postId}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const onDelete = () => {
    if (commentId) {
      deleteComment(commentId, postId)
    }
    handleClose()
  }


  return (
    <div>
      <MoreHorizIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">
            <button onClick={onDelete} style={{color: 'red'}}>Delete comment</button>
            <button onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default CommentModal




// types
interface Props {
  commentId: CommentType['id'] | null
  deleteComment: (commentId: CommentType['id'], postId: PostType['id']) => void
  postId: PostType['id']
}