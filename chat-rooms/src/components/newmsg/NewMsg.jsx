import React, {useState} from 'react'


export default function NewMsg({newmsg}) {
    const [message,setmessage] = useState("");
  return (
    <div className='w-full bg-slate-100 px-4' style={{height: "60px"}}>
        <div className='my-auto w-full flex h-fit'>
            <input type="text" value={message} onChange={(e)=>{
                setmessage(e.target.value)
            }} placeholder='type here' className='text-xl rounded-lg px-2 py-3 w-full' />
            <button className='w-36 bg-teal-500 text-xl text-white rounded-lg mx-2' onClick={
              ()=>{
                if(message){
                  newmsg(message)
                  setmessage("")
                }
              }}>Post</button>
        </div>
    </div>
  )
}
