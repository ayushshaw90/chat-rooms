import React from 'react'

export default function OtherMsg({by,msg}) {
  return (
    <div className='py-1'>
        <div className='bg-purple-400 w-fit px-2 pt-1 pb-2 rounded-t-xl rounded-br-xl '>
            <p className='text-sm text-slate-200'>{by?by:"\b"}</p>
            <p className='px-2 py-1 bg-slate-200 rounded-lg text-xl'>{msg?msg:"\b"}</p>
        </div>
    </div>
  )
}
