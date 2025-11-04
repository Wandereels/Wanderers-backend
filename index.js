require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

app.use(cors());
app.use(express.json());

// Serve static files from public folder
app.use('/videos', express.static(path.join(__dirname, 'public')));


const reelsData = [
  { id: 1, user: 'mountain_escape', avatar: 'https://i.pravatar.cc/40?img=11', videoUrl: `/videos/reel.mp4` },
  { id: 2, user: 'mountain_escape', avatar: 'https://i.pravatar.cc/40?img=11', videoUrl: `/videos/reel2.mp4` },
  { id: 3, user: 'mountain_escape', avatar: 'https://i.pravatar.cc/40?img=11', videoUrl: `/videos/reel3.mp4` },
  { id: 4, user: 'mountain_escape', avatar: 'https://i.pravatar.cc/40?img=11', videoUrl: `/videos/reel4.mp4` },
];

app.get('/api/reels', (req, res) => {
  res.json(reelsData);
});

app.listen(4500, () => console.log('Server running on port 4500'));
