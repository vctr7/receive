const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const app = express();
const port = process.env.PORT || 8795;


const data = require('./parfum.json');

// app.use(cors);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


// app.get('/api/hello', (req, res) => {
//     res.send({message: 'Hello Express!'});
// }); 
app.get('/api/parfum', (req, res) => {
    res.json(data);
});

app.listen(port, () => console.log(`Listening on port ${port}`));