import React from "react";
import { useParams, Link } from 'react-router-dom';

import "./ChatRoom.css";
import useChat from "../../useChat";

const ChatRoom = (props) => {
  const { roomId } = useParams();
  const { messages, sendMessage } = useChat(roomId);
  const [newMessage, setNewMessage] = React.useState("");

  const handleNewMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleSendMessage = () => {
    sendMessage(newMessage);
    setNewMessage("");
  };

  return (
    <div className="content">
      <div className="upper-box">
        <h1 className="room-name">과목명 // roomId: {roomId}</h1>
      </div>
      <div className="chat-room-container">
        <div className="upper-tab">
          <div className="speakers-profile">
            <div className="profile-icon"></div>
            참가자 이름
          </div>
          <div className="upper-btns">
          <button className="upper-btn">일정 조율</button> {/* 미구현 */}
          <Link to="/scorePrev"><button className="upper-btn">나가기</button></Link>
          </div>
        </div>

        <div className="messages-container">
          <ol className="messages-list">
            {messages.map((message, i) => (
              <li
                key={i}
                className={`message-item ${
                  message.ownedByCurrentUser ? "my-message" : "received-message"
                }`}
              >
                {message.body}
              </li>
            ))}
          </ol>
        </div>
        <div className="sendBox">
        <textarea
          value={newMessage}
          onChange={handleNewMessageChange}
          placeholder="메세지를 입력하세요"
          className="new-message-input-field"
          style={{overflow: "hidden"}}
        />
        <button onClick={handleSendMessage} className="send-message-button">
          전송
        </button>
        </div>
      </div>
    </div>

  );
};

export default ChatRoom;
