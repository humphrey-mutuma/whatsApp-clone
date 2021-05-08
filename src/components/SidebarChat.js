import { Avatar } from '@material-ui/core'
import { useState, useEffect } from "react";
import db from '../firebase';
import './SidebarChat.css'

const SidebarChat = ({addNewChat, id, name}) => {
  const [seed, setSeed] = useState('');

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 5000))
  }, [])

  const createChat = () =>{
    const roomName = prompt("Please enter name for chat");
    if(roomName){
      db.collection('rooms').add({
        name:roomName,
      })
    }
  }

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>{name}</h2>
        <p>last message ...</p>
      </div>
    </div>
  ):(
    <div 
      onClick={createChat}
      className="sidebarChat">
      <h2>Add new Chat</h2>
    </div>
  )
}

export default SidebarChat
