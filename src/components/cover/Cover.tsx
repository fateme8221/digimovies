import React from 'react'

function Cover() {
  return (
    <div className="cover w-[30%] h-[500px]">
    <div className="w-full">
        <div className="bg-gradient-to-br from-orange-normal to-gray-700/50 h-[500px] p-1 rounded-xl ">
          <a href="/" className=" flex h-full w-full">
            <img className="rounded-xl h-full w-full"
              src="https://digimovie90.sbs/wp-content/uploads/2024/09/1njYxp9J6K3YT6wGC1YqJ5nb4j1.jpg"
              alt="cover image"
            />
          </a>
          <div className="bottom-cover flex flex-col justify-start items-center text-center relative">
            <svg className="inline-block absolute -top-14 right-0 left-0 mx-auto w-[200px] h-[50px] "
              xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 27" width='200' >
                <path d="M0 27c.417-.01.838-.03 1.3-.03a46.441 46.441 0 0023.462-6.34L43.127 4.11a16.829 16.829 0 0122.04 0l13.471 12.12.085-.04a45.881 45.881 0 0029.971 10.78c.463 0 .888.02 1.309.03H0z" className="singlecrevpath" fill-rule="evenodd"></path>
              </svg>
              <div className="before:square" >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" width='25' stroke="currentColor" className="inline-block absolute bottom-11 left-0 right-0 m-auto">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 0 1 0 1.972l-11.54 6.347a1.125 1.125 0 0 1-1.667-.986V5.653Z" />
              </svg>
              </div>
              <span className="mt-5 ">مشاهده تریلر</span>
          </div>
       </div>
    </div>
    </div>
  )
}

export default Cover