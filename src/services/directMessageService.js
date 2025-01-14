import directMessageRepository from "../repositories/directMessage.js";
import workspaceRepository from "../repositories/workspaceRepository.js";

export const getDirectMessageChannelIdService = async (senderId , receiverId , workspaceId) => {
    try {
        let channelId =  await  directMessageRepository.getChannelId(senderId , receiverId) ; 

        if(!channelId){ // make a new channel if it  doesnt exist . This happens when user1 DMs user2 for the first time
        //    console.log('Creating new direct Message ');
            const directMessage = await workspaceRepository.addDirectMessageChannelToWorkspace(senderId , receiverId , workspaceId) ;
           channelId = directMessage?.channel ; 
        }

        return channelId ; 
    } catch (error) {
        console.log('Get direct Message channelId service error ',error);
        throw error ; 
    }
}