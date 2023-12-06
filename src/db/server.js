const path = require("path");
const express = require("express");
const app = express();
app.use(express.json());
const port = 8080;
const publicDir = path.join(__dirname,`../../`,`public`);
const staticAssets = express.static(publicDir);
app.use(staticAssets); 

const todos = [];

app.post('/api/todo', (req,res) =>{
    todos.push(req.body)
    res.send(todos)
})

app.listen(port, ()=>{
    console.log(`listening on ${port}`)  
})