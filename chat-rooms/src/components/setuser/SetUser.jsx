import React, {useState} from 'react'

export default function SetUser({setuser}) {
    const [username, setusername] = useState("");
  return (
    <div className='h-screen w-full flex bg-slate-100 z-40 absolute top-0'>
        <div className='m-auto h-fit w-fit bg-white rounded-lg px-4 py-6'>
            <div className='py-4'>
                <label htmlFor="Username" className='text-xl px-2'>Username</label>
            </div>
            <input className='bg-slate-100 mx-2 text-xl py-2 px-1 rounded-lg' type="text" id="Username" placeholder="Enter your username" value={username} onChange={(e)=>{
                setusername(e.target.value)
            }} />
            <button onClick={()=>setuser(username)} className="bg-sky-400 text-white px-4 py-2 rounded-lg font-semibold hover:bg-sky-500 active:bg-sky-600">Enter</button>
        </div>
    </div>
  )
}
