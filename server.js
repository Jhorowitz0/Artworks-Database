const express = require('express');
const server = express();

server.get('/', (req, res) => {
    res.send('Artworks Database Online...with updates?');
});

server.listen(3000, () => console.log('Server running on port 3000'));

server.route('/update').post((req,res)=>{
    res.sendFile(__dirname + '/update.php');
});

