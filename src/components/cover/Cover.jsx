import React from 'react'

function Cover({cover}) {
  return (
    <div className="cover w-auto mx-auto md:w-[30%] ">
    <div className="w-full h-[400px] xl:h-[500px]">
        <div className="bg-gradient-to-br from-orange-normal to-gray-700/50 h-full p-1 rounded-xl ">
          <a href="/" className=" flex h-full w-full">
            <img className="rounded-xl h-full w-full"
              src={cover}
              alt="cover image"
            />
          </a>
          <div className="flex flex-col items-center w-full">
            <div className="bottom-cover flex flex-col justify-start items-center text-center relative">
            <svg className="inline-block absolute -top-12 -right-[66px] w-[200px] h-[49px] "
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 27" width='200' >
                <path d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z" className="singlecrevpath" fill-rule="evenodd"></path>
              </svg>
              <div className="before:square" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width='25' stroke="currentColor" className="inline-block absolute bottom-10 left-0 right-0 m-auto">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              </div>
            <span className="mt-5 text-sm text-[#8f8f8f] text-nowrap">مشاهده تریلر</span>
           
          </div>
          <div class="PlayOnline mt-8">
              <a title="پخش آنلاین" class="text-sm py-2.5 px-5 bg-orange-normal rounded-full"  href="#">
                پخش آنلاین
              </a>
          </div>
          </div>
          
       </div>
    </div>
    </div>
  )
}

export default Cover