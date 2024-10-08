import React from 'react'

function HeadComponent({ post }) {
 
  return (
    <div className="content_head grid  md:flex md:flex-row-reverse md:justify-between md:items-center">
      <div className="content_haed_left -ml-8 flex flex-row-reverse">
        <div className='relative top-4 left-36  border border-gray-500 rounded-full w-[34px] h-[34px] text-center flex items-center justify-center' title="افزودن به علاقه مندی">
            <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' className='inline-block h-4 w-4' viewBox="0 0 511.999 511.999" id="heart">
            <path d="M469.715 72.39l.002.002-.003-.003z"></path>
            <path d="M469.794 72.469l-.077-.077c-56.34-56.367-148.035-56.387-204.403-.048l-.019.019-.025.025-9.242 9.243-9.243-9.243c-27.304-27.305-63.608-42.342-102.222-42.342-38.615 0-74.917 15.038-102.222 42.342C15.037 99.693 0 135.996 0 174.61c0 38.615 15.037 74.917 42.342 102.223l199.061 199.061a20.684 20.684 0 0029.253 0l199.056-199.057c56.352-56.328 56.385-147.993.082-204.368zM440.462 247.58L256.028 432.014 71.594 247.579c-19.49-19.491-30.224-45.404-30.224-72.969 0-27.563 10.734-53.478 30.224-72.968 20.118-20.118 46.544-30.176 72.969-30.176 26.426 0 52.852 10.058 72.969 30.176l23.87 23.869c8.078 8.078 21.174 8.078 29.252 0l23.87-23.869.005-.005.033-.033c40.22-40.202 105.639-40.202 145.857-.006l.08.081c40.214 40.234 40.2 105.682-.037 145.901z"></path>
            </svg>
            <span className='absolute top-2.5 -right-2 w-3.5 h-3.5 bg-white rounded-full flex items-center justify-center'>
            <svg xmlns="http://www.w3.org/2000/svg" fill='#f0a244' className='w-2 h-2' viewBox="0 0 426.667 426.667" id="plus">
              <path d="M405.332 192H234.668V21.332C234.668 9.559 225.109 0 213.332 0 201.559 0 192 9.559 192 21.332V192H21.332C9.559 192 0 201.559 0 213.332c0 11.777 9.559 21.336 21.332 21.336H192v170.664c0 11.777 9.559 21.336 21.332 21.336 11.777 0 21.336-9.559 21.336-21.336V234.668h170.664c11.777 0 21.336-9.559 21.336-21.336 0-11.773-9.559-21.332-21.336-21.332zm0 0"></path>
            </svg>
            </span>
        </div>
        <div className="imdb-content flex flex-col items-center justify-center">
        <div className="number text-center font-moraddaMeduim w-24">
          <strong className="text-orange-400 text-xl">{post.Score}</strong>
          <small className='font-moraddaLight'>/10</small>
          <span className="block moraddaLight border-t border-orange-400 pt-[5px] my-[7px] text-sm">33.8K Votes</span>
        </div>    
          <svg className='inline-block p-1 rounded-md w-[50px] h-[22px] bg-orange-normal ' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 921 372" id="imdb_logo">
            <path d="M704.86 0h91.47c.08 39.56-.16 79.13.12 118.7 3.31-2.78 6.32-5.9 9.52-8.8 6.88-5.83 14.82-10.56 23.53-13.06 9.9-2.82 20.26-3.98 30.54-3.66 14.4.44 29.28 3.86 40.93 12.72 10.58 8.44 17.6 21.47 18.34 35.05.99 14.99.99 30.03 1 45.06v85.98c-.04 18.35.16 36.9-3.44 54.98-1.82 9.83-6.91 18.92-14.19 25.74-10.48 10.51-24.82 16.86-39.59 17.94-13.45.9-27.31-.68-39.72-6.12-10.64-4.91-19.5-12.9-27.09-21.69-2.23 7.69-3.52 15.67-6.22 23.21-28.35.35-56.73.04-85.09.15-.23-9.4-.07-18.81-.11-28.21V0m100.51 146.59c-3.9.93-6.62 4.47-7.22 8.33-1.91 10.56-1.63 21.37-1.78 32.07.03 31.67-.03 63.33.03 95 .21 8.61.11 17.31 1.79 25.79.76 4.27 3.41 8.57 7.85 9.73 5.83 1.37 12.41.33 17.35-3.15 2.68-1.87 3.29-5.29 3.58-8.32 2.15-20.27 1.68-40.68 1.72-61.03-.06-22.01.1-44.01-.09-66.02-.33-8.1-.19-16.37-2.38-24.24-.86-3.48-3.93-5.82-7.14-7.01-4.33-1.63-9.19-2.4-13.71-1.15zM127.5 3.28c41.07-.01 82.14.07 123.21-.04 6.45 39.78 11.4 79.78 17.49 119.62 2.27 15.86 4.74 31.69 6.88 47.56 1.81-.26 1.67-2.1 1.96-3.39 6.89-54.59 14.13-109.13 20.99-163.72 41.4-.04 82.8-.02 124.2-.01-.01 122.02.01 244.05-.01 366.08-27.62.04-55.24-.01-82.86.02-.07-77.77-.25-155.55-.2-233.32.02-2.91.04-5.82-.2-8.72-1.84 2.46-1.56 5.69-2.09 8.58-10.44 77.82-20.95 155.63-31.4 233.45-19.67.05-39.34-.09-59.01.07-11.19-75.41-21.93-150.89-32.94-226.32-.77-3.59-.32-7.65-2.48-10.79-.46 26.87-.06 53.76-.21 80.63l-.18 156.43c-27.7-.04-55.41-.01-83.11-.01-.03-122.04.05-244.08-.04-366.12zm328.63-.04c32.61.24 65.23-.26 97.85.31 19.11.63 38.35 1.23 57.16 4.97 15.68 3.33 31.46 9.91 42.11 22.34 7.97 9.05 13.49 20.3 15.5 32.21 1.53 9.22 2.03 18.56 2.53 27.88 1.15 29.03.84 58.09.88 87.13 0 24.98-.01 49.96 0 74.94-.1 21.28-.05 42.66-2.98 63.78-1.65 12.19-6.24 24.43-15.18 33.17-11.41 10.74-27.03 16-42.45 17.22-19.14 1.61-38.36 2.41-57.57 2.2-32.61.01-65.23-.02-97.84.02.02-122.06.05-244.11-.01-366.17m94.89 62.67v240.32c7.4-.08 15.36-.3 21.78-4.43 5.17-3.42 5.83-10.12 6.76-15.7.73-7 1.47-14.03 1.45-21.08.09-55.68.08-111.37 0-167.05 0-6.06-.45-12.14-1.37-18.13-.82-5.01-4.14-9.66-8.91-11.57-6.27-2.4-13.1-2.34-19.71-2.36zM.85 5.68c31.65-.11 63.3.02 94.95-.07 0 122.13.03 244.26-.01 366.39H.87C.84 249.89.87 127.79.85 5.68z"></path>
          </svg>
        </div>
      </div>
       <div className="content_haed_right ">
      <h1 className=" text-2xl mt-5 sm:mt-0">دانلود فیلم {post?.title}</h1>
      <div className="comment_count flex items-center justify-start gap-2 mt-2">
          <svg className='text-white h-4 w-4' fill='#fff' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30.333 30.333" id="comment">
            <path  d="M0 26.75V11.908c0-4.59 3.735-8.325 8.325-8.325h13.681c4.591 0 8.327 3.735 8.327 8.325v2.56c0 4.59-3.735 8.325-8.325 8.325H8.518L0 26.75zM8.325 5.439a6.476 6.476 0 00-6.469 6.469v11.933l6.253-2.905h13.899a6.476 6.476 0 006.469-6.469v-2.56a6.477 6.477 0 00-6.471-6.469H8.325v.001zm.612 6.328a1.765 1.765 0 110 3.53 1.765 1.765 0 010-3.53zm12.458 0a1.765 1.765 0 110 3.53 1.765 1.765 0 010-3.53zm-6.23 0a1.765 1.765 0 110 3.53 1.765 1.765 0 010-3.53z">
            </path> </svg>
        <span className='text-orange-normal'>{post?.comments}</span>
        Comments
      </div>
      </div>
      
      
</div>
  )
}

export default HeadComponent