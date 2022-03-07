var express = require('express');
const res = require('express/lib/response');
var jwt = require('jsonwebtoken');
var app = express()

const messages = [
  {
    id : 1,
    title : 'Titre du message 1',
    content : 'contenu du message 1',
    isRead: false,
    sent: new Date()
  },
  {
    id : 2,
    title : 'Titre du message 2',
    content : 'contenu du message 2',
    isRead: false,
    sent: new Date()
  },
  {
    id : 3,
    title : 'Titre du message 3',
    content : 'contenu du message 3',
    isRead: false,
    sent: new Date()
  },
];


app.get("/api", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader('Content-Type', 'Application/json')
  res.json(messages)
})

app.get("/user/token", function (req, res) {
  var token = jwt.sign(USER, 'keyone', { expiresIn: "7 days" });
  console.log(token);
  res.send(token);
})

app.listen(8828)

