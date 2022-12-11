const express = require('express');
const app = express();

const path = require('path');

// const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static('build'));
app.get('*', (req, res) => {
   res.sendFile(path.resolve(__dirname, 'build', 'index.html'));
});

app.listen(port, (err) => {
   if(err) return console.log(err);
   console.log('Server is up!', port);
});