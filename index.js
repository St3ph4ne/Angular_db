var express = require('express')
var app = express()

const messages = [
  {
    title : 'Titre du message 1',
    content : 'contenu du message 1',
    isRead: false,
    sent: new Date()
  },
  {
    title : 'Titre du message 2',
    content : 'contenu du message 2',
    isRead: false,
    sent: new Date()
  },
  {
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

app.listen(8828)
