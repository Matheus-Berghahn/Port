import Head from "next/head";
import AnimatedText from "../components/AnimatedText";
import AnimatedPage from "../components/PageWrapper";
import { WORK } from "../utils/constants";
import Image from 'next/image';
import { useEffect, useState } from "react";

export default function Work() {
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

  const widthInVW = Math.floor((viewportWidth * 32) / 100);
  return (
    <AnimatedPage>
      <Head>
        <title>work</title>
        <meta
          name="description"
          content="Here are some projects."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon-16x16" />
      </Head>

      <div className="title__wrapper">
        <AnimatedText element="h1" text="Work" />
      </div>
      <div className="flex flex-col gap-[100px] lg:pl-48">
        {WORK.map((work, index) => (
          <div
            key={work.company}
            className="relative flex flex-col max-w-[700px]"
          >
            <span className="absolute -left-[45px] -top-[30px] text-5xl text-primary-100 opacity-10">
              {index.toString().padStart(2, "0")}
            </span>
            <h2 className="text-5xl font-bold text-primary-100 mb-3">
              {work.company}
            </h2>
            <p className="text-xl font-light text-primary-200 mb-3">
              <span className="font-semibold text-primary-400">
                {work.position} —{" "}
              </span>
              {work.description}
            </p>
            <a href={work.link} target="_blank" rel="noreferrer">
              visit website
            </a>
          </div>
        ))}
      </div>
      <Image
          src="/img_port_2.jpg"
          alt="photo"
          width={widthInVW}
          height={400}
          className="photo photo-work pr-32"
        />
    </AnimatedPage>
  );
}
