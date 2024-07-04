import React from "react";
import { Meteors } from "../components/ui/meteors";
import vid1 from '../assets/images/vid3.mp4';
 function Services() {

 
  return (
    <>

    {/* video section   of section page  */}
    <div className="flex">
    <div className="w-[50%]">
     <video src={vid1}
     autoPlay
     muted
     loop
     />
    </div>
<div className="w-[50%]">
<video
  className="w-[800px]"
  src={vid1}
  autoPlay
  muted
  loop />
</div>
    </div>
{/* 
    <div className="absolute top-[300px] z-50">
      <h1 className="text-4xl p-4 bg-white opacity-80 tracking-4">PORTFOLIO</h1>
    </div> */}

<div className="text-center my-5">
  <h1 className="text-3xl font-semibold">Our Investment Partner</h1>
</div>
<div className="mx-[30px] md:mx-0">
    <div className="flex flex-col md:flex-row md:justify-evenly ">
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover bg-[url('https://img.freepik.com/free-photo/antique-camera-lens-wooden-table-indoors-generated-by-ai_188544-32919.jpg?t=st=1719049208~exp=1719052808~hmac=93b6c002e15da0d91ca1b25d71f1781275b8b83b216d994d02aee97fa0f4212f&w=1060')] border border-gray-800  overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)]  px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Media  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Investing in innovative media companies that are reshaping content creation, distribution, and consumption in the digital age.
          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover bg-[url('https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317285.jpg?t=st=1719046459~exp=1719050059~hmac=5ecfa80cb078538f9e1579f53d2df1578fa15c7d02dcf0bbd8f5629877eee26e&w=900')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Construction  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Supporting advancements in construction technology, sustainable building practices, and infrastructure development for a better tomorrow.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  bg-[url('https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205080.jpg?t=st=1719048021~exp=1719051621~hmac=50fff2a6ef7bcecad5b79f962f4a3c0c84d13fc5c1492bca966722c946081ca3&w=900')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)]  px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Food & Beverages  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Fostering growth in the food and beverage industry with a focus on health, sustainability, and innovative product offerings.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row justify-evenly">
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  bg-[url('https://img.freepik.com/free-photo/pills-dark-environment_23-2151438439.jpg?t=st=1719048122~exp=1719051722~hmac=29a905051deb3bc632dd77f69337b71eeeef9459ff6667225af9cb53fb091219&w=1380')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)]  px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           HealthCare  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Investing in cutting-edge healthcare solutions, from medical devices to biotechnology, improving patient outcomes and overall health.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  bg-[url('https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252447.jpg?t=st=1719048176~exp=1719051776~hmac=cd4e47c350952256a531d06e9f792e1f7bd143538ce823685bcef4fab6c34436&w=996')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Information Technology  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Empowering the future of IT with investments in software, hardware, cybersecurity, and AI-driven solutions for various industries.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  bg-[url('https://img.freepik.com/free-photo/view-3d-videographer-with-camera_23-2151067045.jpg?t=st=1719048181~exp=1719051781~hmac=f2e826b59039bf53a7cf11825381f66ba8c75baea59362738952f861dd36c267&w=900')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Media Distribution
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Enhancing media distribution networks, ensuring efficient and widespread access to high-quality content across multiple platforms.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      
    </div>
    <div className="flex flex-col md:flex-row justify-evenly">
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  bg-[url('https://img.freepik.com/free-photo/solar-panels-wind-mills-sunset-sustainable-energy-eco-environment_1268-27834.jpg?t=st=1719048334~exp=1719051934~hmac=d8f97ef5eb02dae7ecbd2c235d16630e5c9a6a20c6b71f91057f4007ad9a9416&w=900')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Renewable Energy  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Championing sustainable energy solutions, from solar to wind, reducing carbon footprints and promoting a greener planet.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      <div className="  mx-4 my-4 w-full relative max-w-xs">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-blue-500 to-teal-500 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative shadow-xl bg-cover  bg-[url('https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264503.jpg?t=st=1719048218~exp=1719051818~hmac=a2e64698de64a835772cb247e72e436772c1d1530f6dbe4bb1c09e4f21a215e9&w=1060')] border border-gray-800 overflow-hidden rounded-2xl flex flex-col justify-end items-start">
         <div  className="bg-[rgba(0,0,0,0.6)] px-4 py-8 h-full">
          <h1 className="font-bold text-2xl text-white mb-4">
           Real Estate  
          </h1>

          <p className="font-normal text-base text-white mb-4 ">
          Investing in prime real estate ventures, focusing on sustainable developments and smart city innovations for modern living.          </p>
          <Meteors number={20} />
          </div>
        </div>
      </div>
      </div>
    </div>
    </>
  );
}



export default Services;