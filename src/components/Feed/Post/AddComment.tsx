import React, { useState } from 'react'
// import './Post.css'

interface PropsType {
  postId: number
  addComment: (body: string, postId: number) => void
}

const AddComment: React.FC<PropsType> = ({postId, addComment}) => {
  const [body, setBody] = useState('')

  const onAddComment = () => {
    addComment(body, postId)
    setBody('')
  }

  return (
    <div>
      <input type="text" value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={onAddComment}>add</button>
    </div>
  )
}

export default AddComment