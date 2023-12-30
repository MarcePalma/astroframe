import React from 'react';
import './SolarSystem.css';  // Archivo de estilos CSS

const SolarSystem = () => {
  return (
    <section className="solar-system">
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
