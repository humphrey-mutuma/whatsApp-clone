import { Avatar } from '@material-ui/core'
import './SidebarChat.css'

const SidebarChat = () => {
  
  return (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat_info">
        <h2>Room name</h2>
        <p>last message ...</p>
      </div>
    </div>
  );
}

export default SidebarChat
