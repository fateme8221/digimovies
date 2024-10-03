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
      <div dir="rtl" className="font-dana flex items-center justify-center h-full mt-20">
        <div className=" bg-cover bg-center bg-no-repeat md:h-[798px] w-full relative before:bg-blur"
        style={{
          backgroundImage: `url(${post?.bg})` 
        }}> 
        
        <div className="container relative">
           <div className="flex flex-wrap w-full gap-2.5 z-50 pt-8 pb-48">
              <Cover {...post}/>
              <Content {...post}/>
           </div>
        </div>
         </div>
    </div>
    );
  }