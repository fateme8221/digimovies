import React from 'react'

function Description({post}) {
  return (
    <div className="description w-full text-xs font-danaDemiBold">
      {post?.description}
    </div>
  )
}

export default Description