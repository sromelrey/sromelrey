import React from "react";
import { Open_Sans } from "next/font/google";
import Image from "next/image";
import Carousel from "../components/carousel";
const open = Open_Sans({ subsets: ["hebrew"] });

const ImageSources = [
  "/certificates/1.png",
  "/certificates/2.png",
  "/certificates/3.png",
];
export default function Certificates() {
  return (
    <section
      id='projects'
      className={`min-w-full relative h-screen justify-center flex flex-col gap-8 p-6 max-w-[950px]  ${open.className}`}
    >
      <div className='h-1/5 p-6 gap-12'>
        <h1 className={`text-5xl font-bold font-sans text-center`}>
          Give me six hours to chop down a tree and I will spend the first four
          sharpening the axe.
        </h1>

        <h1 className={`text-3xl font-bold font-sans text-center`}>
          ~ Abraham Lincoln
        </h1>
      </div>
      <Carousel />
    </section>
  );
}
