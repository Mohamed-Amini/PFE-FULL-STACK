import React from 'react'

export default function Submit(props) {
  return (
    <input
    type='submit'
    className={`text-center w-full cursor-pointer py-2 rounded-3xl bg-[#1B53F5] font-semibold text-[18px] text-[#FFFFFF] ${props.className}`}
    value={props.value} onChange={props.onChange} onBlur={props.onBlur}  ref={props.ref} name={props.name} 
  />
  )
}
