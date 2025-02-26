const express = require('express');
const http = require('http');
const mongoose = require('mongoose');
const socketIo = require('socket.io');
const cors = require('cors');

// Initialize app and middleware
const app = express();
const server = http.createServer(app);
const io = socketIo(server, { cors: { origin: "*" } });

app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/chatApp', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// User and Chat Models
const User = mongoose.model('User', new mongoose.Schema({
  username: String,
  password: String,
}));

const Message = mongoose.model('Message', new mongoose.Schema({
  sender: String,
  message: String,
  timestamp: { type: Date, default: Date.now },
}));

// API for user registration/login
app.post('/api/register', async (req, res) => {
  const { username, password } = req.body;
  const user = new User({ username, password });
  await user.save();
  res.send({ message: 'User registered successfully' });
});

app.post('/api/login', async (req, res) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username, password });
  if (user) {
    res.send({ message: 'Login successful', username });
  } else {
    res.status(400).send({ message: 'Invalid credentials' });
  }
});

// Socket.IO for chat messages
io.on('connection', (socket) => {
  console.log('New user connected:', socket.id);

  socket.on('sendMessage', async (data) => {
    const newMessage = new Message(data);
    await newMessage.save();
    io.emit('receiveMessage', data);
  });

  socket.on('disconnect', () => {
    console.log('User disconnected:', socket.id);
  });
});

// Start server
server.listen(3000, () => {
  console.log('Server running on port 3000');
});