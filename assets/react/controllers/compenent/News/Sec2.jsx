import React from 'react'
import Cadr from '../Ui/Cadr'
import image from '../../images/news2.png'
import image1 from '../../images/vector-3.svg'


export default function Sec2() {
  return (
    <Cadr>
      <div className="rounded-[18px] bg-white w-full h-[595px] relative" >
      <img
        className="rounded-[18.75px] w-full h-full object-cover"
        alt=""
        src={image}
      />
        <div className=" rounded-[18.75px] w-full h-full absolute top-0  left-0 max-[800px]:flex max-[800px]:justify-center max-[800px]:items-center"
        style={{ backgroundImage: `linear-gradient(rgba(27, 83, 245, 0.55), rgba(27, 83, 245, 0.55))` }} >
        <p className="text-white font-semibold inline-block px-11 py-20 text-6xl w-3/4 max-[800px]:w-full max-[800px]:text-xl max-[800px]:text-center ">
        Physical exercise can improve movement-related symptoms and quality of life in Parkinson's disease patients.
      </p>
          </div>
      </div>
    </Cadr>
  )
}