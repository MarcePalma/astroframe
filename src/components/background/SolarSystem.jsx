import React from 'react';
import './SolarSystem.css';
import StarsParticles from '../particles/StarParticles';
import Image from 'next/image';

const SolarSystem = () => {
  return (
    <section className="solar-system relative">
      <div className="astroboy-container relative">
        <Image className='absolute right-0' src={"/assets/images/background/astronaut.png"} width={200} height={200} alt='Astroboy'/>
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
    </section>
  );
};

export default SolarSystem;