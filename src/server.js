// server.js
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const allowedOrigins = ["http://localhost:3000", "http://192.168.1.69:3000", "http://100.83.85.165:3000", "http://172.20.10.4:3000", "http://100.64.105.176:3000", "http://100.64.98.154:3000", "http://54.218.212.231:3000"];

// Apply CORS configuration with detailed logging
app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      console.log("Allowed origin:", origin);
      callback(null, true);
    } else {
      console.log("Blocked origin:", origin);
      callback(new Error('Not allowed by CORS'));
    }
  },
  methods: ["GET", "POST"]
}));

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ["GET", "POST"]
  }
});

let players = [];
const MAX_PLAYERS = 4;
let chatMessages = []; // Array to store chat messages

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Send existing chat messages to new connections
  socket.emit('chatMessage', chatMessages);

  socket.on('joinGame', () => {
    if (players.length < MAX_PLAYERS) {
      const newPlayer = { id: socket.id, name: `Player ${players.length + 1}` };
      players.push(newPlayer);
      console.log(`Player ${newPlayer.name} joined. Total players: ${players.length}`);
      
      // Emit updated player list to all clients
      io.emit('playerList', players);
    } else {
      console.log(`Game is full. Player ${socket.id} cannot join.`);
    }
  });

  // Listen for 'sendMessage' event from client and broadcast it
  socket.on('sendMessage', (message) => {
    console.log("Received message from client:", message); // Log message to ensure it's received
    chatMessages.push(message); // Store the message in the chat history
    io.emit('chatMessage', message); // Broadcast the new message to all clients
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
    players = players.filter(player => player.id !== socket.id);
    
    // Emit updated player list to all clients
    io.emit('playerList', players);
  });
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server is running on port 4000');
});
