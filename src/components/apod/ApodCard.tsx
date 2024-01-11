import React from 'react';
import '../../app/globals.css';
import { ApodCardProps } from '@/types/types';
import Image from 'next/image';
import "./ApodCard.css"
import Link from 'next/link';





const ApodCard: React.FC<ApodCardProps> = ({ apodData }) => {
    return (
        <section className="lg:py-16 flex flex-col items-center justify-center text-center max-w-2xl mx-auto p-8 bg=[#232741] ">
            <Link href={"/"}>
            <Image className='absolute right-0 top-50' src={"/assets/images/background/spacecraft.webp"} width={100} height={100} alt='' />
            <div className="message-container">
                <p className="astro-message">
                   Click me to go back!
                </p>
            </div>
            </Link>
            <Image className='absolute left-0 bottom-200' src={"/assets/images/background/astroboy.webp"} width={700} height={700} alt='two astronauts looking at the picture of the day' />
            <h2 className="text-white text-2xl font-bold mb-4">
                {apodData.title}
            </h2>


            {apodData.media_type === 'image' ? (
                <Image width={700} height={700} src={apodData.url} alt={apodData.title} className="max-w-full mb-4" />
            ) : apodData.media_type === 'video' ? (
                <iframe
                    width={700}
                    height={700}
                    src={apodData.url}
                    title={apodData.title}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    className="max-w-full mb-4"
                ></iframe>
            ) : null}
            <p className="text-white">{apodData.explanation}</p>
        </section>
    );
};

export default ApodCard;
