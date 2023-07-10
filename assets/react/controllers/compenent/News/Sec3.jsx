import React from 'react'
import Cadr from '../Ui/Cadr'
import image1 from '../../images/news3.png'
import image2 from '../../images/line-41.svg'
import image3 from '../../images/news4.png'
import image4 from '../../images/news5.png'



export default function Sec3() {
  return (
    <Cadr>
      <div className='w-full  gap-2 h-screen flex'>
      <div className='rounded-3xl  w-[60%] h-full relative newsbg'>
        <div className='absolute bg-black opacity-30 bottom-0 left-0 w-full h-full rounded-3xl'>
        </div>
        <div className='absolute w-4/4 bottom-10 pl-7'>
          <div className='flex items-center'>
              <img
              className="w-[110px] h-[10px]"
              alt=""
              src={image2}
            />
              <h3 className="text-3xl text-white ">
              Health
          </h3>
          </div>
               <p className='text-white text-4xl my-9 '>Physiotherapy has evolved in the form of various sub-specialties, which enable PT to deal with various conditions in a more effective and appropriate way.</p>
          <div className='w-full flex gap-3'>
                  <button className='bg-transparent border-[2px] border-white text-white px-7 py-4 rounded-full'>Read article</button>
                <h2 className="font-medium text-white flex items-center gap-7 bg-[#FFFFFF66] w-1/4 py-3 rounded-full px-2">
                <div className=" rounded-[50%] bg-white h-9" />
                    By Judith watson
                </h2>
          </div>
        </div>
      </div>
      <div className='w-[40%] flex flex-col gap-4 h-full'>
      <div className='w-full h-[49%] rounded-3xl relative'>
      <div className='absolute bg-black opacity-30 bottom-0 left-0 w-full h-full rounded-3xl'>
      </div>
      <img
        className="w-full h-full object-cover rounded-3xl"
        alt=""
        src={image3}
      />
          <div className='absolute w-2/4 bottom-10 mx-7'>
          <div className='flex items-center'>
              <img
              className="w-[110px] h-[10px]"
              alt=""
              src={image2}
            />
              <h3 className="text-3xl text-white mb-2">
              Health
          </h3>
          </div>
               <p className='text-white text-xl my-4'>Joint pain on the rise in young adults, say doctors due to many causes...
</p>
         
        </div>
      </div>

      <div className='w-full h-[49%] rounded-3xl relative'>
      <div className='absolute bg-black opacity-30 bottom-0 left-0 w-full h-full rounded-3xl'>
      </div>
      <img
        className="w-full h-full object-cover rounded-3xl"
        alt=""
        src={image4}
      />
          <div className='absolute w-2/4 bottom-10 mx-7'>
          <div className='flex items-center'>
              <img
              className="w-[110px] h-[10px]"
              alt=""
              src={image2}
            />
              <h3 className="text-3xl text-white mb-2">
              Health
          </h3>
          </div>
               <p className='text-white text-xl my-4'>Modern physiotherapy must reach more people: Deputy CM Brajesh Pathak </p>
         
        </div>

      </div>
      </div>
      </div>

      {/* pic3 */}
      {/* <div className="absolute top-[1740px] left-[850px] rounded-[18.75px] bg-gray-500 w-[425px] h-[350px]" />
        <img
        className="absolute top-[1740px] left-[855px] rounded-[18.75px] w-[414.75px] h-[350px] object-cover mix-blend-overlay"
        alt=""
        src={image4}
        />
        <h3 className="absolute top-[1870px] left-[965px] text-[17px] text-white">
        Health
      </h3>
      <img
        className="absolute top-[1880px] left-[890px] w-[70px] h-[10px]"
        alt=""
        src={image2}
      />
    <p className="absolute top-[1915px] left-[890px] text-[20px] font-medium inline-block w-[253.52px] text-white">
        Lorem ipsum dolor sit amet consectetur. Nisl eu neque fames mattis velit
        velit cras ut.
      </p> */}


    </Cadr>
  )
}