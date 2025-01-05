import express from 'express';

import { getMessages, getPresignedURLFromAWS } from '../../controllers/messageController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js' ;


const router = express.Router() ;

router.get('/pre-signed-url' , isAuthenticated , getPresignedURLFromAWS) ; 
router.get(
    '/:channelId' 
    , isAuthenticated 
    ,getMessages) ; 


export default router ; 