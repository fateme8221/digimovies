import React from 'react'
import Rating from '../rating/Rating'
import CriticsRating from '../rating/CriticsRating'
import Description from '../description/Description'
import ContentMenu from './ContentMenu'
import HeadContent from '../headContent/HeadContent'

function Content( post ) {
  console.log(post);
  
  return (
    <div className="content mt-[100px] md:mt-0 w-full md:w-[68%] pr-3">    
    <HeadContent post={post}/>
    <div className="content_item w-full h-full mt-8 relative">
        <ContentMenu post={post}/>
        <Description post={post} />
        <div className='bg-green-rating shadow-current hover:shadow-lime-500 w-12 h-12  rounded-xl rotate-45 absolute top-0 left-0 md:-left-5 hidden md:flex items-center justify-center group transition-all'>
          <div className="flex items-center justify-center  relative -rotate-45">
              <svg xmlns="http://www.w3.org/2000/svg" fill='#fff' className='w-5 h-5  flex items-center justify-center' viewBox="0 -56 512 512" id="subtitles">
            <path d="M432 400H80c-44.113 0-80-35.887-80-80V80C0 35.887 35.887 0 80 0h352c44.113 0 80 35.887 80 80v140c0 11.047-8.953 20-20 20s-20-8.953-20-20V80c0-22.055-17.945-40-40-40H80c-22.055 0-40 17.945-40 40v240c0 22.055 17.945 40 40 40h352c22.055 0 40-17.945 40-40 0-11.047 8.953-20 20-20s20 8.953 20 20c0 44.113-35.887 80-80 80zM212.176 232c-8.34 0-15.625 5.332-18.485 13.16-5.207 14.258-18.66 24.45-34.777 24.828C137.547 270.496 120 253.258 120 232v-63.285c0-20.754 16.34-38.211 37.086-38.703 16.766-.399 31.176 10.125 36.61 24.945 2.847 7.777 10.12 13.043 18.406 13.043h1.03c13.423 0 22.915-13.262 18.442-25.918-10.789-30.535-40.082-52.41-74.344-52.078-42.484.41-77.23 36.504-77.23 78.992v62.012c0 42.941 34.29 78.574 77.23 78.988 34.239.332 63.516-21.512 74.32-52.012 4.493-12.683-5.03-25.984-18.488-25.984zm196 0c-8.34 0-15.625 5.332-18.485 13.16-5.207 14.258-18.66 24.45-34.777 24.828C333.547 270.496 316 253.258 316 232v-63.285c0-20.754 16.34-38.211 37.086-38.703 16.766-.399 31.176 10.125 36.61 24.945 2.847 7.777 10.12 13.043 18.406 13.043h1.03c13.423 0 22.915-13.262 18.442-25.918-10.789-30.535-40.082-52.41-74.344-52.078-42.484.41-77.23 36.504-77.23 78.992v62.012c0 42.941 34.29 78.574 77.23 78.988 34.239.332 63.516-21.512 74.32-52.012 4.493-12.683-5.03-25.984-18.487-25.984zm0 0"></path>
             </svg>
             <div className="text_hover opacity-0  transition-all group-hover:opacity-100 group-hover:flex absolute left-14 text-xs text-nowrap py-1.5 pl-5 pr-2.5 bg-black rounded-lg before:arrow">
               همراه با زیرنویس چسبیده
              </div>
          </div>
        
        </div>
        <div className="rating-content flex items-center justify-between flex-wrap">
          <CriticsRating {...post}/>
          <div className="rating-Wrapper">
            <Rating post={post}/>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Content