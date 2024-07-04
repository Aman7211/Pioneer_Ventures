import React from 'react'

const Investment = () => {
  return (
    <div className='bg-[#f9f7f2] container mx-auto p-2'>
    <div className='flex'>
    <div className='w-[60%]  mx-[30px] my-[40px]'>
    <h1 className='text-[30px] font-bold '>PORTFOLIO</h1>
    <h3 className='font-bold mb-2 mt-5 text-xl'>Our Main Motive</h3>
    <p className='font-medium text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio quos, quod qui illum ex totam. Consequuntur fugiat perspiciatis, vitae maiores, nisi placeat odit minus earum illo quas aperiam labore animi. Laborum at ullam est saepe dolorum illum quia, ex, doloremque modi, non libero eius voluptatibus eaque possimus exercitationem magnam?</p>
    <h3 className='font-bold mb-2 mt-5 text-xl'>Our Moto</h3>
    <p className='font-medium text-lg '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur distinctio quos, quod qui illum ex totam. Consequuntur fugiat perspiciatis, vitae maiores, nisi placeat odit minus earum illo quas aperiam labore animi. Laborum at ullam est saepe dolorum illum quia, ex, doloremque modi, non libero eius voluptatibus eaque possimus exercitationem magnam?</p>
    </div>
    <div className='w-[50%]'>
     <div className="w-[200px] h-[200px] bg-blue-50 bg-opacity-40 shadow-xl my-6 ml-5 text-center text-blue-800 ml-[80px] border-2 border-gray-200 rounded-lg">
        <h2 className='pt-[45px] text-[35px] font-bold'>250+ Solution</h2>
        {/* <p className='my-3 font-medium mx-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus.</p> */}
     </div>
     <div className='relative z-10 mt-[-50px] ml-[200px]'>
     <div className="w-[200px] h-[200px] bg-blue-50 bg-opacity-40 shadow-lg my-6 ml-5 text-center text-blue-800 border-2 border-gray-200 rounded-lg">
        <h2 className='pt-[45px] text-[35px] font-bold'>250+ Solution</h2>
        {/* <p className='my-3 font-medium mx-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus.</p> */}
     </div>
     </div>
     <div className='relative z-20 mt-[-50px] ml-[65px]'>
     <div className="w-[200px] h-[200px] bg-blue-50 bg-opacity-40 shadow-lg my-6 ml-5 text-center text-blue-800 border-2 border-gray-200 rounded-lg">
        <h2 className='pt-[45px] text-[35px] font-bold'>250+ Solution</h2>
        {/* <p className='my-3 font-medium mx-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus.</p> */}
     </div>
     </div>
    </div>
    </div>
    </div>
  )
}

export default Investment