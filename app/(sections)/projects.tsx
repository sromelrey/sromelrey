import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
const open = Open_Sans({ subsets: ["hebrew"] });
import styles from "./project.module.css";
export default function Projects() {
  return (
    <section
      id='projects'
      className={`min-w-full h-lvh justify-center flex flex-col gap-8 p-6 max-w-[950px]  ${open.className}`}
    >
      <h1
        className={`animate-slidein opacity-0 [--slidein-delay:300ms] text-6xl font-bold font-sans text-center`}
      >
        The Projects is divided into two sections:
        <span className='text-[#D05151] '> professional work </span>and
        <span className='text-[#00B2EB] '>personal passion</span> , each
        showcasing distinct facets of my skills and interests.
      </h1>
      <h1
        className={`animate-slidein opacity-0 [--slidein-delay:500ms]  text-7xl font-bold font-sans text-center`}
      >
        <span className='text-[#D05151] '> Choose </span> your
        <span className='text-[#00B2EB] '> pill</span>
      </h1>
      <div className='animate-slidein opacity-0 [--slidein-delay:700ms] h-2/4 flex flex-row gap-64 justify-center'>
        <div className={styles.image}>
          <Image
            src='/red_pill.png'
            width={340}
            height={300}
            className={`hidden md:block `}
            alt='Screenshots of the dashboard project showing desktop and mobile versions'
          />
          <h1 className='text-[#D05151] text-4xl text-center font-bold'>
            Professional Work
          </h1>
        </div>

        <div className={styles.image}>
          <Image
            src='/blue_pill.png'
            width={340}
            height={300}
            className='hidden md:block'
            alt='Screenshots of the dashboard project showing desktop and mobile versions'
          />
          <h1 className='text-[#00B2EB]  text-4xl text-center font-bold'>
            Personal Passion
          </h1>
        </div>
      </div>
    </section>
  );
}
