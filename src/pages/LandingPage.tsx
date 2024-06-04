import React from 'react';
import Navbar from "../components/Navbar";
import { Card, Carousel } from "antd";
import { IoBook } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { SiConsul } from "react-icons/si";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { IoIosCreate } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '300px',
  width: '100%',
  objectFit: 'cover',
};

const LandingPage = () => {
  return (
    <>
      <div className="relative mt-[80px]">
        <div className='bg-white fixed inset-x-0 z-999999 top-0 thead'>
          <Navbar />
        </div>
        <div>
        <img src="/images/teamLanding2.jpg" alt="Team Landing" className="w-full h-full object-cover" />
        <div className="absoute inset-0 bg-green-800 opacity-50"></div>
        <div className=" inset-0 flex flex-col items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-2xl font-bold">Just Like Technology</h1>
            <h1 className="text-2xl font-bold">We Never Stop Evolving</h1>
            <div className="flex flex-col mt-4 italic">
              <span>Our technical expertise is constantly evolving.</span>
              <span>We are fully proficient in a wide selection of fields</span>
              <span>and continuously growing.</span>
            </div>
            <div className="mt-4">
              <button className="bg-green-600 px-12 py-2 text-white font-semibold">Explore More</button>
            </div>
          </div>
        </div>
        </div>
       
        <div className="flex flex-col mx-2 -mt-16">
          <Card className="w-full">
            <div className="flex items-center justify-center flex-col">
              <IoBook size={60} className="text-green-800" />
              <span className="mt-2 text-2xl text-green-800 font-semibold">About Us</span>
              <div className="flex flex-col items-center mt-4">
                <span>We provide customized, targeted and tailored</span>
                <span>solutions for all</span>
              </div>
              <div className="mt-4">
                <button className="bg-green-600 px-8 py-2 text-white font-semibold">Learn More</button>
              </div>
            </div>
          </Card>
          <div className="items-center justify-center mx-2">
            <div className="items-center justify-center h-1 bg-green-600"></div>
          </div>
          <Card className="w-full bg-green-900">
            <div className="flex items-center justify-center flex-col">
              <BsQuestionCircleFill size={60} className="text-white" />
              <span className="mt-2 text-2xl text-white font-semibold">Why Hire Us?</span>
              <div className="flex flex-col items-center mt-4 text-white">
                <span>We provide customized, targeted and tailored</span>
                <span>solutions for all</span>
              </div>
              <div className="mt-4">
                <button className="bg-white px-8 py-2 text-black font-semibold">Learn More</button>
              </div>
            </div>
          </Card>
          <div className="items-center justify-center mx-2">
            <div className="items-center justify-center h-1 bg-green-600"></div>
          </div>
          <Card className="w-full">
            <div className="flex items-center justify-center flex-col">
              <RiTeamFill size={60} className="text-green-800" />
              <span className="mt-2 text-2xl text-green-800 font-semibold">Our Team</span>
              <div className="flex flex-col items-center mt-4">
                <span>We provide customized, targeted and tailored</span>
                <span>solutions for all</span>
              </div>
              <div className="mt-4">
                <button className="bg-green-600 px-8 py-2 text-white font-semibold">Learn More</button>
              </div>
            </div>
          </Card>
        </div>
        <div className="items-center justify-center mx-4">
          <div className="items-center justify-center h-1 bg-green-600"></div>
        </div>
        <div className="mt-16 flex flex-col mx-10">
          <span className="text-yellow-700 font-semibold">Vandzilah TECHNOLOGY</span>
          <span className="mt-4 text-xl text-green-800">Solution Through Innovations</span>
          <div className="mt-4">
            <p>
              Vandzilah Technology is a social
              enterprise providing services and
              consultancy in the technology
              sector. With more than 8 years of
              experience we have become a strong
              force in leveraging technological
              innovation for development.
            </p>
            <p className="mt-4">
              Our company wants to contribute to
              the digitalization of Ghana. We believe
              that in order for the country to benefit
              from technological development we
              have to create access for everyone.
              Therefore, Vandzilah Technology
              aims to expose everyone to the
              benefits and possibilities that come
              with digital innovation. We develop
              solutions that enhance access and
              increase knowledge. Vandzilah Technology provides
              customized, targeted and tailored
              solutions for all. We use a wide
              selection of technological services,
              ranging from web development
              and network engineering to
              robotics and internet of things
              development, to serve our clients.
            </p>
          </div>
        </div>
        <div className="mt-24">
          <img src="/images/teamsmall.jpg" alt="Team Small" className="w-full h-full object-cover" />
        </div>
        {/* Our Services */}
        <div className="bg-slate-100 pb-24 flex items-center justify-center flex-col">
          <div className="mt-8">
            <span className="text-yellow-700 font-semibold">Our Services</span>
          </div>
          <div className="mt-6 text-2xl font-semibold text-green-800 flex flex-col items-center justify-center">
            <span>We don't follow trends,</span>
            <span>we set them!</span>
          </div>
          <div className="w-full mt-6">
            <Carousel autoplay className="mx-10">
              <div>
                <img src="/images/network.jpg" alt="Network" style={contentStyle} />
              </div>

              <div>
                <img src="/images/webdev.jpg" alt="Web Development" style={contentStyle} />
              </div>
              <div>
                <img src="/images/iot.jpg" alt="IoT" style={contentStyle} />
              </div>
              <div>
                <img src="/images/graphic.jpg" alt="Graphic" style={contentStyle} />
              </div>
            </Carousel>
          </div>
        </div>
        {/* Why Choose Us */}
        <div className="mx-10 mt-8 flex flex-col">
          <span className="text-yellow-700 font-semibold">How we work</span>
          <div className="mt-4 flex flex-col text-green-800 font-semibold text-3xl">
            <span>Pragmatic</span>
            <span>people who</span>
            <span>know your</span>
            <span>industry</span>
          </div>
          <div className="mt-4 flex flex-col">
            <p>
              At Vandzilah Technology, we consult with clients to
              understand their unique needs, develop innovative
              solutions tailored to those needs,
              and create transformative technology that drives growth and success.
              Our approach is simple yet powerful:
            </p>
            <div className="mt-6 flex flex-col space-y-4">
              <Card className="w-full h-[80px] shadow-md">
                <div className="flex items-center flex-col -mt-4">
                  <SiConsul size={30} className="text-green-600" />
                  <span className="mt-2 text-green-800 font-semibold">Consult</span>
                </div>
              </Card>
              <Card className="w-full h-[80px] shadow-md">
                <div className="flex items-center flex-col -mt-4">
                  <MdOutlineDeveloperMode size={30} className="text-green-600" />
                  <span className="mt-2 text-green-800 font-semibold">Develop</span>
                </div>
              </Card>
              <Card className="w-full h-[80px] shadow-md">
                <div className="flex items-center flex-col -mt-4">
                  <IoIosCreate size={30} className="text-green-600" />
                  <span className="mt-2 text-green-800 font-semibold">Create</span>
                </div>
              </Card>
            </div>
          </div>
        </div>
        {/* */}
        <div className="mt-8">
          <img src="/images/leader.jpg" alt="" />
        </div>
        <div className="relative h-[540px]">
          <div className="w-full">
            <img src="/images/teamConclu.jpg" alt="Team Landing" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-800 opacity-70"> </div>
            <div className="absolute inset-0 flex text-[15px] flex-col items-center justify-center">
              <h1 className="mx-4 text-white text-center font-bold text-lg md:text-xl lg:text-2xl xl:text-3xl">We provide all our clients with customized
                solutions, leveraging digital innovations for growth,
                improvements, and development.</h1>
              <div className="ml-40 mt-2 mb-11">
                <span className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl font-cursive">Maxwell Dzillah, CEO</span>
              </div>
              <div className="mx-6 text-center">
                <p className="text-white text-xs">
                  At Vandzilah Technology, we consult,
                  procure, develop, create, install,
                  implement, deliver and more. Due to our
                  highly qualified team with an extensive
                  skill set, the range of solutions we can
                  provide with you is endless
                </p>
                <button className="text-white font-semibold mt-12 px-12 py-4 bg-yellow-700 opacity-80">
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* Testimonials */}
        <div className="mt-12 flex flex-col items-center">
          <span className="text-yellow-700 font-semibold">Testimonial</span>
          <div className="mt-4 text-center text-xl font-semibold text-green-800">
            <p>Our Clients</p>
            <p>Reviews</p>
          </div>
          <div className="mt-8 text-center text-md space-x-4 space-y-2 italic">
            <p>"It was an interesting
              challenge to design</p>
            <p>and develop an remotely
              operable</p>
            <p>monitoring system
              from scratch." <span className="text-yellow-800"> - Evans Honu, Hardware Engineer</span></p>
          </div>
          <div>
            <div className="flex items-center justify-center mx-4 mt-12">
              <div>
                <img src="/images/giz.png" className="w-50 h-50" alt="" />
              </div>
              <div>
                <img src="/images/recelghana.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24 bg-green-900 py-12 border-b-2 border-white">
          <div className="mx-10 w-20 h-20  bg-green-700 flex items-center flex-col justify-center">
            <IoCall color="white" size={24} />

          </div>
          <div className="flex flex-col mt-8 mx-12">
            <span className="font-semibold text-green-400">Call Us</span>
            <span className="mt-4 font-semibold text-white">+233(0) 20 656 2493</span>
          </div>

        </div>
        <div className=" bg-green-900 py-12 border-b-2 border-white">
          <div className="mx-10 w-20 h-20 bg-green-700 flex items-center flex-col justify-center">
            <IoMail color="white" size={24} />

          </div>
          <div className="flex flex-col mt-8 mx-12">
            <span className="font-semibold text-green-400">Mail</span>
            <span className="mt-4 font-semibold text-white">info@vandzilahtechnologies.com</span>
          </div>

        </div>
        <div className=" bg-green-900 py-12 border-b-2 border-white">
          <div className="mx-10 w-20 h-20 bg-green-700 flex items-center flex-col justify-center">
            <FaLocationCrosshairs color="white" size={24} />
          </div>
          <div className="flex flex-col mt-8 mx-12">
            <span className="font-semibold text-green-400">Address</span>
            <span className="mt-4 font-semibold text-white">www.vandzilahtechnologies.com</span>
          </div>
        </div>
        <div className=" flex flex-col items-center justify-center">
          <img src="/images/socials.jpeg " alt="" className="w-70 h-10 mt-8" />
        </div>
        <div className="mt-12 border-t-2 mx-2 py-4 border-green-800 flex flex-col items-center justify-center">
          <span className="text-3xl text-green-800">Vandzilah</span>
          <span>Powered by <span className="text-yellow-700">Vandzillah</span></span>
        </div>
        <div className="mt-8 flex flex-col items-center justify-center ">
          <span className="text-[4px]">Site web conçu par <span className='text-yellow-700'>@d11b1r</span></span>
        </div>
        {/* Social Media Logos */}
        {/* <div className="flex items-center justify-center mt-8 mb-8">
          <img src="/images/facebook.svg" alt="Facebook" className="w-8 h-8 mx-2" />
          <img src="/images/instagram.png" alt="Instagram" className="w-8 h-8 mx-2" />
          <img src="/images/twitter.svg" alt="Twitter" className="w-8 h-8 mx-2" />
          <img src="/images/linkedin.png" alt="LinkedIn" className="w-8 h-8 mx-2" />
        </div> */}
      </div>
    </>
  );
}

export default LandingPage;

