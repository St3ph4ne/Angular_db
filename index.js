var express = require('express');
const res = require('express/lib/response');
var jwt = require('jsonwebtoken');
const logins = require('./logins.json')
var app = express();
var cors = require('cors');
const SECRET = "secret";

app.use(cors());
app.use(express.json());

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

//envoie une requête et renvoie les messages sous forme de json
app.get("/api", function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', "*")
  res.setHeader('Content-Type', 'Application/json')
  res.json(messages)
})

//
app.post("/api", function (req, res) {

})


//pour chaque user/mdp on vérifie que les données récupérées correspondent à ma liste local
app.post("/logins", (req, res) => {
  logins.forEach(element => { 
      if (req.body.name == element.name && req.body.password == element.password) {
          res.status(200);

          //génération du token:
          const token = jwt.sign({
            username: element.name
          }, SECRET, { expiresIn: '7 days' })
          res.json({ access_token: token }) //renvoie en réponse le token au format json
      }
  })
  res.status(401).send("identifiant invalide")
})

app.listen(8828)

