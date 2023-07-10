import React from 'react'

export default function Cadr(props) {
  return (
    <div className={`px-[20px] mt-4 w-full ${props.className}`}>
      {props.children}
    </div>
  )
}
