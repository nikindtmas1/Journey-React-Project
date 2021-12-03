const express = require('express');
const cors = require('cors');

// import { initializeApp } from "firebase/app";

const app = express();
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

const portConfig = require('./config/config');
const mongooseConfig = require('./config/configMongoose');
const routes = require('./routes/routes');

// const firebaseConfig = {
//     apiKey: "AIzaSyAP6ncGJ9eFKpfmuEn0GIHXME2W46OYyCU",
//     authDomain: "my-server-journey.firebaseapp.com",
//     projectId: "my-server-journey",
//     storageBucket: "my-server-journey.appspot.com",
//     messagingSenderId: "984395761011",
//     appId: "1:984395761011:web:44a79177d877ee19e1b106"
//   };
// app.use((req, res, next) => {

//     res.setHeader('Access-Control-Allow-Origin', '*');

//     res.setHeader('Access-Control-Allow-Methods',
//         'OPTIONS, GET, POST, PUT, PATCH, DELETE');

//     res.setHeader('Access-Control-Allow-Headers',

//         '*');

//     next();

// });

// const app = initializeApp(firebaseConfig);
app.use(cors());

app.use(routes)
// routes(app);
mongooseConfig(app);


app.listen(portConfig.development.PORT, () => console.log(`Server runing on port: ${portConfig.development.PORT}...`))