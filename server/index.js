const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users =  require('./controllers/users');
//const Calories =  require('./controllers/Calories');
//const Exercises =  require('./controllers/Exercises');
//const FoodItems =  require('./controllers/FoodItems');

const path = require('path');

const app = express();

//app.use(bodyParser.json());

//app.use(cors());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "../No Framework")));
//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);

const port = 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
//app.listen(port, () => console.log(`Server started on port ${port}!`));
