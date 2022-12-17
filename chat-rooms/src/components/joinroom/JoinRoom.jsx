import React, { useState } from 'react'

export default function JoinRoom({ joinroom, user, room }) {
  const [code, setcode] = useState("");
  const [show, setshow] = useState(true);
  return (
    <div>
      <div className='bg-gray-100 px-4 py-2 drop-shadow-md'>
        <h1 className='flex gap-3'>
          <label htmlFor='chatroomid' className='text-xl text-sky-500 font-semibold'>Join a chat room</label>
          <img src="message.png" className='h-10'></img>
        </h1>
        <div className='flex justify-between flex-col md:flex-row'>
          <div className='w-full py-2'>
            <input id={"chatroomid"} type="text" value={code} onChange={(e) => { setcode(e.target.value) }} placeholder='# - - - - - -' className='text-2xl border-b-2 border-sky-500 px-4 py-2 bg-gray-100 w-2/3' />
            <button className='bg-cyan-500 hover:bg-sky-500 hover:drop-shadow-lg  active:drop-shadow-sm duration-200 ease-in-out px-4 py-2 text-xl text-white rounded-lg mx-2 ' onClick={() => { setcode(""); joinroom(code) }}>Enter</button>
          </div>
          <div className='w-full'>
            <div className='border-2 border-cyan-500 text-xl w-fit mx-auto py-2 h-12 md:h-fit text-cyan-500 bg-white shadow-sm font-semibold px-4 rounded-full'>{user}</div>
          </div>
          <div className='w-full'>
            <div className='text-xl w-fit mx-auto py-2 h-12 md:h-fit text-cyan-500 font-semibold px-4 rounded-lg '>Room - {room ? room : "Not joined"}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
