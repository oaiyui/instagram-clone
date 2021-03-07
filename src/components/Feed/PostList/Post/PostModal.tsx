import React from 'react'
import Modal from '@material-ui/core/Modal'
import MoreHorizIcon from '@material-ui/icons/MoreHoriz'
import { UserType, PostType } from '../../../../types/types';


const PostModal: React.FC<Props> = ({curUserId, deletePost, follow, isFollowed, ownerId, postId, unfollow}) => {
  
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)


  const onFollow = () => {
    follow(ownerId)
    handleClose()
  }
  const onUnfollow = () => {
    unfollow(ownerId)
    handleClose()
  }
  let followBtn
  if (ownerId === curUserId) {
    followBtn = null
  } else if (isFollowed) {
    followBtn = <button onClick={onUnfollow} style={{color: 'red'}}>Unfollow</button>
  } else {
    followBtn = <button onClick={onFollow}>Follow</button>
  }


  const onDelete = () => {
    deletePost(postId)
    handleClose()
  }


  return (
    <div>
      <MoreHorizIcon onClick={handleOpen} />
      <Modal open={open} onClose={handleClose}>
        <div className="modalOuter">
          <div className="modal">
            {followBtn}
            {ownerId === curUserId && <button onClick={onDelete} style={{color: 'red'}}>Delete post</button>}
            <button onClick={handleClose}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PostModal




// types

interface Props {
  curUserId: UserType['id']
  deletePost: (id: PostType['id']) => void
  follow: (id: UserType['id']) => void
  isFollowed: UserType['is_followed']
  ownerId: UserType['id']
  postId: PostType['id']
  unfollow: (id: UserType['id']) => void
}