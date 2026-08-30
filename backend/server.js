const express = require('express')
const app = express();

app.get('/' , (req,res) => {
    res.send("server is working")
})
app.get('/pookie',(req,res) => {
    res.send("Pookie Murali")
})
app.get('/pookie/murali',(req,res) => {
    res.send("Pookie kittu")
})
app.listen(5050, () => {
    console.log('Server Running')
})
