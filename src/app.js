require('dotenv').config();

const http = require('http');
const student = require('./student');

const server = http.createServer((req, res) => {
  if(req.url == '/') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>This is Home Page<h1>');
  }

  if(req.url == '/student') {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end(`<h1>This is student you ask for ${student.getStudentName()}`);
  }
});

server.listen(process.env.PORT || 3456, () => {
  console.log(`Server is running at ${process.env.PORT || 3456}`);
});

