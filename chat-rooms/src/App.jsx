import './App.css'
import JoinRoom from './components/joinroom/JoinRoom'
import Members from './components/members/Members'
import Chat from './components/chat/Chat'
import NewMsg from './components/newmsg/NewMsg'
import { useEffect, useRef, useState } from 'react'
import { io } from "socket.io-client"
import SetUser from './components/setuser/SetUser'

const URL = "http://localhost:8000"

function App() {
  const [socket, setsocket] = useState(null);
  const [activate,setactivate] = useState(true);
  const [chats, setchats] = useState([])
  const [memberlist, setmemberlist] = useState([
  ])
  const [Room, setRoom] = useState("");
  useEffect(() => {
    const newsocket = io(URL, {
      autoConnect: false
    });
    setsocket(newsocket);

    newsocket.on('user-list', (list) => {
      let i = 0;
      let mem =
        list.map(item => {
          return ({ name: item, id: i++ })
        })
      mem.push({ name: user, id: i })
      setmemberlist(mem)
    })
    setactivate(!activate);
    return () => {
      console.log("closing")
      newsocket.close();
    }
    
  }, [])
  useEffect(() => {
    if (socket) {
      socket.on('message', (obj) => {
        let cc = [...chats, { by: obj.by, msg: obj.message }]
        setchats(cc);
      })
      socket.on('new-user', (name) => {
        console.log("new user", name)
        setchats([...chats, {"name": name, "room": Room, "joined": true}])
        console.log(memberlist)
      })
      socket.on('left', (name) => {
        console.log("left", name)
        setchats([...chats, {"name": name, "room": Room, "joined": false}])
      })
    }
  }, [chats,activate])
  useEffect(() => {
    if (socket) {
      socket.on('user-list', (list)=>{
        console.log('list received', list);
        let i=0;
        setmemberlist(list.map(e=>{return {name: e, id: i++}}))
      })
    }
  }, [memberlist])
  const joinfunc = (text) => {
    if (socket) {
      socket.emit('join-room', text);
      
      setchats([{"name": user, "room": text, "joined": true}])
      setRoom(text);
    }
  }
  const newmsg = (msg) => {
    if (socket) {
      socket.emit('chat-message', msg, Room)
      setchats([...chats, {"by": user, "msg": msg}])
    }
  }


  const [user, setuser] = useState("")
  const [userset, setuserset] = useState(false);
  const joinref = useRef(null);
  const [height, setheight] = useState(1000);
  const [joinheight, setjoinheight] = useState(0);
  const [show, setshow] = useState(true);
  useEffect(() => {
    setheight(window.innerHeight)
    window.addEventListener('resize', () => {
      setheight(window.innerHeight)
      setjoinheight(joinref.current.clientHeight)
      setshow(true)
    })
  }, [])
  useEffect(()=>{
    setjoinheight(joinref.current.clientHeight)
  },[user,userset])
  useEffect(() => {
    setjoinheight(joinref.current.clientHeight)
    joinref.current.addEventListener('resize', () => { console.log("Hello") })
  }, [])
  return (
    <div className="App h-screen w-full" >
      <div ref={joinref} >
        <JoinRoom joinroom={joinfunc} room={Room} user={user}></JoinRoom>
        <button
         onClick={()=>setshow(!show)}
         className='right-0 z-50 absolute px-4 py-2 bg-cyan-500 hover:bg-cyan-600 active:drop-shadow-md duration-200 ease-in-out m-2 text-white  drop-shadow-md rounded-full md:hidden'
         >{show?"Hide":"Show"}</button>
      </div>
      <div className='md:flex'>
        <Members memberlist={memberlist} height={height - joinheight} you={user} show={show}></Members>
        <div className='w-full'>
          <Chat chats={chats} user={user} height={height - joinheight - 60} />
          <NewMsg newmsg={newmsg}></NewMsg>
        </div>
      </div>
      {
        !userset && <SetUser setuser={(name) => {
          setuser(name);
          setuserset(true);
          socket.connect();
          socket.emit('set-name', name)
          console.log("emitted")
          setmemberlist([...memberlist, { name: name, id: memberlist.length }])
        }}></SetUser>
      }
    </div>
  )
}

export default App
