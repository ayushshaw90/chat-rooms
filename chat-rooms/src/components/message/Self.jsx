import React from 'react'

export default function Self({ msg }) {
    return (
        <div className='py-1'>
            <div className='ml-auto px-2 pb-2 pt-1 rounded-t-xl rounded-bl-xl bg-sky-500 w-fit'>
                <p className='text-sm text-gray-300'>You</p>
                <p className='bg-slate-300 px-4 rounded-md py-1 text-xl'>
                {msg?msg:"\b"}
                </p>
            </div>
        </div>
    )
}
