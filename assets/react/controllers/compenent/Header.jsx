import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import image from '../../controllers/images/logokine.svg';
import Menu150 from '@mui/icons-material/Menu';
import Cadr from './Ui/Cadr';
import MenuOpenIcon from '@mui/icons-material/Close';
import { BrowserRouter as Router } from 'react-router-dom';

export default function Header() {
  const path = useLocation();
  const [page, setPage] = useState('/home');
  const [responsive, setResponsive] = useState(false);

  const location = useLocation();

  const handleButtonClick = (pageName) => {
    setResponsive(false);
    console.log(responsive);
    window.location.href = `/${pageName}`;
  };
  useEffect(() => {
    setPage(path.pathname);
    if (responsive === false) {
      setResponsive(true);
    }
  }, [path]);

  function responsiveHandler() {
    setResponsive(false);
    console.log(responsive);
  }

  function responsiveHandler2() {
    setResponsive(true);
    console.log(responsive);
  }

  return (
    <>
      <Cadr>
        {responsive && (
          <div className='bg-[#FFFFFF] flex items-center justify-between w-full px-6 py-2 rounded-[40px]'>
            <div className='flex items-center gap-2'>
              <img className='w-[130px] h-9 relative' src={image} alt='' />
            </div>
            <div className='flex gap-4 items-center max-[800px]:hidden'>
              <a
                href='/home'
                className={`py-2 px-4 ${
                  page === '/home' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                Home
              </a>
              <a
                href='/about'
                className={`py-2 px-4 ${
                  page === '/about' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                About
              </a>
              <a
                href='/services'
                className={`py-2 px-4 ${
                  page === '/services' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                Services
              </a>
              <a
                href='/news'
                className={`py-2 px-4 ${
                  page === '/news' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                News
              </a>
              <a
                href='/contact'
                className={`py-2 px-4 ${
                  page === '/contact' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                Contact
              </a>
            </div>
            <div className='bg-[#FFFFFF] border-[1px] border-[#434343] w-10 h-10 rounded-[50%] max-[800px]:hidden'></div>
            <div className='min-[800px]:hidden'>
              <Menu150 onClick={responsiveHandler}></Menu150>
            </div>
          </div>
        )}
        {!responsive && (
          <div className='w-full h-[500px] bg-white rounded-3xl px-3 py-4'>
            <div className='bg-[#FFFFFF] flex items-center justify-between w-full px-6 py-2 rounded-[40px]'>
              <div className='flex items-center gap-2'>
                <div className='bg-[#252733] w-6 h-6 rounded-[50%]'></div>
                <h1>Kinesis</h1>
              </div>
              <div>
                <MenuOpenIcon onClick={responsiveHandler2}></MenuOpenIcon>
              </div>
            </div>
            <div className='flexgap-4 items-center flex-col mt-6 w-full '>
              <a
                href='/home'
                className={`py-2 px-4 ${
                  page === '/home' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                Home
              </a>
              <a
                href='/about'
                className={`py-2 px-4 ${
                  page === '/about' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                About
              </a>
              <a
                href='/services'
                className={`py-2 px-4 ${
                  page === '/services' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                Services
              </a>
              <a
                href='/news'
                className={`py-2 px-4 ${
                  page === '/news' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                News
              </a>
              <a
                href='/contact'
                className={`py-2 px-4 ${
                  page === '/contact' ? 'bg-[#1B53F5] px-4 rounded-xl py-2 text-white' : ''
                }`}
                style={{ textDecoration: 'none', color: '#000000' }}
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </Cadr>
    </>
  );
}