'use client';

import React from 'react'
import Image from 'next/image'

const ExploreBtn = () => {
  return (
    <div id="explore-btn">
      <a href="#events">
        Explore Events
        <Image src="/icons/arrow-down.svg" alt="arrow-down" width={24} height={24}/>
      </a>
    </div>
  )
}

export default ExploreBtn