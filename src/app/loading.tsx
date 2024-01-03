"use client"
import React from 'react'
import Image from 'next/image'

export default function Loading() {
  return (
    <section>
      <span className='4xl text-white'>
        Loading...
      </span>
      <Image className='Spacecraft' src={"/assets/images/background/spacecraft.png"} width={100} height={100} alt='Spacecraft' />
      <style jsx>{`
          Spacecraft{
            animation: bounce 0.5s infinite alternate;
          }
          
          @keyframes bounce {
              from {
                transform: translateY(0);
              }
              to {
                transform: translateY(5px);
              }
            }
      `}</style>
    </section>
  )
}
