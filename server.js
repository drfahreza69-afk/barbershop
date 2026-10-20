const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Enable gzip compression or caching headers if desired; serve static files from current directory
app.use(express.static(path.join(__dirname), {
  maxAge: '1d',
  index: ['index.html']
}));

// Route fallback: any unknown route serves index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`===============================================`);
  console.log(`  BARBER KING'S ZAED SERVER IS RUNNING`);
  console.log(`  Port: ${PORT}`);
  console.log(`  Local URL: http://localhost:${PORT}`);
  console.log(`===============================================`);
});
