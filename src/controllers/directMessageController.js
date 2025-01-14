import { StatusCodes } from "http-status-codes";
import { getDirectMessageChannelIdService } from "../services/directMessageService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjects.js";


export const getDirectMessageChannelIdController = async (req , res) => {
    try {
        const { receiverId , workspaceId } = req.params ; 
        const senderId = req.user ; 
        const response = await getDirectMessageChannelIdService(senderId , receiverId , workspaceId) ; 
        return res.status(StatusCodes.OK).json(successResponse(response, 'fetched direct message channelId successfully')) ;
    } catch (error) {
        console.log('Get direct message channelId controller error ',error);
        
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ;
    }
}