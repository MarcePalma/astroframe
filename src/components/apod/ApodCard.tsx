import React from 'react';
import { ApodCardProps } from '@/types/types';
import Image from 'next/image';

const ApodCard: React.FC<ApodCardProps> = ({ apodData }) => {
    return (
        <section>
            <h2>{apodData.title}</h2>
            <Image src={apodData.url} alt={apodData.title} />
            <p>{apodData.explanation}</p>
        </section>
    );
};

export default ApodCard;