import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import ApodCard from '@/components/apod/ApodCard';
import { fetchApodData } from '../../../public/assets/utils/fetchApod';
import { NasaApiResponse } from '@/types/nasaApiTypes';

const APODPage: React.FC = () => {
  const router = useRouter();
  const [apodData, setApodData] = useState<NasaApiResponse | null>(null);

  useEffect(() => {
    // Obtiene la fecha de la query
    const dateParam = router.query.date as string | undefined;

    if (dateParam) {
      fetchApodData(dateParam)
        .then((data: NasaApiResponse) => {
          setApodData(data);
        })
        .catch((error: Error) => {
          console.error('Error al obtener datos de APOD:', error);
        });
    }
  }, [router.query.date]);

  return (
    <div>
      {apodData ? (
        <ApodCard apodData={apodData} />
      ) : (
        <p>Cargando...</p>
      )}
    </div>
  );
};

export default APODPage;