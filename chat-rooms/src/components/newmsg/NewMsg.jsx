import React, { useState } from 'react'
import Picker from 'emoji-picker-react';

export default function NewMsg({ newmsg }) {
  const [message, setmessage] = useState("");
  const [showemojipicker, setshowemojipicker] = useState(false)
  function handleEmoji(emojiObject, event) {
    console.log(emojiObject.emoji)
    setmessage(message + emojiObject.emoji);
  }
  return (
    <>
      <div className='absolute bottom-16'>
        <button onClick={() => { setshowemojipicker(!showemojipicker) }} className="bg-gray-100 border-2 border-slate-300 text-2xl px-2 py-1 text-orange-800 rounded hover:drop-shadow-sm active:drop-shadow-none">
          {showemojipicker?  "✖️" : "🙂"}
        </button>
        {
          showemojipicker && <Picker onEmojiClick={handleEmoji} />
        }

      </div>
      <div className='w-full px-4' style={{ height: "60px" }}>

        <div className='my-auto w-full flex h-fit'>
          <input type="text" value={message} onChange={(e) => {
            setmessage(e.target.value)
          }} placeholder='Type here' className='text-xl rounded-lg px-2 py-3 w-full' />

          <button className='drop-shadow-none duration-200 w-36 bg-teal-500 hover:bg-teal-600 active:drop-shadow-lg text-xl text-white rounded-lg mx-2' onClick={
            () => {
              if (message) {
                newmsg(message)
                setmessage("")
              }
            }}>Post</button>
        </div>
      </div>
    </>
  )
}
