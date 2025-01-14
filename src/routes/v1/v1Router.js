import express from 'express';

import channelRouter from './channels.js' ;
import memberRouter from './members.js' ;
import messageRouter from './messages.js';
import userRouter from './users.js' ;
import workspaceRouter from './workspaces.js' ;
import directMessageRouter from './directMessages.js' ;


const router = express.Router() ;

router.use('/users' , userRouter) ; 
router.use('/workspaces' , workspaceRouter) ; 
router.use('/channels',channelRouter) ;
router.use('/members',memberRouter) ;
router.use('/messages', messageRouter);
router.use('/direct-messages' , directMessageRouter) ;

export default router ; 