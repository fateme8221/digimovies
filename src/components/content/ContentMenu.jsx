import React from 'react'

function ContentMenu({post}) {
  return (
    <ul className="font-danaDemiBold grid grid-cols-2 text-sm h-60 w-full">
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="">
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
         <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
         </svg>
      </span>
      <span className="lab_item">کیفیت :</span>
      <span className="res_item iranYekanReg">{post?.quality}</span>
    </li>
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="">
       
      </span>
      <span className="lab_item">زمان :</span>
      <span className="res_item">{post?.time} دقیقه</span>
    </li>
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="icon_holder">
       
      </span>
      <span className="lab_item">ژانر :</span>
        <span className="res_item">
          <a href="/" rel="tag">
            {post?.genres}
          </a>
      </span>
    </li>
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="icon_holder">
       
      </span>
      <span className="lab_item">رده سنی :</span>
      <span className="res_item">{post.agegroup}</span>
    </li>
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="icon_holder">
       
      </span>
      <span className="">کارگردان :</span>
      <span className="">
        <a href="/" rel="tag">{post.director}</a>
      </span>
    </li>
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="icon_holder">
        
      </span>
      <span className="">محصول کشور :</span>
      <span className="">
        <a href="https://digimovie90.sbs/country/%d8%a2%d9%85%d8%b1%db%8c%da%a9%d8%a7/" rel="tag">
          {post?.countrys}
        </a>
        ,
      </span>
    </li>
    <li className="w-full flex items-center gap-1 mb-6 ">
      <span className="icon_holder">
       
      </span>
      <span className="">نویسنده :</span>
      <span className="">{post.auther}</span>
    </li>
    <li className="w-full flex items-center gap-1 grid-cols-subgrid col-span-2 mb-6 ">
      <span className="icon_holder">

      </span>
      <span className="lab_item">ستارگان :</span>
        <span className="res_item">
          {post?.actor}
      </span>
    </li>
    </ul>
  )
}

export default ContentMenu