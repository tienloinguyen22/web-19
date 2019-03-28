const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const userRouter = require('./api/users/routes');
const postRouter = require('./api/posts/routes');

mongoose.connect('mongodb://localhost:27017/techkids-hotgirl', (error) => {
  if (error) {
    throw error;
  }

  const app = express();
  
  // middlewares
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));

  // routes
  app.use('/api/users', userRouter);
  app.use('/api/posts', postRouter);

  // start server
  app.listen(3000, (error) => {
    if (!error) {
      console.log('Server listen on port 3000 ...');
    }
  });
});