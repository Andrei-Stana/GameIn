export{}

const express = require('express');
const cors = require('cors');

const app = express();

const port : number = 3000

app.get('/', (req, res) => {
    res.json("Hello World")
})

app.listen(3000, ()=> console.log(`Listening on port ${port}`))