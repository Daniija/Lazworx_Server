const express = require('express');
const app = express();
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const db = require('./database/database')();


// Routes



// Images
app.use('/backend/uploads', express.static('uploads'))


// Dependency
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors({ origin: '*'}))


// secure http
app.use(helmet());

// google cloud




// socket connection
let server = require('http').Server(app);
let io = require('socket.io')(
    server,

    {
        cors: {
            origin: '*',
            methods: ['GET', 'POST'],
            allowedHeaders: ["my-custom-header"],
            credentials: true
        }
    }
);

app.set('io', io);
io.on('connection', socket => {
    console.log("new socket connection");
    socket.emit("Hello World!");
});

// for testing purposes
app.get('/', (req, res) => {
    res.send("Hello World!");
});

// routes

// debugging
server.listen(PORT , () => {
    console.log(`listening on port ${PORT}`);
});