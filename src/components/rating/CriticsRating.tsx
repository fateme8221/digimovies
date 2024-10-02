import React from 'react'

function CriticsRating() {
  return (
    <div className="ratin-right flex items-center justify-center gap-2">
    <strong className="w-8 h-8 bg-green-rating rounded-md flex items-center justify-center font-danaDemiBold">66</strong>
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
        <circle cx="24" cy="24" r="20" fill="#ffcb00"></circle><circle cx="24" cy="24" r="16"></circle><path fill="#fff" d="M-10.713,40.702h4.423v-8.518c0-0.359,0.03-0.777,0.179-1.136 c0.269-0.747,0.956-1.644,2.122-1.644c1.435,0,2.092,1.255,2.092,3.108v8.189h4.423v-8.548c0-0.359,0.06-0.837,0.179-1.166 c0.299-0.867,1.046-1.584,2.092-1.584c1.464,0,2.152,1.225,2.152,3.347v7.95h4.423v-8.607c0-4.363-2.122-6.336-4.931-6.336 c-1.076,0-1.973,0.239-2.779,0.717c-0.687,0.418-1.345,0.986-1.883,1.763H1.72c-0.628-1.524-2.122-2.481-4.005-2.481 c-2.51,0-3.796,1.375-4.423,2.301h-0.09l-0.209-1.973h-3.825c0.06,1.285,0.12,2.839,0.12,4.662L-10.713,40.702L-10.713,40.702z" transform="rotate(-45)"></path>
      </svg>
      <span>امتیاز منتقدین</span>
      
  </div>
  )
}

export default CriticsRating