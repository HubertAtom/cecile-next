/*  ./components/Navbar.jsx     */
import Link from 'next/link';
import { useState } from 'react';

export const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
      <nav className='flex items-center flex-wrap p-3 max-w-screen-lg m-auto'>
        <Link href='/'>
          <a className='inline-flex items-center p-2 mr-4 '>
            <span className='text-4xl text-custom-blu font-great-wishes text-custom-blue font-extrabold tracking-wide'>
              Cécile Orsot Dessi
            </span>
          </a>
        </Link>
        <button
          className=' inline-flex p-3 hover:custom-blue rounded lg:hidden text-custom-blue ml-auto hover:text-custom-blue outline-none'
          onClick={handleClick}
        >
          <svg
            className='w-9 h-9'
            fill='#426FAF'
            stroke='#426FAF'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? '' : 'hidden'
          }   w-full lg:inline-flex lg:flex-grow lg:w-auto`}
        >
          <div className='pt-12 lg:pt-0 lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start flex flex-col lg:h-auto gap-x-4'>
            <Link href='/'>
              <a className='text-custom-blue font-lato text-3xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-blue font-bold items-center justify-center border-b-4 rounded-none border-transparent lg:hover:border-custom-blue'>
                Pendant la grossesse
              </a>
            </Link>
            <Link href='/'>
              <a className='text-custom-blue font-lato text-3xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-blue font-bold items-center justify-center border-b-4 rounded-none border-transparent lg:hover:border-custom-blue'>
                Après la naissance
              </a>
            </Link>
            <Link href='/'>
              <a className='text-custom-blue font-lato text-3xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-blue font-bold items-center justify-center border-b-4 rounded-none border-transparent lg:hover:border-custom-blue'>
                Au long de la vie
              </a>
            </Link>
            <Link href='/'>
              <a className='text-custom-blue font-lato text-3xl lg:inline-flex lg:w-auto w-full px-3 py-2 rounded text-custom-blue font-bold items-center justify-center border-b-4 rounded-none border-transparent lg:hover:border-custom-blue'>
                Honoraires
              </a>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};
