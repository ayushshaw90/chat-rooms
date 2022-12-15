import React from 'react'

export default function Members({ memberlist, height, you }) {
  return (
    <div className='bg-gray-200 w-80' style={{ height: `${height}px` }}>
      {memberlist.map((e) => {
        return (
          <div key={e.id} className="py-2 px-4 text-lg border flex justify-between border-gray-400 border-collapse">
            <span>{e.name}</span>
            <span className='text-slate-400 ml-auto w-fit'>
              {e.name === you ? "(you)" : ""}
            </span>
          </div>
        )
      })}
    </div>
  )
}
