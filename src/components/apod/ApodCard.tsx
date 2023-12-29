import React from 'react';
import { ApodCardProps } from '@/types/types';

const ApodCard: React.FC<ApodCardProps> = ({ apodData }) => {
    return (
        <section className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto p-8 ">
            <h2 className="text-2xl font-bold mb-4">{apodData.title}</h2>
            <img src={apodData.url} alt={apodData.title} className="max-w-full mb-4" />
            <p className="text-white">{apodData.explanation}</p>
        </section>
    );
};

export default ApodCard;