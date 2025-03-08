import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok, FaWhatsapp } from 'react-icons/fa';

function MainFooter() {
  return (
    <footer className='bg-[var(--second)] text-[var(--first)] py-10 px-5'>
      <div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center'>
        <div className='text-3xl font-bold'>
          Yaphé
        </div>
        <nav className='flex space-x-6 mt-4 md:mt-0'>
          <Link href='/about' className='hover:underline'>À propos</Link>
          <Link href='/services' className='hover:underline'>Services</Link>
          <Link href='/contact' className='hover:underline'>Contact</Link>
        </nav>
        <div className='flex space-x-4 mt-4 md:mt-0'>
          {/* <a href='https://facebook.com' target='_blank' rel='noopener noreferrer'>
            <FaFacebook size={24} className='hover:text-gray-400' />
          </a> */}
          <a href='https://www.tiktok.com/@yaphe_spa_home' target='_blank' rel='noopener noreferrer'>
            <FaTiktok size={24} className='hover:text-gray-400' />
          </a>
          <a href='https://wa.me/2250712345678?text=Bonjour,%20je%20souhaite%20en%20savoir%20plus%20!
' target='_blank' rel='noopener noreferrer'>
            <FaWhatsapp size={24} className='hover:text-gray-400' />
          </a>
        </div>
      </div>
      <div className='text-center text-sm mt-6'>
        © {new Date().getFullYear()} Yaphé. Tous droits réservés.
      </div>
    </footer>
  );
}

export default MainFooter;