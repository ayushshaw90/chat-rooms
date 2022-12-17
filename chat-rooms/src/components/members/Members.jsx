import React from 'react'

export default function Members({ memberlist, height, you, show}) {
  return (
    <>
    {show &&
    <div className='z-30 absolute md:static md:block bg-gray-200 w-80 pt-1' style={{ height: `${height}px` }}>
      {memberlist.map((e) => {
        return (
          <div key={e.id} className='py-1 px-2 text-lg '>
            <div className={`border-l-4 border-cyan-500 w-full py-2 px-2 flex justify-between rounded-lg ${e.name === you? "bg-gray-300": "bg-gray-300"}`}>
            <span className='text-cyan-600'>{e.name}</span>
            <span className='text-cyan-600 ml-auto w-fit'>
              {e.name === you ? "(you)" : ""}
            </span>
            </div>
          </div>
        )
      })}
    </div>
    }
    </>
  )
}
