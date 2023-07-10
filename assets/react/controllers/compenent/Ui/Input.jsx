import React from 'react'

export default function Input(props) {
  return (
<input  className={`bg-transparent text-[#484951] border-[1px] border-[#C6C8CE] rounded-3xl px-4 py-3 outline-none ${props.className}`} value={props.value} type={props.type} ref={props.ref} name={props.name}  placeholder={props.placeholder} onChange={props.onChange} onBlur={props.onBlur} />
  )
}
