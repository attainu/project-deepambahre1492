const express = require('express');
const bodyParser = require('body-parser');
const userRoute = require("./routes/user")
const productRoute = require("./routes/product")
const auth = require("./middleware/auth");
const path = require("path");
require("./config/database");
let app = express();
const cors = require("cors");

//Setup CORS Error Handler
app.use(cors());
//enable CORS
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Authorization, Origin, X-Requested-With, Content-Type, Accept");
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');  
    next();
});

//Middlewares

app.use(bodyParser.json());

app.use("/",userRoute);
app.use("/api",auth.isUserLogged,productRoute);


//Services static assets if in production
if (process.env.NODE_ENV === 'production') {
    //set static folder
    app.use(express.static('client/build'));
  
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
  }


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});