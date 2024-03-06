"use client"
import React, { useEffect, useState } from 'react';
import ApodCard from './ApodCard';
import { NasaApiResponse } from '@/types/nasaApiTypes';

const Apod: React.FC = () => {
    const [apodData, setApodData] = useState<NasaApiResponse | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [lastFetchDate, setLastFetchDate] = useState<string | null>(null);

    useEffect(() => {
        const getApodFromServer = async () => {
            try {
                const response = await fetch('https://astroframe.vercel.app/api/nasaApi', {
                    method: 'GET',
                });

                if (!response.ok) {
                    throw new Error(`Error al obtener la imagen del día. Código de estado: ${response.status}`);
                }

                const data: NasaApiResponse = await response.json();
                setApodData(data);
                setLastFetchDate(new Date().toISOString().split('T')[0]);
            } catch (error) {
                console.error('Error al obtener la imagen del día desde el servidor:', error);
                setError('Error al obtener la imagen del día. Por favor, verifica la consola para más detalles.');
            }
        };

        // Verificar si es la primera vez que se monta el componente o si han pasado más de un día desde la última actualización
        const currentDate = new Date().toISOString().split('T')[0];
        if (!lastFetchDate || lastFetchDate !== currentDate) {
            getApodFromServer();
        }
    }, [lastFetchDate]);

    return (
        <div id='Apod'>
            {error ? (
                <p>{error}</p>
            ) : (
                apodData && <ApodCard apodData={apodData} />
            )}
        </div>
    );
};

export default Apod;