const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');

const app = express();
const allowedOrigins = [
  "http://localhost:3000",
  "http://192.168.1.69:3000",
  "http://100.83.85.165:3000",
  "http://172.20.10.4:3000",
  "http://100.64.105.176:3000",
  "http://100.64.98.154:3000",
  "http://54.218.212.231:3000",
];

// Apply CORS configuration
app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: ['GET', 'POST'],
  })
);

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: allowedOrigins,
    methods: ['GET', 'POST'],
  },
});

const rooms = {}; // Store chat messages per room

io.on('connection', (socket) => {
  console.log(`User connected: ${socket.id}`);

  // Join a specific room
  socket.on('joinRoom', (room) => {
    console.log(`User ${socket.id} joined room: ${room}`);
    socket.join(room);

    // Initialize room if it doesn't exist
    if (!rooms[room]) {
      rooms[room] = []; // Create a new empty array for the room
    }

    // Send existing chat messages for the room to the user
    socket.emit('chatMessage', rooms[room]);
  });

  // Handle chat messages
  socket.on('sendMessage', ({ room, message }) => {
    if (message && message.text.trim() !== '') {
      console.log(`Message in room ${room}:`, message);

      // Save the message in the room's history
      if (!rooms[room]) {
        rooms[room] = []; // Initialize the room if it doesn't exist
      }
      rooms[room].push(message);

      // Broadcast the message to all clients in the room
      io.to(room).emit('chatMessage', message);
    }
  });

  socket.on('disconnect', () => {
    console.log(`User disconnected: ${socket.id}`);
  });
});

server.listen(4000, '0.0.0.0', () => {
  console.log('Server is running on port 4000');
});
