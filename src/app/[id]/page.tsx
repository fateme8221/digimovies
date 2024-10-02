export default function Home() {
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
              <div className="cover w-[30%] h-[500px]">
              <div className="w-full">
                  <div className="bg-gradient-to-b from-orange-normal/80 to-gray-600/50 h-[500px] p-1 rounded-xl ">
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
              <div className="content w-[70%] pr-3">
                <div className="content_head  flex items-center justify-between">
                  <div className="content_haed_right">
                    <h1 className="font-danaDemiBold text-3xl">دانلود فیلم Blink Twice 2024</h1>
                    <div className="comment_count flex items-center justify-start">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor"     className="size-6">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.625 9.75a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375m-13.5 3.01c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.184-4.183a1.14 1.14 0 0 1 .778-.332 48.294 48.294 0 0 0 5.83-.498c1.585-.233 2.708-1.626 2.708-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>
                      <span>178</span>
                      Comments
                    </div>
                  </div>
                  <div className="content_haed_left">
                    <div className="imdb-content flex flex-col items-center justify-center">
                      <div className="number text-center">
                        <strong className="text-orange-400"> 6.6</strong>
                        <small>/10</small>
                        <span className="block border-t-2 border-orange-400 pt-1.5 mt-1.5 text-xs">33.8K Votes</span>
                      </div>
                      <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAACFUlEQVR4nO2Yz08TQRTH98TiQTnIQU0TvWgMN7yIPw4ePHgxJj0Zb3oD/Ac8Er2YKBeP/gdFPRmjvXSH1jZoWyAUbZoQSEFC0IX+Qgu2fM10ArvjthVXttsx75O8dPb1ded9ZjfZnWoaQRAEQRAEoTaIHAnA0Cdg6CUwHV0dRqPHV5jsOWdv3vS9MfbXIibvXWusvN/NMNcR0pS4bVjLq1DUfG+C/Vu0F8iNYJ9vr0Vu9TkkFsdEvhCT863q6z+A7VVgIwykhkRN6pJck77cQYH1CZGvrhxMwM6OCcT6fRbY+gxEj/Gl/bPA0iNg/rZcN3PdKcDnNd8A33NA/jHAej0U2P0JJC84V7epwENns5mgM1eeAepV63julocCnIUHhyuQGwXKafnYU4FC9PAFSskOCFS/iM/dmnysjMBGWJ7YfKeYwPK4PPHyU8UEsvfkibN3FRPIBOUHWOpi+/qVZ/I5OXM3mwjcB8qpDgmYb8V45yuQON2+/nfqW0A84BSoZIBa2SYw7KFA/okYb0YOLsAffsUEMHtD1NgFtteATSZqOLUK8HHQpcDUeeDTHRHT16zJ9nKJM8CHATFOXwGifc76+Clxnr2InwQmj8rzvD9h/S59VeRix8XLHv+uTY//weu0ofCGhukFfgVedkEjcBWG/kLju3tlN/VGz1nrnwmmh/geU4HGi3zl95snCIIgCILQXPMLDD37OloJVKgAAAAASUVORK5CYII=">
                      </img>
                    </div>
                  </div>
                </div>
                <div className="content_item w-full h-full mt-16">
                  <ul className="font-danaDemiBold grid grid-cols-2 text-sm h-60 w-full">
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="">
                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-4">
                         <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125Z" />
                         </svg>
                      </span>
                      <span className="lab_item">کیفیت :</span>
                      <span className="res_item iranYekanReg">2160p  4K  WEB-DL</span>
                    </li>
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="">
                       
                      </span>
                      <span className="lab_item">زمان :</span>
                      <span className="res_item">103 دقیقه</span>
                    </li>
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="icon_holder">
                       
                      </span>
                      <span className="lab_item">ژانر :</span>
                      <span className="res_item">
                        <a href="https://digimovie90.sbs/genre/%d8%b1%d8%a7%d8%b2%d8%a2%d9%84%d9%88%d8%af/" rel="tag">
                          رازآلود
                        </a>
                        ,
                        <a href="https://digimovie90.sbs/genre/%d9%87%db%8c%d8%ac%d8%a7%d9%86-%d8%a7%d9%86%da%af%db%8c%d8%b2/" rel="tag">
                          هیجان انگیز
                        </a>
                      </span>
                    </li>
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="icon_holder">
                       
                      </span>
                      <span className="lab_item">رده سنی :</span>
                      <span className="res_item">R</span>
                    </li>
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="icon_holder">
                       
                      </span>
                      <span className="lab_item">کارگردان :</span>
                      <span className="res_item">
                        <a href="https://digimovie90.sbs/director/zoe-kravitz/" rel="tag">Zoë Kravitz</a>
                      </span>
                    </li>
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="icon_holder">
                        
                      </span>
                      <span className="lab_item">محصول کشور :</span>
                      <span className="res_item">
                        <a href="https://digimovie90.sbs/country/%d8%a2%d9%85%d8%b1%db%8c%da%a9%d8%a7/" rel="tag">
                          آمریکا
                        </a>
                        ,
                        <a href="https://digimovie90.sbs/country/%d9%85%da%a9%d8%b2%db%8c%da%a9/" rel="tag">
                          مکزیک
                        </a>
                      </span>
                    </li>
                    <li className="w-full flex items-center gap-1 mb-6 ">
                      <span className="icon_holder">
                       
                      </span>
                      <span className="lab_item">نویسنده :</span>
                      <span className="res_item">Zoë Kravitz,E.T. Feigenbaum</span>
                    </li>
                    <li className="w-full flex items-center gap-1 grid-cols-subgrid col-span-2 mb-6 ">
                      <span className="icon_holder">
  
                      </span>
                      <span className="lab_item">ستارگان :</span>
                      <span className="res_item">
                        <a title="Naomi Ackie" href="https://digimovie90.sbs/actor/naomi-ackie/">Naomi Ackie</a>,
                        <a title="channing tatum" href="https://digimovie90.sbs/actor/channing-tatum/">channing tatum</a>,
                        <a title="Alia Shawkat" href="https://digimovie90.sbs/actor/alia-shawkat/">Alia Shawkat</a>
                      </span>
                    </li>
                  </ul>
                  <div className="description w-full text-xs font-danaDemiBold">
                    داستان یک میلیاردر در حیطه تکنولوژی به‌نام اسلیتر کینگ که در مراسم جذب سرمایه با پیشخدمتی به‌نام فریدا آشنا می‌شود. اسلیتر او و دوستان‌اش را به یک سفر رویایی در جزیره شخصی‌اش دعوت می‌کند اما شرایط مطابق انتظارات فریدا پیش نمی‌رود و...
                  </div>
                  <div className="rating-content flex items-center justify-between">
                  <div className="ratin-right flex items-center justify-center gap-2">
                    <strong className="w-8 h-8 bg-green-rating rounded-md flex items-center justify-center font-danaDemiBold">66</strong>
                     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
                        <circle cx="24" cy="24" r="20" fill="#ffcb00"></circle><circle cx="24" cy="24" r="16"></circle><path fill="#fff" d="M-10.713,40.702h4.423v-8.518c0-0.359,0.03-0.777,0.179-1.136 c0.269-0.747,0.956-1.644,2.122-1.644c1.435,0,2.092,1.255,2.092,3.108v8.189h4.423v-8.548c0-0.359,0.06-0.837,0.179-1.166 c0.299-0.867,1.046-1.584,2.092-1.584c1.464,0,2.152,1.225,2.152,3.347v7.95h4.423v-8.607c0-4.363-2.122-6.336-4.931-6.336 c-1.076,0-1.973,0.239-2.779,0.717c-0.687,0.418-1.345,0.986-1.883,1.763H1.72c-0.628-1.524-2.122-2.481-4.005-2.481 c-2.51,0-3.796,1.375-4.423,2.301h-0.09l-0.209-1.973h-3.825c0.06,1.285,0.12,2.839,0.12,4.662L-10.713,40.702L-10.713,40.702z" transform="rotate(-45)"></path>
                      </svg>
                      <span>امتیاز منتقدین</span>
                      
                  </div>
                  <div className="">
                      <div className="toolek_rating notrated" >
                        <ul className="rating-menu flex" >
                          <li>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                          </li>
                          <li>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                          </li>
                          <li>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                          </li>
                          <li>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                          </li>
                          <li>
                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                            </svg>
                          </li>
                        </ul>
                        <span className="avg_rate">3.79</span>
                        <span className="vote_count">از 75 امتیاز</span>
                      </div>
                  </div>
                </div>
                </div>
              </div>
           </div>
        </div>
         </div>
    </div>
    );
  }