//import config, { nodeEnv, logStars } from './config';
import config from './config';
import express from 'express';
import apiRouter from './api';

const server = express();

// Setup dynamic template language: Embedded java-script (EJS) engine for
// server-side rendering of javascript FE components
server.set('view engine', 'ejs');

server.get('/', (req, res) => {
  //res.send('Hello Express');
  res.render('index', {
    content: 'Hello Express and <em>EJS!</em>'
  });
});

// In dev mode: using express static middleware to serve static html pages for now
// In prod: Nginx can be a much faster option
server.use('/api', apiRouter);
server.use(express.static('public'));


server.listen(config.port, () => {
  console.info('Express listening on port ', config.port);
})



//console.log(config, nodeEnv);
//logStars('Function Testing');


//server.listen(...)
