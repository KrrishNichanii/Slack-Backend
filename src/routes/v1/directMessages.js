import express from 'express';

import { getDirectMessageChannelIdController } from '../../controllers/directMessageController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js' ;


const router = express.Router() ;


router.get('/:receiverId/:workspaceId' , isAuthenticated , getDirectMessageChannelIdController) ; 

export default router ; 