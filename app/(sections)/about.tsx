import React from "react";
import { Open_Sans } from "next/font/google";
const open = Open_Sans({ subsets: ["hebrew"] });

export default function About() {
  return (
    <section
      id='about'
      className={` min-w-full h-lvh justify-center flex flex-col gap-5 p-6 max-w-[950px]  ${open.className}`}
    >
      <h1 className={`text-white text-6xl font-bold font-sans`}>
        Hi, I’m Romel Rey Silva
      </h1>
      <h3 className='text-[#00B2EB] font-bold text-5xl'>Frontend Developer</h3>
      <h5 className='text-white text-xl font-bold'>
        Proficient in REACTJS for more than 5 years, refining abilities across
        Front-End, Full-Stack, and Software Engineering domains. Embracing
        adaptability as an ongoing journey.
      </h5>
    </section>
  );
}
