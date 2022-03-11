var express = require('express');
var jwt = require('jsonwebtoken');
const cors = require('cors');

const bodyParser = require('body-parser');
const { decode } = require('jsonwebtoken');
var app = express();

app.use(bodyParser.json());
app.use(cors())
const PORT = 8828

let messages =  [
  {
      id: 1,
      title : 'Message 1',
      content : 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
      sent: new Date,
      isRead: true,
    },
    {
      id: 2,
      title : 'Message 2',
      content : 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
      sent: new Date,
      isRead: true,
    },
    {
      id: 3,
      title : 'Message 3',
      content : 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
      sent: new Date,
      isRead: false,
    },
    {
      id: 4,
      title : 'Message 4',
      content : 'A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way. A nebula is an interstellar cloud of dust, hydrogen, helium and other ionized gases. Originally, nebula was a name for any diffuse astronomical object, including galaxies beyond the Milky Way.',
      sent: new Date,
      isRead: false,
    },
    {
      id: 5,
      title: 'Message 5',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      isRead: false,
      sent: new Date()
    },
    {
      id: 6,
      title: 'Message 6',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      isRead: false,
      sent: new Date()
    },
    {
      id: 7,
      title: 'Message 7',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      isRead: false,
      sent: new Date()
    },
    {
      id: 8,
      title: 'Message 8',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      isRead: false,
      sent: new Date()
    },
    {
      id: 9,
      title: 'Message 9',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      isRead: false,
      sent: new Date()
    },
    {
      id: 10,
      title: 'Message 10',
      content: 'The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.',
      isRead: false,
      sent: new Date()
    },
    
  ]

let user = {
  name : 'toto',
  email : 'toto.titi@hotmail.com',
  password: '1234',
  token: ''
}

let options = { 
  expiresIn: 60*60*60, 
  algorithm : 'HS256'
}
  
// generation de token
app.post('/logins', (req, res) => {
  if (req.body.email == user.email && req.body.password == user.password) {
    var token = jwt.sign({email: user.email, password: user.password}, 'private_key', options);
    user.token = token;
    res.send(token)
    console.log("Vous êtes authentifié !")
  }else{
    res.send("email ou mot de passe incorrect")
    console.log("email ou mot de passe incorrect")
  }
});

// // verification du token
// app.get('/auth', function(req, res){
//   let decode = jwt.verify(token_str, 'private_key') 
//   // res.header('autorization', 'Bearer '+token)

//   if (decode.username == user.name && decode.password == user.password) {
//     res.send("Vous êtes authentifé en rant que : "+decode.username) 
//   }else{
//     res.sendStatus(403)
//   } 
// });




// renvoie de json 
app.get('/messages', function(request, response) {
    response.setHeader('Content-Type', 'Application/json')
    response.json(messages)

});

// postuler un message
app.post('/message/new', (req, res) => {
  let newMsg = req.body
  messages.push(newMsg)

  res.send("\nOK ! Les données ont été enregistré avec succès")
  console.log("Les data ci-dessous ont été enregistré  avec succès \n", newMsg)
}); 


// recuperation de l'id passé en parametre
app.get('/message/:id', (req, res) => {
  res.setHeader('Content-Type', 'Application/json')
  let id = parseInt(req.params.id)
  messages.find(msg => { 
    if (msg.id == id) {
      res.send(messages[id])
    }else{
      res.sendStatus(404)
    }
  })
 
});

// suppression de l'id de messages passé en parametre
app.delete('/message/del/:id', (req, res) => {
  let id = parseInt(req.params.id)
  messages.splice(id, 1)
 res.send("message deleted !")
 console.log(`message ${id} deleted !`)
});

app.listen(PORT)
console.log("\n Le server est en ecoute sur le port : "+PORT)
