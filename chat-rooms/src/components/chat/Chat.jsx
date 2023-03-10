import React, { useEffect, useRef } from 'react'
import Self from '../message/Self'
import OtherMsg from '../message/OtherMsg'
import MemberMsg from '../message/MemberMsg';
export default function Chat({ chats, user, height }) {
  const bottomRef = useRef(null);
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  })
  return (
    <div className='w-full bg-slate-100 p-2 overflow-y-scroll' style={{ height: `${height}px` }}>
      {
        chats.map(item => {
          if (item.by) {
            if (item.by === user) {
              return <Self msg={item.msg} key={chats.indexOf(item)}></Self>
            } else {
              return <OtherMsg msg={item.msg} by={item.by} key={chats.indexOf(item)} ></OtherMsg>
            }
          }else{
            return <MemberMsg name={item.name} room={item.room} joined={item.joined} key={chats.indexOf(item)}></MemberMsg>
          }
        })
      }
      <div ref={bottomRef}></div>
    </div>
  )
}
