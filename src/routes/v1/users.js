import express from 'express';

import { getUserByIdController, signIn, signUp} from '../../controllers/userController.js';
import { isAuthenticated } from '../../middlewares/authMiddleware.js';
import { userSignInSchema,userSignUpSchema  } from '../../validators/userSchema.js';
import { validate } from '../../validators/zodValidator.js';

const router = express.Router() ;

router.post('/signup' ,validate(userSignUpSchema) , signUp) ; 
router.post('/signin' ,validate(userSignInSchema) , signIn) ;
router.get('/:userId' , isAuthenticated , getUserByIdController) ; 
export default router ; 