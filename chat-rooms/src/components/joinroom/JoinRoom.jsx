import React, { useState } from 'react'

export default function JoinRoom({ joinroom, user,room }) {
  const [code, setcode] = useState("");
  return (
    <div >
      <div className='bg-amber-300 px-4 py-2'>
        <h1>
          <label htmlFor='chatroomid' className='text-xl text-orange-600 py-2 font-semibold'>Join a chat room</label>
        </h1>
        <div className='flex justify-between'>
          <div>
            <input id={"chatroomid"} type="text" value={code} onChange={(e) => { setcode(e.target.value) }} placeholder='# - - - - - -' className='text-2xl bg-slate-100 px-4 py-2 rounded-lg' />
            <button className='bg-orange-400 hover:bg-orange-500 active:bg-orange-600 px-4 py-2 text-xl text-white rounded-lg mx-2 ' onClick={() => { setcode(""); joinroom(code) }}>Enter</button>
          </div>
          <div className='text-xl py-2 text-orange-600 font-semibold px-4'>{room}</div>
        </div>
        <div className='text-orange-500 text-lg font-semibold'>{user}</div>
      </div>

    </div>
  )
}
