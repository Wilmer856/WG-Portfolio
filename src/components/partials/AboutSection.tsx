import Button from '@/components/form/Button';
import SectionTitle from '@/components/shared/SectionTitle';
import { FiCoffee } from 'react-icons/fi';
import { HiOutlineChartBar, HiOutlineFire, HiOutlineUsers } from 'react-icons/hi';
import { DiJsBadge, DiJava, DiPython, DiReact, DiMysql, DiPostgresql, DiMongodb, DiGit, DiHtml5, DiCss3, DiUnitySmall } from "react-icons/di";
import Slider, { Settings } from 'react-slick';
import Image from 'next/image';

const settings: Settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  arrows: true,
};

const AboutSection = () => {
  return (
    <>
      <SectionTitle>About Me & Skills</SectionTitle>

      <div className="grid grid-cols-1 gap-6 py-6 md:grid-cols-2 lg:gap-8">
        {/* Bio */}
        <div className="">
          <p className="text-justify">
            I’m Wilmer Guzman, a software engineer and game developer with a B.S. in Computer Science from WGU. I love programming because it challenges me to think critically, solve real-world problems, and bring ideas to life through technology.
            I specialize in web and game development, with a strong interest in AI and machine learning. My focus is on building scalable applications and intuitive user experiences, always exploring new ways to improve and innovate.
          </p>
        </div>

        {/* Skills */}
        <Slider {...settings}>
          <div className="flex flex-col items-center">
            <DiJsBadge size={100}/>
            <span>JavaScript</span>
          </div>
          <div className="flex flex-col items-center">
            <DiJava size={100}/>
            <span>Java</span>
          </div>
          <div className="flex flex-col items-center">
            <DiPython size={100}/>
            <span>Python</span>
          </div>
          <div className="flex flex-col items-center">
            <DiReact size={100}/>
            <span>React</span>
          </div>
          <div className="flex flex-col items-center">
            <DiHtml5 size={100}/>
            <span>HTML</span>
          </div>
          <div className="flex flex-col items-center">
            <DiCss3 size={100}/>
            <span>CSS</span>
          </div>
          <div className="flex flex-col items-center">
            <DiPostgresql size={100}/>
            <span>PostgreSQL</span>
          </div>
          <div className="flex flex-col items-center">
            <DiMysql size={100}/>
            <span>MySQL</span>
          </div>
          <div className="flex flex-col items-center">
            <DiMongodb size={100}/>
            <span>MongoDB</span>
          </div>
          <div className="flex flex-col items-center">
            <DiGit size={100}/>
            <span>Git</span>
          </div>
          <div className="flex flex-col items-center">
            <DiUnitySmall size={100}/>
            <span>Unity</span>
          </div>
        </Slider>
      </div>

      {/* Overview */}
      {/* <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineFire size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">20+</h2>
            <p className="mt-1">Projects Completed</p>
          </div>
        </div>
        <div className="flex">
          <div className="mr-5 text-gray-300">
            <FiCoffee size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">30+</h2>
            <p className="mt-1">Cup of Coffee</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineUsers size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">15+</h2>
            <p className="mt-1">Satisfied clients</p>
          </div>
        </div>

        <div className="flex">
          <div className="mr-5 text-gray-300">
            <HiOutlineChartBar size={50} />
          </div>
          <div>
            <h2 className="text-3xl font-bold">5+</h2>
            <p className="mt-1">Years of experience</p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AboutSection;
