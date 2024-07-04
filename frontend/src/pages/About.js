import React from 'react';
import tree from '../assets/images/tree video.gif';

const About = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-1 mb-12">
        <section className="w-full py-12 md:py-0 lg:py-0 abc">
          <div className="container mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2 lg:gap-12">
            <div className="flex flex-col items-start space-y-4 lg:py-32">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                Pioneer Ventures
              </h1>
              <p className="text-muted-foreground md:text-xl">
                Empowering the next generation of innovators and disruptors.
              </p>
              <p className="my-5 bg-black bg-opacity-90 p-5 mx-1 text-white">
                About Us
              </p>
            </div>
            <div className="md:pt-20">
              <img src={tree} alt="growing business" className="w-full h-auto" />
            </div>
          </div>
        </section>
        <div className="flex flex-col items-center my-3 space-y-4 container mx-auto px-4 md:px-6">
          <h2 className="text-xl font-bold tracking-tighter sm:text-3xl md:text-4xl">
            Who we are
          </h2>
          <p className="text-muted-foreground md:text-xl container mx-auto">
            Pioneer Ventures is a premier venture capitalist firm dedicated to empowering visionary entrepreneurs to build transformative brands. Founded with a mission to foster innovation and drive sustainable growth, we provide not just capital, but strategic guidance, operational support, and access to a global network of industry leaders and experts. At Pioneer Ventures, we believe in the power of bold ideas and the potential of dedicated founders.
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
            Our approach is collaborative and hands-on, ensuring that our portfolio companies have the resources and mentorship they need to scale and succeed. We invest in early-stage and growth-stage companies across a diverse range of sectors, focusing on disruptive technologies and groundbreaking solutions.
          </p>
          <p className="text-muted-foreground md:text-xl container mx-auto">
            Our team comprises seasoned investors, successful entrepreneurs, and industry experts who bring a wealth of experience and a deep passion for innovation. We pride ourselves on our integrity, commitment, and the meaningful impact we create for our portfolio companies and society at large. Join us on a journey of innovation, growth, and success. <br /><br />At Pioneer Ventures, we are not just investors <span className="font-bold">” We are partners in building the future ”</span>.
          </p>
        </div>
      </main>
    </div>
  );
};

export default About;
