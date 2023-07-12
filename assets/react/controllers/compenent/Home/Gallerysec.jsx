import React from 'react'
import Cadr from '../Ui/Cadr'
import { FaAngleRight } from "react-icons/fa";
import img1 from '../../images/4.jpg'
import img2 from '../../images/33.png'
import img3 from '../../images/48.png'
import { useState } from 'react';
export default function Gallerysec() {

  let allimages = [img1, img2, img3]
  const [image,setimage] = useState(img1)
  const [counter,setcounter] = useState(0)
  const [image2,setimage2] = useState(img2)
  const [image3,setimage3] = useState(img3)
  const [opacity, setOpacity] = useState(0);
  function changesphoto() {
    const nextIndex = (counter + 1) % allimages.length;
    setOpacity(1);
    setimage(allimages[nextIndex]);
    setimage2(allimages[(nextIndex + 1) % allimages.length]);
    setimage3(allimages[(nextIndex + 2) % allimages.length]);
    setcounter(nextIndex);
  }
  return (
    <Cadr>
    <div className='w-full bg-[#FFFFFF] px-10 py-10 rounded-[20px] h-screen relative max-[900px]:h-[850px]'>
      <div className='w-full flex justify-between max-[900px]:flex-col max-[900px]:justify-center max-[900px]:items-center'>
            <h1 className='font-medium text-3xl w-1/4 max-[900px]:w-full max-[900px]:text-center'>GALLERY</h1>
            <p className='font-semibold text-3xl  w-3/4 max-[900px]:w-full max-[900px]:text-center'>Contact us today to experience the same level of professionalism and expertise that has get a complete satisfaction from our clients.</p>
            <div className='w-1/2 h-[450px] mt-7 min-[900px]:hidden'>
            <img src={image} alt="" className= 'object-cover   rounded-3xl' ></img>
            </div>
      </div>
            <div className='w-full pt-28 flex gap-14 max-[900px]:hidden'>
              <div className='w-2/4 flex items-center gap-36'>
                <div className='w-[50%] h-[450px]  rounded-3xl'>
                  <img src={image} alt="" className= 'object-cover rounded-3xl' ></img>
                </div>
                <div className='h-16 w-16 flex justify-center cursor-pointer items-center bg-[#1B53F5] text-white rounded-[50%]' onClick={changesphoto}>
                <FaAngleRight className='cursor-pointer text-4xl'></FaAngleRight>
                </div>
              </div>
              <div className='w-2/4 flex gap-7'>
              <div className='w-[40%] h-[350px]  rounded-3xl'>
              <img src={image2} alt="" className= 'object-cover rounded-3xl' />
              </div>
              <div className='w-[40%] h-[350px]  rounded-3xl'>
              <img src={image3} alt="" className= 'object-cover rounded-3xl ' />
              </div>
              </div>
            </div>
      </div>

    </Cadr>
  )
}