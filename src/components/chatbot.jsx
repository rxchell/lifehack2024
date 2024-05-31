import './style/chatbot.css';
import { IoMdChatbubbles } from "react-icons/io";

function Chatbot() {
    return (
        
        <button className="chat-button">
            <IoMdChatbubbles color='white' size={'40px'}/>
        </button>
        
    )
}

export default Chatbot;