import cors from 'cors'
import express from 'express';
import { createServer } from 'http' ; 
import { StatusCodes } from 'http-status-codes';
import { Server } from 'socket.io';

import bullServerAdapter from './config/bullBoardConfig.js';
import connectDB from './config/dbConfig.js';
import { PORT } from './config/serverConfig.js';
import channelSocketHandler from './controllers/channelSocketController.js';
import messageSocketHandlers from './controllers/messageSocketController.js';
import { verifyEmailController } from './controllers/userController.js';
import apiRouter from './routes/apiRoutes.js' ;

const app = express();
const server = createServer(app) ; 
const io = new Server(server , {
  cors: {
    origin: '*'
  }
}) ; 

app.use(cors()) ; 
app.use(express.json()) ; 
app.use(express.urlencoded({extended: true})) ; 
app.use('/ui' , bullServerAdapter.getRouter()) ;
app.use('/api' , apiRouter) ; 
app.get('/verify/:token' , verifyEmailController) ; 


io.on('connection' ,(socket) => {
    console.log('Client connected ',socket.id);
  
    messageSocketHandlers(io , socket) ;
    channelSocketHandler(io , socket) ;  
})


app.get('/ping', (req, res) => {
  return res.status(StatusCodes.OK).json({ message: 'pong' });
});


server.listen(PORT, async () => {
  console.log('Server is running on port: ', PORT);
  connectDB() ; 
});


