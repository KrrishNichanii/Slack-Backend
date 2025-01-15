import { StatusCodes } from "http-status-codes";

import { getUserByIdService, signInService, signUpService, verifyTokenService } from "../services/userService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjects.js";

export  const signUp = async (req , res) => {
    try {
        // console.log('R ',req.body);
        
        const user = await signUpService(req.body) ; 
        
        return res.status(StatusCodes.CREATED).json(successResponse(user , 'User created successfully')) ; 
    } catch (error) {
        console.log("User controller error ",error);
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ; 
    }
}

export const signIn = async (req , res) => {
    try {
        const response = await signInService(req.body) ;
        return res.status(StatusCodes.OK).json(successResponse(response, 'User signed in successfully')) ;
    } catch (error) {
        console.log('User controller error ',error);
        
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ;

    }
}

export const verifyEmailController = async (req , res) => {
    try {
        const response = await verifyTokenService(req.params.token) ;
        return res.status(StatusCodes.OK).json(successResponse(response, 'Email verified successfully')) ;
    } catch (error) {
        console.log('Verify email  controller error ',error);
        
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ;

    }
}

export const getUserByIdController = async (req , res) => {
    try {
        console.log('E ',req.params);
        
        const response = await getUserByIdService(req.params?.userId) ; 
        return res.status(StatusCodes.OK).json(successResponse(response, 'User fetched successfully')) ;
    } catch (error) {
        console.log('Get user by id  controller error ',error);
        
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ;
    }
}
