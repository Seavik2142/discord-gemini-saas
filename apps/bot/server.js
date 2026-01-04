const express = require('express');
const server = express();

server.all('/', (req, res) => {
    res.send('Bot is running!');
});

function keepAlive() {
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log("🌐 Web Server is ready on port " + port);
    });
}

module.exports = keepAlive;