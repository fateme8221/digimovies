'use client'
import getposts from'@/action'
import Content from "@/components/content/Content"
import Cover from "@/components/cover/Cover"
import { useEffect, useState } from "react";

export default function Page({ params }) {
  const [post, setPost] = useState({})
  
  useEffect(() => {

    const resPost = async () => {
        let res = await getposts(params.id)  
        setPost(res)
    }
    
    resPost()

  },[])
  
  return (
      <div dir="rtl" className="font-dana flex items-center justify-center h-screen">
        
        <div
        className=" bg-cover bg-center bg-no-repeat h-[798px] w-full"
        style={{
          backgroundImage: `url(https://digimovie90.sbs/wp-content/uploads/2024/09/dTaqzXA1auKRUjHPQjR3u0W7Gfl.jpg)` 
        }}> 
        <div className="w-full h-[798px] bg-gray-950 opacity-50 absolute"></div>
        <div className="container relative">
           <div className="flex w-full gap-2.5 z-50 pt-8 pb-48">
              <Cover/>
              <Content {...post}/>
           </div>
        </div>
         </div>
    </div>
    );
  }