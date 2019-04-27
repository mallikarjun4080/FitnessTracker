const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const users =  require('./controllers/users');
const Calories =  require('./controllers/Calories');
const Dashboard =  require('./controllers/Dashboard');
const Exercises =  require('./controllers/Exercises');
const FoodItems =  require('./controllers/FoodItems');
const DailyActivities=require('./controllers//DailyActivities');
const DietPlans=require('./controllers/DietPlans');
const FitnessGoals=require('./controllers/FitnessGoals');
const Workouts=require('./controllers/Workouts');
const Profile=require('./controllers/Profiles');


const path = require('path');
//require('dotenv').config({ path: path.resolve(__dirname, '/./../.env') })
const app = express();

// app.use(bodyParser.json());

app.use(cors());


app.use(express.urlencoded({ extended: false }));
app.use(express.json());
//app.use(express.static(path.join(__dirname, "../No Framework")));
//app.get('/', (req, res) => res.send('Hello World!'));
app.use('/users', users);
app.use('/api/Calories',Calories);
app.use('/api/Dashboard',Dashboard);
app.use('/api/Exercise', Exercises);
app.use('/api/FoodItems', FoodItems);
app.use('/api/DailyActivities', DailyActivities);
app.use('/api/DietPlans', DietPlans);
app.use('/api/FitnessGoals', FitnessGoals);
app.use('/api/Workouts', Workouts);
app.use('/api/Profile', Profile);

const port = 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
//app.listen(port, () => console.log(`Server started on port ${port}!`));
