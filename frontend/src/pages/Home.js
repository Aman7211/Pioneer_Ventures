
import { motion } from "framer-motion";
import { AuroraBackground } from "../components/ui/aurora-background";
import LayoutGrid from "../components/ui/layout-grid";
import banner from '../assets/images/banner.mp4'
import Card from "../components/card/Card";
import approach from '../assets/images/arrowe.png';


const Home = () => {

  const data =[
{image:"https://img.freepik.com/free-photo/glowing-blue-sphere-held-by-human-hand-generated-by-ai_188544-41033.jpg?t=st=1719040686~exp=1719044286~hmac=25a1ed20b056110d01005fe728bed29e60bcd7b8052397b2d146cfd624c70b4b&w=1060",
  heading:"Innovation",
  paragraph:"We believe in embracing new ideas and technologies."
},
{image:"https://img.freepik.com/free-photo/futuristic-business-scene-with-ultra-modern-ambiance_23-2151003787.jpg?t=st=1719040766~exp=1719044366~hmac=97fc6ff432a475ed384c44ba2b58c20e5bf79d596d7348ec232c3c117f356e0d&w=900",
  heading:"Integrity",
  paragraph:"We also focus on building trust through transparency and honesty."
},
{image:"https://img.freepik.com/free-photo/3d-gemstones-fire-with-flames_23-2151073706.jpg?t=st=1719040801~exp=1719044401~hmac=02237977632612aadd2b5981c0e468ecee4543a4a5756f40d9d0b3f41afa159f&w=740",
  heading:"Impact",
  paragraph:"Creating meaningful change for our portfolio companies and society"
}
  ]  ;

  const Skeleton = () => (
    <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
  );
  const items = [
    {
      title: "The Dawn of Innovation",
      description: "Explore the birth of groundbreaking ideas and inventions.",
      header: <Skeleton />,
      // icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Digital Revolution",
      description: "Dive into the transformative power of technology.",
      header: <Skeleton />,
      // icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Art of Design",
      description: "Discover the beauty of thoughtful and functional design.",
      header: <Skeleton />,
      // icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Power of Communication",
      description:
        "Understand the impact of effective communication in our lives.",
      header: <Skeleton />,
      // icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Pursuit of Knowledge",
      description: "Join the quest for understanding and enlightenment.",
      header: <Skeleton />,
      // icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Joy of Creation",
      description: "Experience the thrill of bringing ideas to life.",
      header: <Skeleton />,
      // icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "The Spirit of Adventure",
      description: "Embark on exciting journeys and thrilling discoveries.",
      header: <Skeleton />,
      // icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
    },
  ];


const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Media</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       Investing in innovative media companies that are reshaping content creation, distribution, and consumption in the digital age.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Constructions</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Supporting advancements in construction technology, sustainable building practices, and infrastructure development for a better tomorrow
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Food & Beverages</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Fostering growth in the food and beverage industry with a focus on health, sustainability, and innovative product offerings.
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">HealthCare</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Investing in cutting-edge healthcare solutions, from medical devices to biotechnology, improving patient outcomes and overall health.
      </p>
    </div>
  );
};
const SkeletonFive = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Information Technology</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Empowering the future of IT with investments in software, hardware, cybersecurity, and AI-driven solutions for various industries.
      </p>
    </div>
  );
};
const SkeletonSix = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Media Distribution</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Enhancing media distribution networks, ensuring efficient and widespread access to high-quality content across multiple platforms.
      </p>
    </div>
  );
};
const SkeletonSeven = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Renewable Energy</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Championing sustainable energy solutions, from solar to wind, reducing carbon footprints and promoting a greener planet. 
      </p>
    </div>
  );
};
const SkeletonEight = () => {
  return (
    <div>
      <p className="font-bold text-4xl text-white">Real Estate</p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
      Investing in prime real estate ventures, focusing on sustainable developments and smart city innovations for modern living.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "https://img.freepik.com/free-photo/antique-camera-lens-wooden-table-indoors-generated-by-ai_188544-32919.jpg?t=st=1719049208~exp=1719052808~hmac=93b6c002e15da0d91ca1b25d71f1781275b8b83b216d994d02aee97fa0f4212f&w=1060"},
   {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/scene-construction-site-with-equipment_23-2151317285.jpg?t=st=1719046459~exp=1719050059~hmac=5ecfa80cb078538f9e1579f53d2df1578fa15c7d02dcf0bbd8f5629877eee26e&w=900" },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/top-view-eid-al-fitr-celebration-with-delicious-food_23-2151205080.jpg?t=st=1719048021~exp=1719051621~hmac=50fff2a6ef7bcecad5b79f962f4a3c0c84d13fc5c1492bca966722c946081ca3&w=900" },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/pills-dark-environment_23-2151438439.jpg?t=st=1719048122~exp=1719051722~hmac=29a905051deb3bc632dd77f69337b71eeeef9459ff6667225af9cb53fb091219&w=1380"},
  {
    id: 5,
    content: <SkeletonFive />,
    className: "md:col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/futurism-perspective-digital-nomads-lifestyle_23-2151252447.jpg?t=st=1719048176~exp=1719051776~hmac=cd4e47c350952256a531d06e9f792e1f7bd143538ce823685bcef4fab6c34436&w=996" },
  {
    id: 6,
    content: <SkeletonSix />,
    className: "md:col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/view-3d-videographer-with-camera_23-2151067045.jpg?t=st=1719048181~exp=1719051781~hmac=f2e826b59039bf53a7cf11825381f66ba8c75baea59362738952f861dd36c267&w=900"},
  {
    id: 7,
    content: <SkeletonSeven />,
    className: "md:col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/solar-panels-wind-mills-sunset-sustainable-energy-eco-environment_1268-27834.jpg?t=st=1719048334~exp=1719051934~hmac=d8f97ef5eb02dae7ecbd2c235d16630e5c9a6a20c6b71f91057f4007ad9a9416&w=900" },
  {
    id: 8,
    content: <SkeletonEight />,
    className: "md:col-span-1",
    thumbnail:
      "https://img.freepik.com/free-photo/3d-rendering-wooden-house_23-2151264503.jpg?t=st=1719048218~exp=1719051818~hmac=a2e64698de64a835772cb247e72e436772c1d1530f6dbe4bb1c09e4f21a215e9&w=1060"},
];
  return (
    <>
    <div className=" relative w-full ">
      <video src={banner}
      autoPlay
      loop
      muted
      className="z-0"
      ></video>
    </div>
    <div className="absolute z-10 top-[150px] md:top-[200px] font-serif text-center tracking-wider text-xl md:text-3xl font-medium bg-[rgba(0,0,0,0.5)] md:bg-[rgba(0,0,0,0.2)] text-white w-full">
  Empowering visionary entrepreneurs to build transformative companies
</div>


    <AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
        <div className="flex justify-center my-2 md:my-3 ">
<p className="md:text-3xl text-xl font-bold">Future of Innovations & Growths </p>
    </div>
     {/* all content of home page */}
<div  className="text-lg text-center md:mx-[110px] ">
Pioneer Ventures is a leading venture capital firm dedicated to supporting visionary entrepreneurs. Our mission is to foster innovation and drive growth by providing the capital, expertise, and network needed to transform ambitious ideas into industry-leading companies.
</div>

    </motion.div>
    </AuroraBackground>



    {/* <BentoGrid className="max-w-5xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid> */}

          {/* card hover effec t sectioon */}
          <div className="flex justify-center items-center">
  <div className="my-5">
    <p className="text-center text-2xl md:text-3xl font-bold mb-3 md:my-6">Our Core Values</p>
    <Card data={data} />
  </div>
</div>

<div>


<div className="md:mt-9">
<AuroraBackground>
    <motion.div
      initial={{ opacity: 0.0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.3,
        duration: 0.8,
        ease: "easeInOut",
      }}
      className="relative flex flex-col gap-4 items-center justify-center px-4"
    >
  <div className="flex flex-col md:flex-row items-center md:items-start">
      <div className="text-center  my-3 ml-2 md:ml-[10px]">
        <p className="text-2xl md:text-3xl font-bold mt-24 md:mt-0">Our Approach</p>
      </div>
      {/* all content of home page */}
      <div className="text-lg text-center font-medium mx-4 md:mx-[110px]">
        <p className="my-2 md:my-5">
          At <span className="text-red-800">Pioneer Ventures</span> we believe in more than just funding a business
        </p>
        <p>
          We try to offer a partnership that encompasses strategic guidance, operational support, and access to a global network with overall success.
        </p>
      </div>
      <div className="w-full md:w-[40%] flex justify-center md:justify-start">
        <img src={approach} alt="approach" className="w-full md:w-[500px] h-auto" />
      </div>
    </div>
    </motion.div>
    </AuroraBackground>
</div>
<div className="">
<p className="text-center text-3xl font-bold mt-28 md:mt-6 my-2">Our Investment Partner</p>
    <div className=" md:h-[110vh] ">
      <LayoutGrid cards={cards} />
    </div>
</div>

</div>


<div className="my-4 md:mb-14 text-center">
  {/* contact us */}
  <p className="text-center text-3xl font-bold mt-6 my-2">Contact us</p>

  <div  className="text-lg text-center mx-3 md:mx-[110px] my-4">
  Ready to take the next step? We'd love to hear from you.
</div>
<button className="text-white bg-blue-600 p-3 rounded my-4">
Connect Now
</button>
</div>
  
    </>
  );
}



export default Home



