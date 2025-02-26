const express = require('express');

const app = express();
const PORT = 3000;


app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  // Perform your authentication logic here
  console.log(`Username: ${username}, Password: ${password}`);
  res.json({ message: 'Login successful' });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});