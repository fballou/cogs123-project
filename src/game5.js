// src/Game1.js
import React, { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

import Home from './Home.png';
import Friends from './Friends.png';
import Chat from './Chat.png';
import GamingActive from './GamingActive.png';

//Change depending on where you are (home or campus)
//HOME
const socket = io('http://192.168.1.69:4000'); 
//CAMPUS PROTECTED
// const socket = io('http://100.83.85.165:4000');
//HOTSPOT
// const socket = io('http://172.20.10.4:4000');
//CAMPUS GUEST
// const socket = io('http://100.64.105.176:4000');
//CAMPUS GUEST 2
// const socket = io('http://100.64.98.154:4000');
//EC2 INSTANCE (update whenever we launch the instance)
// const socket = io('http://54.218.212.231:4000');

function Game5({ onBack, onSelectGame }) {

  const [iframeSrc, setIframeSrc] = useState("https://skribbl.io/");
  const [inviteLink, setInviteLink] = useState("");

  const [players, setPlayers] = useState([]);
  const [hasJoined, setHasJoined] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const messagesEndRef = useRef(null); // Ref to track the end of messages for auto-scroll

  const handleJoinGame = () => {
    if (inviteLink.trim() !== "") {
      setIframeSrc(inviteLink); // Update the iframe src with the new link
      setInviteLink(""); // Clear the input field after joining
    }
  };

  useEffect(() => {
    // Join the room for Game2
    socket.emit('joinRoom', 'game5'); // Changed to game2 for separation
  
    // Listen for chat messages in this room
    // socket.on('chatMessage', (message) => {
    //   setMessages((prevMessages) => [...prevMessages, message]);
    // });
  
    return () => {
      socket.off('chatMessage');
    };
  }, []);
  

  useEffect(() => {
    // Listen for updated player list from the server
    socket.on('playerList', (updatedPlayers) => {
      setPlayers(updatedPlayers);
    });

    // Listen for incoming chat messages from the server
    socket.on('chatMessage', (message) => {
      setMessages((prevMessages) => [...prevMessages, message]);
    });

    // Clean up on component unmount
    return () => {
      socket.off('playerList');
      socket.off('chatMessage');
    };
  }, []);

  useEffect(() => {
    // Scroll to the latest message
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  // const handleJoinGame = () => {
  //   socket.emit('joinGame');
  //   setHasJoined(true);
  // };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  const handleSendMessage = () => {
    console.log("Sending message:", newMessage);
    if (newMessage.trim()) {
      const message = { text: newMessage, sender: `User ${socket.id.substring(0, 4)}` };
      console.log("Sending message to server:", message); // Log the actual message
      // socket.emit('sendMessage', message); // Emit the message to the server
      socket.emit('sendMessage', { room: 'game5', message });
      setNewMessage(""); // Clear the input field
    } else {
      console.log("Message is empty and will not be sent");
    }
  };

  return (
    <div className="game-container">

      <div className="gaming-wrapper2">

        {/* <button onClick={onBack} className="back-button">Back to Home</button> */}
        
        <h2>Create or Join a Game!</h2>

        {/* <p>Players: {players.length}/4</p> */}
        
        {/* {!hasJoined && (
          <button onClick={handleJoinGame}>Join Game</button>
        )} */}

      <div className="join-game-container">
        <input
          type="text"
          value={inviteLink}
          onChange={(e) => setInviteLink(e.target.value)} // Update the input field
          placeholder="Paste invite link here"
          className="join-game-input"
        />
        <button onClick={handleJoinGame} className="join-game-button">
          Join Game
        </button>
      </div>

        <ul>
          {players.map(player => (
            <li key={player.id}>{player.name}</li>
          ))}
        </ul>

        {/* <button onClick={toggleChat}>{chatOpen ? "Close Chat" : "Open Chat"}</button> */}
        <img src={Chat} alt="Chat Icon" onClick={toggleChat} className="gaming-chat-icon"/>

        {chatOpen && (
          <div className="chatbox">
            <div className="messages">
              {messages.map((msg, index) => (
                <div key={index} className="message">
                  <strong>{msg.sender}:</strong> {msg.text}
                </div>
              ))}
              <div ref={messagesEndRef}></div> {/* Marker to auto-scroll to latest message */}
            </div>
            <input 
              type="text" 
              value={newMessage} 
              onChange={(e) => setNewMessage(e.target.value)} 
              placeholder="Type a message"
            />
            <button className="send-button" onClick={handleSendMessage}>Send</button>
          </div>
        )}

        <div className="iframe-container">
          <iframe
            src={iframeSrc}
            title="Skribbl Game"
            width="100%"
            height="500px"
            style={{ border: "none" }}
            allow="clipboard-write"
            allowFullScreen
          ></iframe>
        </div>

        <div className="footer-navbar">
          {/* <h1>Testing</h1> */}
          <img src={Home} alt="Home Icon" onClick={() => onSelectGame('home')}/>
          <img src={GamingActive} alt="ActiveGaming Icon" onClick={() => onSelectGame('home2')}/>
          <img src={Chat} alt="Chat Icon"/>
          <img src={Friends} alt="Friends Icon"/>
        </div>
      </div>
      

    </div>
  );
}

export default Game5;
