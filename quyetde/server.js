const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const fs = require('fs');

const server = express();
server.use(express.static('public'));
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get('/', (req, res) => {
  res.status(200).send('Hello expressjs 123123');
});

server.get('/create-question', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, './public/create-question.html'));
});

server.post('/create-question', (req, res) => {
  fs.readFile('./data.json', (error, data) => {
    if (error) {
      res.status(500).send('Internal server error');
    }

    const questions = JSON.parse(data);
    
    questions.push({
      id: questions.length,
      content: req.body.content,
      yes: 0,
      no: 0,
      createdAt: new Date().toLocaleString(),
    });
    
    fs.writeFile('./data.json', JSON.stringify(questions), (error) => {
      if (error) {
        res.status(500).send('Internal server error');
      }
      res.status(201).end('Sucess');
    });
  });
  // id, content, yes, no, createdAt
  // const newQuestion = {
  //   id: '',
  //   content: '',
  //   yes: 0,
  //   no: 0,
  //   createdAt: '',
  // };
});

server.listen(3000, (error) => {
  if (error) {
    throw error;
  }
  console.log('Server listen on port 3000...');
});