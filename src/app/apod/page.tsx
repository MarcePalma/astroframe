"use client"
import { useAppState } from '@/context/AppStateContext';
import ApodCard from '@/components/apod/ApodCard';
import StarsParticles from '@/components/particles/StarParticles';

const APODPage: React.FC = () => {
  const { apodData } = useAppState();

  return (
    <div>
      <StarsParticles/>
      {apodData ? (
        <ApodCard apodData={apodData} />
      ) : (
        <p>Cargando...</p>  
      )}
    </div>
  );
};

export default APODPage;