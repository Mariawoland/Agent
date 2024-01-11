import React, { Key, ReactNode } from 'react';
import '@/app/globals.css';
import Link from 'next/link';
import Subscribe from '@/components/subscribe';
import CollectionMain from '@/components/collectionMain';
import { getAllVacancies } from '@/lib/actions/Vacancies.actions';
import { ImQuotesLeft } from "react-icons/im";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaReact, FaVuejs, FaAngular, FaInstagram, FaFacebookF, FaFigma, FaHtml5, FaCss3Alt, FaBootstrap } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";


const Home = async () => {

  const vacancies = await getAllVacancies({
    page: 1,
    limit: 10
  });

  return (
    <>
      <div className='flex md:flex-row flex-col'>

        <div className='md:w-1/2 w-full md:hidden flex'>
          <img src="img1.jpg" className='w-full aspect-square object-cover' />
        </div>

        <div className='md:w-1/2 w-full flex justify-center items-start gap-4 flex-col p-6'>

          <Link href='/jobs' className='text-one-1'>
            <span className='-tracking-widest px-2'>--------</span>
            <span>Explore new Jobs</span>
          </Link>

          <h1 className='text-six-1 xl:text-[54px] lg:text-[46px] text-[35px] font-semibold leading-relaxed'>Take Your Job Haunting <br className='sm:flex hidden' /> <span className='heroText  xl:text-[52px] lg:text-[44px] text-[33px]'>To The Next Level</span>!</h1>

          <p className='text-four-1 pt-2'>Finding job with us is fast and easy, so subscribe and get the job that fits you best! And don't forget subscription is free and always will be!</p>

          <Subscribe />

        </div>


        <div className='md:w-1/2 w-full md:flex hidden'>
          <img src="img1.jpg" className='w-full lg:max-h-[80vh] max-h-[70vh] object-cover' />
        </div>
      </div>

      <Link href='/aboutus' className='block text-one-1 sm:text-3xl text-2xl sm:px-10 px-5 mt-[6%] pb-6'>
        <span className='-tracking-[0.1em] px-2'>------</span>
        <span>About Us</span>
      </Link>

      <div className='sm:ps-10 sm:pb-10 ps-5 pb-5 sm:pe-5 pe-2 '>
        <p className='text-four-1 font-semibold sm:pe-10 sm:pt-10 pe-5 pt-5 border-t-2 border-e-2 border-one-1 rounded-tr-2xl'>
          Welcome to Agent, where innovation meets opportunity in the world of front-end development! As a cutting-edge portfolio project, we pride ourselves on revolutionizing the way you discover job listings for front-end developer positions. Our platform is powered by the latest advancements in technology, leveraging MongoDB databases generated by the intelligent ChatGPT. At Agent, we have embarked on a journey to streamline the job-search experience for front-end developers. Our platform is more than just a collection of job listings – it's a testament to the seamless integration of sophisticated technology and user-centric design. Embark on a new chapter in your career with Agent. Explore. Discover. Connect. Whether you are a seasoned professional or just starting your career in front-end development, Agent is here to empower your journey. Let's redefine the way you explore job opportunities – welcome to a platform designed exclusively for front-end developers, by front-end developers. Your future in front-end development awaits!
        </p>
      </div>




      <p className='block text-one-1 sm:text-3xl text-2xl sm:px-10 px-5 mt-[6%]'>
        <span className='-tracking-[0.1em] px-2'>------</span>
        <span>Necessary Skills</span>
      </p>

      <div className='flex gap-12 sm:text-[90px] text-[65px] py-8 flex-wrap justify-center items-center text-four-4 p-[3%] '>
        <FaHtml5 className="hover:text-one-1 transition-all duration-500" />
        <FaCss3Alt className="hover:text-one-1 transition-all duration-500" />
        <FaBootstrap className="hover:text-one-1 transition-all duration-500" />
        <SiTailwindcss className="hover:text-one-1 transition-all duration-500" />
        <FaReact className="hover:text-one-1 transition-all duration-500" />
        <FaVuejs className="hover:text-one-1 transition-all duration-500" />
        <FaAngular className="hover:text-one-1 transition-all duration-500" />
        <SiNextdotjs className="hover:text-one-1 transition-all duration-500" />
        <FaFigma className="hover:text-one-1 transition-all duration-500" />
      </div>


      <Link href='/jobs' className='block text-one-1 sm:text-3xl text-2xl sm:px-10 px-5 mt-[6%]'>
        <span className='-tracking-[0.1em] px-2'>------</span>
        <span>Latest Offers</span>
      </Link>

      <div>
        <CollectionMain
          data={vacancies?.data}
          limit={100}
        />
      </div>

      <div className='block text-one-1 sm:text-3xl text-2xl sm:px-10 px-5 mt-[6%]'>
        <span className='-tracking-[0.1em] px-2'>------</span>
        <span>Testimonials</span>
      </div>

      <div className='flex md:flex-row flex-col'>

        <div className='md:w-1/2 w-full p-6'>
          <div className='border border-four-2 overflow-hidden rounded-2xl text-four-1 p-7 relative'>
            <p className='font-semibold text-center sm:text-3xl text-xl py-5'>Sarah D. - MERN Developer</p>
            <p className='text-justify'>"Discovering job opportunities through Agent was a game-changer for my career. As a front-end developer, I often found myself overwhelmed by generic job boards. This platform, powered by ChatGPT's intelligent database, changed the game. The curated collection of job cards made the search process efficient, and I quickly connected with my dream job. The user-friendly interface and exclusive focus on front-end roles set Agent apart. I am now thriving in a role that perfectly aligns with my skills and aspirations. Thank you for making my job search a breeze!"</p>
            <p className='opacity-75 text-4xl absolute right-5 top-3'>
              <ImQuotesLeft />
            </p>
          </div>
        </div>

        <div className='md:w-1/2 w-full p-6'>
          <div className='border border-four-2 overflow-hidden rounded-2xl text-four-1 p-7 relative'>
            <p className='font-semibold text-center sm:text-3xl text-xl  py-5'>Alex M. - UI/UX Developer</p>
            <p className='text-justify'>"I can't express how grateful I am to have stumbled upon Agent. The platform's commitment to showcasing only front-end developer vacancies made all the difference. The cards provided insights into each job, allowing me to make informed decisions. The integration of ChatGPT's technology in generating the database ensured that the listings were not only accurate but also up-to-date. I secured a position that matched my skill set and career goals. Agent has undoubtedly transformed the job search experience for developers. recommended!"</p>
            <p className='opacity-75 text-4xl absolute right-5 top-3'>
              <ImQuotesLeft />
            </p>
          </div>
        </div>

      </div>

      <div className='px-7'>
        <hr className='border-0 h-[2px] mt-20 mb-10 bg-one-1' />
      </div>



      <div className='flex sm:flex-row flex-col gap-7 items-start justify-between p-7'>
        <div>
          <img src='/logo.png' className='w-36' />
          <p className='text-four-5 font-semibold text-sm leading-relaxed py-7'>We provide information about  Vacanies<br /> such as Frontend, Dev Ops and Mern to<br /> help people find their dream jobs</p>

          <div className='flex gap-5 text-four-4 items-center text-3xl pb-5'>
            <a href='https://www.facebook.com/mariam.ekizashvili16/' target='_blank' className='text-2xl'><FaFacebookF /></a>
            <a href='https://www.linkedin.com/in/mariam-ekizashvili/' target='_blank' className=''><FaLinkedinIn /></a>
            <a href='https://www.instagram.com/maria_woland/' target='_blank' className=''><FaInstagram /></a>
          </div>

        </div>

        <div className='text-four-1 flex flex-col leading-loose text-base'>
          <Link href='/jobs' className='text-four-3 font-semibold text-lg'>Vacancies</Link>
          <Link href='/jobs'>Front-End</Link>
          <Link href='/jobs'>UI/UX</Link>
          <Link href='/jobs'>Dev-Ops</Link>
        </div>



        <div className='text-four-1 flex flex-col leading-loose text-base'>
          <Link href='/aboutus' className='text-four-3 font-semibold text-lg'>About Us</Link>
          <Link href='/aboutus'>Mission</Link>
          <Link href='/aboutus'>Database</Link>
          <Link href='/aboutus'>Technology</Link>
        </div>

        <div className='text-four-1 flex flex-col leading-loose text-base'>
          <Link href='/jobs' className='text-four-3 font-semibold text-lg'>Offers</Link>
          <Link href='/jobs'>Goals</Link>
          <Link href='/jobs'>Info</Link>
        </div>

        <div className='text-four-1 flex flex-col leading-loose text-base'>
          <Link href='/contacts' className='text-four-3 font-semibold text-lg'>Contacts</Link>
          <Link href='/contacts'>Subscription</Link>
          <Link href='/contacts'>Help</Link>
          <Link href='/contacts'>Links</Link>
        </div>

        <div></div>

      </div>

    </>
  );
};

export default Home;