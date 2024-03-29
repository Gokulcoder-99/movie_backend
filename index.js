const express = require('express');
const app = express();
const cors = require('cors')
const env = require('dotenv');
const connectDB = require('./database/connectDB');
const authroute = require('./route/authroute');
const vaildCheck = require('./middleware/vaildCheck');
const adminRoute = require('./route/adminroute');
const userRoute = require('./route/userroute');



app.use(express.json());
env.config();
app.use(cors({
    origin: 'http://localhost:5173', 
    credentials: true 
  }));

app.use('/api/auth',authroute)
app.use('/api/admin',vaildCheck,adminRoute);
app.use('/api/user',userRoute);

const port = process.env.PORT
const server = async()=>{
    try{
       await connectDB()
        app.listen(port,()=>{
            console.log(`${port} is connected`)
        })
    }catch(err){
            console.log(err,'server is not running')
    }
}
server();
