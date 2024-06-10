import React from 'react';
import Navbar from "../components/Navbar";
import { Card, Carousel } from "antd";
import { IoBook } from "react-icons/io5";
import { BsQuestionCircleFill } from "react-icons/bs";
import { RiTeamFill } from "react-icons/ri";
import { SiConsul } from "react-icons/si";
import { IoIosCreate } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import { FaLocationCrosshairs } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GrHostMaintenance } from "react-icons/gr";
import { SiHomeadvisor } from "react-icons/si";
import { useInView } from 'react-intersection-observer';
import Footer from '../components/Footer';
import { Link, useNavigate } from 'react-router-dom';

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  height: '300px',
  width: '100%',
  objectFit: 'cover',
  zIndex: -1
};

const LandingPage = () => {
  const navigate = useNavigate();
  const { ref: leftRef, inView: leftInView } = useInView({ triggerOnce: true });
  const { ref: rightRef, inView: rightInView } = useInView({ triggerOnce: true });
  const { ref: left2Ref, inView: left2InView } = useInView({ triggerOnce: true });
  const { ref: right2Ref, inView: right2InView } = useInView({ triggerOnce: true });
  const { ref: card1Ref, inView: card1InView } = useInView({ triggerOnce: true });
  const { ref: card2Ref, inView: card2InView } = useInView({ triggerOnce: true });
  const { ref: card3Ref, inView: card3InView } = useInView({ triggerOnce: true });

  return (
    <>
      <div className="mt-[80px] overflow-x-hidden">
        <Navbar />
        <div className="relative h-[520px] md:h-[1000px]" style={{
          backgroundImage: "url('/images/teamsmall.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}>
          {/*           <img src="/images/teamsmall.jpg" alt="Team Small" className="w-full h-full object-cover" /> */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-800 bg-opacity-50">
            <div className="text-center text-white">
              <div className=" md:flex items-center justify-center">
                <h1 className="text-2xl md:text-3xl font-bold md:whitespace-nowrap">Just Like Technology We Never Stop Evolving</h1>
              </div>
              <div className="md:flex flex-col mt-4 items-center justify-center italic mx-2">
                <h4 className="text-xs md:text-sm md:whitespace-nowrap">Our technical expertise is constantly evolving. We are fully proficient in a wide selection of fields and continuously growing.</h4>
              </div>
              <div className="mt-12">
                <Link to="/services">
                  <button className="bg-green-600 px-12 cursor-pointer py-2 text-white font-semibold">Explore More</button>
                </Link>
              </div>
            </div>
          </div>
        </div>


        <div className="flex  flex-col md:flex-row justify-between lg:justify-center  md:space-x-4 md:mx-2 -mt-20 ml-4 mr-2">
          <div className="md:hidden items-center justify-center mx-2 -mt-4">
            <div className="items-center justify-center h-1"></div>
          </div>
          <Card
            ref={card1Ref}
            className={` mb-4 md:mb-0 shadow-md ${card1InView ? 'slide-in-down' : ''}`}
          >
            <div className="flex items-center justify-center flex-col">
              <IoBook size={60} className="text-green-800" />
              <span className="mt-2 text-2xl text-green-800 font-semibold md:whitespace-nowrap">About Us</span>
              <div className="flex flex-col items-center mt-4">
                <span>We provide customized, targeted and tailored</span>
                <span>solutions for all</span>
              </div>
              <div className="mt-4">
                <button onClick={() => navigate("/services")} className="bg-green-600 px-8 py-2 text-white font-semibold">Learn More</button>
              </div>
            </div>
          </Card>
          <div className="md:hidden items-center justify-center mx-2 -mt-4">
            <div className="items-center justify-center h-1 bg-green-600"></div>
          </div>
          <Card
            ref={card2Ref}
            className={` mb-4 md:mb-0 bg-green-600 shadow-md ${card2InView ? 'slide-in-down' : ''}`}
          >
            <div className="flex items-center justify-center flex-col">
              <RiTeamFill size={60} className="text-green-800" color="white" />
              <span className="mt-2 text-2xl md:whitespace-nowrap text-white first-line:font-semibold">Who are we</span>
              <div className="flex flex-col items-center mt-4 text-white">
                <span>A creative and passionate team, dedicated to</span>
                <span>inovation and excellence</span>
              </div>
              <div className="mt-4">
                <button onClick={() => navigate("/team")} className="bg-white px-8 py-2 text-green-800 font-semibold">Learn More</button>
              </div>
            </div>
          </Card>
          <div className="md:hidden items-center justify-center mx-2 -mt-4">
            <div className="items-center justify-center h-1 bg-green-600"></div>
          </div>
          <Card
            ref={card3Ref}
            className={` mb-4 md:mb-0 shadow-md ${card3InView ? 'slide-in-down' : ''}`}
          >
            <div className="flex items-center justify-center flex-col">
              <BsQuestionCircleFill size={60} className="text-green-800" />
              <span className="mt-2 text-2xl text-green-800 font-semibold md:whitespace-nowrap">Why Hire Us</span>
              <div className="flex flex-col items-center mt-4">
                <span>We are proficient in a wide selection of fields</span>
                <span>and continuously growing</span>
              </div>
              <div className="mt-4">
                <a href="#how-we-work">
                  <button className="bg-green-600 px-8 py-2 text-white font-semibold">Learn More</button>
                </a>
              </div>
            </div>
          </Card>
        </div>


        <div className='md:flex eledessous md:mx-2 justify-between items-center lg:justify-center   w-full'>
          <div className='md:flex space-x-4 max-w-6xl'>
            <div ref={leftRef}
              className={`flex flex-col mx-10 md:mx-1 mt-12 ${leftInView ? 'slide-in-left' : ''}`}>
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
            <div ref={rightRef}
              className={`mt-24 md:mt-12 ${rightInView ? 'slide-in-right' : ''}`}>
              <img src="/images/teamsmall.jpg" alt="Team Small" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Our Services */}
        <div className="bg-slate-100 pb-24 flex items-center justify-center flex-col eledessous">
          <div className='max-w-6xl'>
            <div className="mt-12">
              <span className="text-yellow-700 font-semibold items-center justify-center flex">Our Services</span>
            </div>
            <div className="mt-6 text-2xl font-semibold text-green-800 flex flex-col items-center justify-center md:flex-row md:justify-center md:items-center">
              <span>We don't follow trends,</span>
              <span className="md:ml-2">we set them!</span>
            </div>
            <div className="w-full mt-6 ">
              <Carousel autoplay className="md:mx-2   w-full  md:bg-white md:flex" slidesToShow={2}>
                <div className='eledessous '>
                  <img src="/images/network.jpg" alt="Network" style={contentStyle} />
                </div>

                <div className='eledessous mr-4'>
                  <img src="/images/webdev.jpg" alt="Web Development" style={contentStyle} />
                </div>
                <div className='eledessous mr-4'>
                  <img src="/images/iot.jpg" alt="IoT" style={contentStyle} />
                </div>
                <div className='eledessous mr-4'>
                  <img src="/images/graphic.jpg" alt="Graphic" style={contentStyle} />
                </div>
              </Carousel>
            </div>
          </div>

        </div>


        {/* Why Choose Us */}
        <div id="how-we-work" className='md:flex eledessous  md:mx-2 justify-between items-center lg:justify-center   w-full'>
          <div className='md:flex space-x-4 max-w-6xl'>
            <div  className={`flex flex-col mx-10 md:mx-1 mt-12 ${left2InView ? 'slide-in-left' : ''}`} ref={left2Ref}>
              <span className="text-yellow-700 font-semibold">How we work</span>
              <div  className="mt-4 flex flex-col text-green-800 font-semibold text-3xl">
                <h1>Pragmatic people</h1>
                <h1>Who know you are</h1>
              </div>

              <div className="mt-4 flex flex-col">
                <p>
                  At Vandzilah Technology, we consult with clients to understand their unique needs,
                  develop innovative solutions tailored to those needs,
                  and create transformative technology that drives growth and success.
                  Our approach is simple yet powerful:
                </p>
                <div className="flex flex-col space-y-6 mt-6">
                  <Card className="w-full h-[80px] shadow-md">
                    <div className="flex items-center flex-col -mt-4">
                      <SiConsul size={30} className="text-green-600" />
                      <span className="mt-2 text-green-800 font-semibold">Consult</span>
                    </div>
                  </Card>
                  <Card className="w-full h-[80px] shadow-md">
                    <div className="flex items-center flex-col -mt-4">
                      <MdOutlineDeveloperMode size={30} className="text-green-600 " />
                      <span className="mt-2 text-green-800 font-semibold">Develop</span>
                    </div>
                  </Card>
                  <Card className="w-full h-[80px] shadow-md">
                    <div className="flex items-center flex-col -mt-4">
                      <IoIosCreate size={30} className="text-green-600" />
                      <span className="mt-2 text-green-800 font-semibold">Create</span>
                    </div>
                  </Card>
                  <Card className="w-full h-[80px] shadow-md">
                    <div className="flex items-center flex-col -mt-4">
                      <GrHostMaintenance size={30} className="text-green-600" />
                      <span className="mt-2 text-green-800 font-semibold">Maintain</span>
                    </div>
                  </Card>
                  <Card className="w-full h-[80px] shadow-md">
                    <div className="flex items-center flex-col -mt-4">
                      <SiHomeadvisor size={30} className="text-green-600" />
                      <span className="mt-2 text-green-800 font-semibold">Advise</span>
                    </div>
                  </Card>
                </div>


              </div>

            </div>
            <div className={`mt-24 hidden lg:flex md:mt-12 w-2/3 ${right2InView ? 'slide-in-right' : ''}`} ref={right2Ref}>
              <img src="/images/longleader.jpg" alt="Team Small" className="w-full h-full object-cover" />
            </div>
          </div>

        </div>


        <div className="relative h-[540px] eledessous md:mt-40">
          <div className="">
            <div className="w-full ">
              <img src="/images/teamConclu.jpg" alt="Team Landing" className="absolute inset-0 w-full h-full object-cover " />
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-green-800 opacity-70"> </div>
              <div className="absolute inset-0 flex text-[15px] flex-col items-center justify-center">
                <h1 className="mx-4 text-white text-center md:flex md:items-center md:justify-center font-bold text-md md:text-xl xl:text-3xl">We provide all our clients with customized
                  solutions, leveraging digital innovations for growth,
                  improvements, and development.</h1>
                <div className="ml-40 mt-2 mb-11">
                  <span className="text-white text-xl md:text-xl font-cursive">Maxwell Dzillah, CEO</span>
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
        </div>


        {/* Testimonials */}
        <div className="mt-12 flex flex-col items-center justify-center ">
          <div className='max-w-6xl'>
            <div className='  flex items-center justify-center flex-col'>
              <span className="text-yellow-700 font-semibold">Testimonial</span>
              <div className="mt-4 text-center md:flex md:space-x-2 text-3xl font-semibold text-green-800">
                <p>Our Clients</p>
                <p>Reviews</p>
              </div>
            </div>
            <div className='flex space-x-3'>
              <div className="mt-8 text-center text-md space-x-4 space-y-2 italic">
                <p>"It was an interesting
                  challenge to design and develop an remotely
                  operable</p>
                <p></p>
                <p>monitoring system
                  from scratch." <span className="text-yellow-800"> - Evans Honu, Hardware Engineer</span></p>
              </div>
              <div className="mt-8 text-center text-md space-x-4 space-y-2 italic">
                <p>"It was an interesting
                  challenge to design</p>
                <p>and develop an remotely
                  operable</p>
                <p>monitoring system
                  from scratch." <span className="text-yellow-800"> - Evans Honu, Hardware Engineer</span></p>
              </div>

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

        </div>

        <div className="flex-col md:flex-row mt-24 justify-between lg:justify-center flex items-center lg:pl-60  bg-green-900">
          <div className=" bg-green-900 py-12 border-b-2 border-white w-full md:border-none md:w-1/3">
            <div className="mx-10 md:mx-2 w-20 h-20  bg-green-700 flex items-center flex-col justify-center">
              <IoCall color="white" size={24} />
            </div>
            <div className="flex flex-col mt-8 mx-12 md:mx-2">
              <span className="font-semibold text-green-400">Call Us</span>
              <span className="mt-4 font-semibold md:text-xs text-white">+233(0) 20 656 2493</span>
            </div>
          </div>
          <div className=" bg-green-900 py-12 border-b-2 border-white w-full md:border-none md:w-1/3">
            <div className="mx-10 md:mx-0 w-20 h-20 bg-green-700 flex items-center flex-col justify-center">
              <IoMail color="white" size={24} />
            </div>
            <div className="flex flex-col mt-8 mx-12 md:mx-0">
              <span className="font-semibold text-green-400">Mail</span>
              <span className="mt-4 font-semibold md:text-xs text-white">info@vandzilahtechnologies.com</span>
            </div>
          </div>
          <div className=" bg-green-900 py-12 border-b-2 border-white w-full md:border-none md:w-1/3">
            <div className="mx-10 md:mx-0 w-20 h-20 bg-green-700 flex items-center flex-col justify-center">
              <FaLocationCrosshairs color="white" size={24} />
            </div>
            <div className="flex flex-col mt-8 mx-12 md:mx-0">
              <span className="font-semibold text-green-400">Address</span>
              <span className="mt-4 font-semibold md:text-xs text-white">www.vandzilahtechnologies.com</span>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default LandingPage;

