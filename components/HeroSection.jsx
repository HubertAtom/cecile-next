import Link from 'next/link';
import Image from 'next/image';
import hero from '../public/hero.png'
import { CtaRdv } from './CtaRdv';

export const HeroSection = () => {
    return(
        <section className='flex flex-col p-3 max-w-screen-md m-auto'>
            <div className='flex flex-row justify-evenly py-6'>
                <Image src={hero} width={100} height={100} className='object-contain'/>
                <div className='flex flex-col py-4'>
                    <h3 className='font-great-wishes text-violette text-3xl lg:text-6xl'>Cécile Orsot Dessit</h3>
                    <p className='font-roboto font-light uppercase text-violette text-3xl lg:text-6xl my-6'>Sage-Femme</p>
                </div>
            </div>
            <p className='font-lora font-light text-custom-blue text-2xl lg:text-6xl my-6 leading-9 text-justify mb-20'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi accusamus doloremque perspiciatis quia unde, tenetur fugit omnis quo aperiam voluptatibus ab voluptates sed quos! Nisi praesentium est quibusdam? Magni, sed?</p>
            <CtaRdv/>
        </section>
    )
};