import Link from "next/link";
import React from "react";

export default function navigation() {
  return (
    <div className='absolute z-10 bg-black h-16 w-full items-center justify-between bg-transparent  flex flex-row'>
      <div className='p-6'>
        <Link
          type='button'
          className='flex items-center gap-x-1 font-semibold leading-6 text-white text-xl font-sans'
          aria-expanded='false'
          href={"https://github.com/sromelrey"}
        >
          sromelrey
        </Link>
      </div>

      <nav
        className='  max-w-7xl justify-items-end p-6 lg:px-8'
        aria-label='Global'
      >
        <div className='hidden lg:flex lg:gap-x-12 w-fit'>
          <div className='relative'>
            <button
              type='button'
              className='flex items-center gap-x-1 font-bold leading-6 text-white text-2xl font-sans'
              aria-expanded='false'
            >
              About
            </button>
          </div>

          <a
            href='#'
            className='flex items-center gap-x-1 font-bold leading-6 text-white text-2xl font-sans'
          >
            Projects
          </a>
          <a
            href='#'
            className='flex items-center gap-x-1 font-bold leading-6 text-white text-2xl font-sans'
          >
            Certificates
          </a>
          <a
            href='#'
            className='flex items-center gap-x-1 font-bold leading-6 text-white text-2xl font-sans'
          >
            Let&apos;s Talk
          </a>
        </div>
      </nav>
    </div>
  );
}
