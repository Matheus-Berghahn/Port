import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function About() {
  const [viewportWidth, setViewportWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setViewportWidth(window.innerWidth);
    };

    setViewportWidth(window.innerWidth);

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const widthInVW = Math.floor((viewportWidth * 25) / 100);

  return (
    <AnimatedPage>
      <Head>
        <title>About</title>
        <meta
          name="description"
          content="Desenvolvedor front-end e motion designer, focado em criar experiências digitais envolventes e dinâmicas.
          Com mais de 2 anos de experiência em animação por código e linha do tempo, tenho desenvolvido uma sólida base técnica e criativa.
          Minhas habilidades abrangem uma ampla gama de tecnologias e ferramentas, incluindo HTML, CSS, JS, TypeScript, Next< Angular e node"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="About" />
      </div>
      <p className="pb-10 text-justify">
        Front-end developer and motion designer, focused on crafting engaging and dynamic digital experiences. 
        With over 3 years of experience in both code-based and timeline animation, I have built a strong technical and creative foundation. 
        My skills span a wide range of technologies and tools, including 
        <span style={{ color: '#e6622c', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}> HTML </span>
         <span style={{ color: '#1599d1', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}>CSS </span>
          <span style={{ color: '#db9b26', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}>JS </span>
           <span style={{ color: '#5ccfee', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}>TypeScript </span>
            <span style={{ color: '#ffffff', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}>Next </span>
             <span style={{ color: '#dd0031', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}>Angular </span>
              and <span style={{ color: '#7ab33e', letterSpacing: "2px", fontSize:"16px", fontFamily:"arial" }}>node.js</span>,
              along with other complementary functionalities that enrich my skill set.<br></br><br></br>

              Over the past year, I have been deeply dedicated to crafting websites and pages, continuously seeking to enhance my skills and stay updated with industry trends and best practices. I am deeply committed to quality and innovation, constantly exploring ways to integrate smooth and interactive animations into my projects, aiming to provide users with visually appealing and intuitive experiences.
      </p>

      <div className="experience__wrapper border-solid border-2 border-white xl:w-3/6 p-3">
        <h2 className="text-black bg-white p-2 text-center text-2xl">Experience</h2>
        <p className="py-3 "><b>Digital Business</b> - Web Design/Front-end Developer. 2020 - Present.</p>
        <p className=""><b>Roles</b> - Banner animations in HTML-CSS and Timeline animations, Landing Pages in HTML-CSS-JS and WordPress (Elementor), Email Marketing, and Design.</p>
      </div>

      <div className="mt-10 experience__wrapper border-solid border-2 border-white xl:w-3/6 p-3">
        <h2 className="text-black bg-white p-2 text-center text-2xl">Academic Qualifications</h2>
        <p className="py-3 ">Completed high school and Technical Course in Computing - 4 years.<br></br><b className='bold'>Escola Técnica Estadual Portão(ETEP)</b></p>
        <p className="">Analysis and Systems Development - 2022/02 - present.<br></br><b className='bold'>Feevale University</b></p>
      </div>

        <Image
           src="/img_port.jpg"
          alt="photo"
          width={widthInVW}
          height={400}
          className="photo"
        />

    </AnimatedPage>
  );
}
