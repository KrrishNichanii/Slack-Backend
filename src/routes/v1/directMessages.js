import express from 'express';

import { isAuthenticated } from '../../middlewares/authMiddleware.js' ;
import { getDirectMessageChannelIdController } from '../../controllers/directMessageController.js';


const router = express.Router() ;


router.get('/:receiverId/:workspaceId' , isAuthenticated , getDirectMessageChannelIdController) ; 

export default router ; 