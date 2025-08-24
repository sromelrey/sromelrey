"use client";

import React from "react";

export default function Loading() {
  return (
    <div className='fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#081C29] to-[#0C2332]'>
      <div className='text-center'>
        <div className='relative'>
          {/* Animated logo */}
          <div className='w-20 h-20 mx-auto mb-8 relative'>
            <div className='absolute inset-0 bg-gradient-to-r from-[#00B2EB] to-[#D05151] rounded-full animate-pulse'></div>
            <div className='absolute inset-2 bg-[#081C29] rounded-full flex items-center justify-center'>
              <span className='text-2xl font-bold text-white'>R</span>
            </div>
          </div>

          {/* Loading text */}
          <h1 className='text-2xl font-bold text-white mb-4 animate-fadein'>
            Romel Rey Silva
          </h1>
          <p
            className='text-gray-400 mb-8 animate-fadein'
            style={{ animationDelay: "500ms" }}
          >
            Frontend Developer
          </p>

          {/* Loading dots */}
          <div className='flex justify-center space-x-2'>
            <div className='w-3 h-3 bg-[#00B2EB] rounded-full animate-bounce'></div>
            <div
              className='w-3 h-3 bg-[#D05151] rounded-full animate-bounce'
              style={{ animationDelay: "0.1s" }}
            ></div>
            <div
              className='w-3 h-3 bg-[#00B2EB] rounded-full animate-bounce'
              style={{ animationDelay: "0.2s" }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
