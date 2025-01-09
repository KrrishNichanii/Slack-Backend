import express from 'express';

import { addChannelToWorkspaceController, addMemberToWorkspaceController, createWorkspaceController, deleteWorkspaceController, getRecentWorkspacesController, getWorkspacebyJoinCodeController, getWorkspaceByNameController, getWorkspaceController, getWorkspacesUserIsMemberOfController, joinWorkspaceController, resetJoinCodeControllerController, sendUserMailToJoinWorkspaceController, updateWorkspaceController } from '../../controllers/workspaceController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js' 
import { addChannelToWorkspaceSchema, addMemberToWorkspaceSchema, createWorkspaceSchema} from '../../validators/workspaceSchema.js';
import { validate } from '../../validators/zodValidator.js';

const router = express.Router() ;

router.post('/' 
    , isAuthenticated 
    , validate(createWorkspaceSchema) 
    ,createWorkspaceController
) ; 

router.get('/',isAuthenticated ,getWorkspacesUserIsMemberOfController) ;
router.delete('/:workspaceId',isAuthenticated ,deleteWorkspaceController) ;
router.get('/recent-workspaces',isAuthenticated ,getRecentWorkspacesController) ;
router.get('/:workspaceId',isAuthenticated ,getWorkspaceController) ;
router.post('/name' , isAuthenticated , getWorkspaceByNameController) ; 

router.get(
    '/join/:joinCode',
    isAuthenticated,
    getWorkspacebyJoinCodeController
  );
  
router.post('/send-join-code' , isAuthenticated , sendUserMailToJoinWorkspaceController) ; 

router.put(
'/:workspaceId/join',
isAuthenticated,
joinWorkspaceController
);

router.put('/:workspaceId', isAuthenticated, updateWorkspaceController);

router.put(
'/:workspaceId/members',
isAuthenticated,
validate(addMemberToWorkspaceSchema),
addMemberToWorkspaceController
);


router.put(
'/:workspaceId/channels',
isAuthenticated,
validate(addChannelToWorkspaceSchema),
addChannelToWorkspaceController
);

router.put(
'/:workspaceId/joinCode/reset',
isAuthenticated,
resetJoinCodeControllerController
);


export default router ; 