import { StatusCodes } from "http-status-codes";

import { addChannelToWorkspaceService, addMemberToWorkspaceService, createWorkspaceService, deleteWorkspaceService, getWorkspaceByJoinCodeService, getWorkspaceService, getWorkSpaceUserIsPartOfService, joinWorkspaceService, resetWorkspaceJoinCodeService, updateWorkspaceService } from "../services/workspaceService.js";
import { customErrorResponse, internalErrorResponse, successResponse } from "../utils/common/responseObjects.js";

export const createWorkspaceController = async (req,res) => {
    try {
        const response = await createWorkspaceService({
            ...req.body ,
            owner: req.user ,
        }) ;

        return res.status(StatusCodes.CREATED).json(successResponse(response , 'Workspace created successfully' )) ;
    } catch (error) {
        console.log(error);

        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ; 
        
    }
}

export const getWorkspacesUserIsMemberOfController= async (req , res) => {
    try {
        const response = await getWorkSpaceUserIsPartOfService(req.user) ;
        return res.status(StatusCodes.OK)
                  .json(successResponse(response , 'Workspaces fetched successfully')) ;
    } catch (error) {
        console.log(error);
        if(error.statusCode){
            return res.status(error.statusCode).json(customErrorResponse(error))
        }
        
        return res
                  .status(StatusCodes.INTERNAL_SERVER_ERROR)
                  .json(internalErrorResponse(error)) ; 
    }
}

export const deleteWorkspaceController = async (req , res) => {
    try {
        const response = await deleteWorkspaceService(
          req.params.workspaceId,
          req.user
        );
        return res
          .status(StatusCodes.OK)
          .json(successResponse(response, 'Workspace deleted successfully'));
      } catch (error) {
        console.log(error);
        if (error.statusCode) {
          return res.status(error.statusCode).json(customErrorResponse(error));
        }
    
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(internalErrorResponse(error));
      }
}

export const getWorkspaceController = async (req,res) => {
    try {
        console.log('WorkspaceId ',req.params);
        
        const response = await getWorkspaceService(
            req.params.workspaceId,
            req.user
          );
          return res
            .status(StatusCodes.OK)
            .json(successResponse(response, 'Workspace fetched successfully'));
    } catch (error) {
        console.log(error);
        if (error.statusCode) {
          return res.status(error.statusCode).json(customErrorResponse(error));
        }
    
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(internalErrorResponse(error));
    }
}

export const getWorkspacebyJoinCodeController = async (req,res) => {
    try {
        const response = await getWorkspaceByJoinCodeService(
            req.params.joinCode ,
            req.user
          );
          return res
            .status(StatusCodes.OK)
            .json(successResponse(response, 'Workspace fetched successfully'));
    } catch (error) {
        console.log('Get workspace by joincode controller error', error);
        if (error.statusCode) {
          return res.status(error.statusCode).json(customErrorResponse(error));
        }
    
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(internalErrorResponse(error));
    }
}

export const updateWorkspaceController = async (req,res) => {
    try {
        const updatedWorkspace = await updateWorkspaceService(req.params.workspaceId ,req.body , req.user) ;

        return res.status(StatusCodes.OK).json(successResponse(updatedWorkspace , 'Workspace updated successfully')) ;
    } catch (error) {
        console.log('update workspace controller error', error);
        if (error.statusCode) {
          return res.status(error.statusCode).json(customErrorResponse(error));
        }
    
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(internalErrorResponse(error));
    }
}

export const addMemberToWorkspaceController = async (req , res) => {
    try {
        const response = await addMemberToWorkspaceService(
            req.params.workspaceId ,
            req.body.memberId , 
            req.body.role || 'member' ,
            req.user
        ) ;

        return res.status(StatusCodes.OK).json(successResponse(response , 'Member added to workspace successfully')) ; 
    } catch (error) {
        console.log('add member to  workspace controller error', error);
        if (error.statusCode) {
          return res.status(error.statusCode).json(customErrorResponse(error));
        }
    
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(internalErrorResponse(error));
    }
}

export const addChannelToWorkspaceController = async (req , res) => {
    try {
        const response = await addChannelToWorkspaceService(
            req.params.workspaceId ,
            req.body.channelName ,
            req.user
        ) ;

        return res
                .status(StatusCodes.OK)
                .json(
                successResponse(response, 'Channel added to workspace successfully')
                );
    } catch (error) {
        console.log('add channel to  workspace controller error', error);
        if (error.statusCode) {
          return res.status(error.statusCode).json(customErrorResponse(error));
        }
    
        return res
          .status(StatusCodes.INTERNAL_SERVER_ERROR)
          .json(internalErrorResponse(error));
    }
}

export const resetJoinCodeControllerController = async (req , res) => {
  try {
    const response = await resetWorkspaceJoinCodeService(
        req.params.workspaceId ,
        req.user
    ) ;

    return res
            .status(StatusCodes.OK)
            .json(
            successResponse(response, 'Join code reset successfully')
            );
} catch (error) {
    console.log('reset join code controller error', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
}
}

export const joinWorkspaceController = async (req, res) => {
  try {
    const response = await joinWorkspaceService(
      req.params.workspaceId,
      req.body.joinCode,
      req.user
    );
    return res
      .status(StatusCodes.OK)
      .json(successResponse(response, 'Joined workspace successfully'));
  } catch (error) {
    console.log('join workspace controller error', error);
    if (error.statusCode) {
      return res.status(error.statusCode).json(customErrorResponse(error));
    }

    return res
      .status(StatusCodes.INTERNAL_SERVER_ERROR)
      .json(internalErrorResponse(error));
  }
};