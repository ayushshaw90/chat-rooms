import React from 'react'

export default function MemberMsg({name,room,joined}) {
  return (
    <div className='py-1'>
        <div className='bg-slate-200 w-fit mx-auto px-2 pt-1 pb-2 rounded-xl text-black'>
            <p className='text-md'>{name} {joined?"joined":"left"} room {room} </p>
        </div>
    </div>
  )
}
