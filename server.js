import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import routes from "./src/routes/routes.js";

const server = express();
const PORT = 3000;

//mongoose connection to mongoDB
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/ArtworksDB', {
    useNewUrlParser: true,
    useUnifiedTopology:true
});

//body parser init
server.use(bodyParser.urlencoded({extended: true}));
server.use(bodyParser.json());

server.set('view engine', 'ejs');
server.set('views', './views');

routes(server);

server.listen(PORT, () => {
    console.log(`Your server is running on port ${PORT}`);
});

