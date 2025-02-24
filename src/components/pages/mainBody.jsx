"use client"

import React, { useState } from 'react';
import { BoxReveal } from '../magicui/box-reveal';
import Link from 'next/link';

function MainBody() {

  return (
    <div className="min-h-screen bg-[#f8f5f0]">

      <div className="h-[500px] w-full bg-[var(--first)] flex justify-center items-center p-10 ">
          <h1 className="text-5xl text-center text-gray-800">
            Chez <span className="font-semibold">Yaphe</span> on retrouve tout !
          </h1>
      </div>
    </div>
  );
}

export default MainBody;