"use client"
import React from 'react';
import './SolarSystem.css';
import StarsParticles from '../particles/StarParticles';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import Loading from '@/app/loading';

const SolarSystem = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulamos un tiempo de carga de 3 segundos
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpia el timeout al desmontar el componente
    return () => clearTimeout(loadingTimeout);
  }, []);

  return (
    <>
      {loading && <Loading />} {/* Muestra el Loading durante 3 segundos */}
      <section className={`solar-system relative ${loading ? 'loading' : ''}`}>
        <div className="astroboy-container relative">
          <Image className='absolute right-0' src={"/assets/images/background/astronaut.png"} width={200} height={200} alt='Astroboy' />
          <div className="messageContainer">
            <p className="message">
              Hello, I'm Astro!
              <br />Welcome to AstroFrame.
              <br />
              Visit the Calendar or <br /> scroll down to see the <br />
              Astronomic Picture Of The Day.
            </p>
          </div>
        </div>
        <StarsParticles />
        <span className="sun"></span>
        <span className="planet mercury"></span>
        <span className="planet venus"></span>
        <span className="planet earth"></span>
        <span className="planet mars"></span>
        <span className="planet jupiter"></span>
        <span className='planet saturn'></span>
        <span className='planet uranus'></span>
        <span className='planet neptune'></span>
        <Link href="#Apod">

          <svg
            className='scroll-arrow'
            width="32"
            height="32"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="#ffffff"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              stroke="none"
              d="M0 0h24v24H0z"
              fill="none"
            />
            <path
              d="M15 12h3.586a1 1 0 0 1 .707 1.707l-6.586 6.586a1 1 0 0 1 -1.414 0l-6.586 -6.586a1 1 0 0 1 .707 -1.707h3.586v-3h6v3z"
            />
            <path
              d="M15 3h-6"
            />
            <path
              d="M15 6h-6"
            />
          </svg>
        </Link>
      </section>
    </>

  );
};

export default SolarSystem;