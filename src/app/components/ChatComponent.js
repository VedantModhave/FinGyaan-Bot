'use client';
import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRobot } from '@fortawesome/free-solid-svg-icons';
import ChatBot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import ActionProvider from "../Actionprovider";
import MessageParser from "../MessageParser";
import config from "../config";

const ChatComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(prev => !prev);
  };

  return (
    <div>
      {isOpen && (
        <ChatBot 
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
      )}
      <button 
        onClick={toggleChatbot} 
        style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          background: 'linear-gradient(135deg, #007bff, #00aaff)',
          border: 'none',
          borderRadius: '50%',
          cursor: 'pointer',
          zIndex: 1000,
          width: '60px',
          height: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
        }}
      >
        <FontAwesomeIcon icon={faRobot} style={{ color: '#ffffff', fontSize: '24px' }} />
      </button>
    </div>
  );
};

export default ChatComponent;
