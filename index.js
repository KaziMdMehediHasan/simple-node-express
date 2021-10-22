const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
const port = 5000;

app.get("/", (req,res) => {
    res.send("Hello from my first node server. Let's goooo!");
})


const users = [
  { id: 0, name: "Shabana", email: "shabana@gmail.com", phone: 017000000 },
  { id: 1, name: "Shabnur", email: "Shabnur@gmail.com", phone: 017000000 },
  { id: 2, name: "Srabonty", email: "Srabonty@gmail.com", phone: 017000000 },
  { id: 3, name: "Sonia", email: "Sonia@gmail.com", phone: 017000000 },
  { id: 4, name: "Suchonda", email: "Suchonda@gmail.com", phone: 017000000 },
  { id: 5, name: "Susmita", email: "Susmita@gmail.com", phone: 017000000 },
];

app.get("/users", (req,res) => {

    // search implementation by letter,full name
    console.log(req.query);//is an object
    const search = req.query.search;
    if(search){
        const searchResult = users.filter(user=> user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else{
        res.send(users);
    }
    
    res.send(users);
})

// app.Method

app.post("/users", (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log("Hitting the post", req.body);
    // res.send('post got hit')
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

//dynamically getting user data and a route
app.get("/users/:id", (req,res) => {
    const id = req.params.id;
    const user = users[id]
    res.send(user);
})

app.get("/fruits", (req,res) => {
    res.send(['mango','orange','apple']);
})

app.get("/fruits/mangoes/fazli", (req, res) => {
    res.send("Yummy yummy tok marka fazli");
})

app.listen(port,()=>{
    console.log("listening to port", port);
})