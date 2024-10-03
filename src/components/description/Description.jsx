import React from 'react'

function Description({post}) {
  return (
    <div className="description w-full text-xs font-danaDemiBold mt-4">
      {post?.description}
    </div>
  )
}

export default Description