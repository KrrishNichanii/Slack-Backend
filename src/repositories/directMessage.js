import DirectMessage from "../schema/DirectMessages.js"


const directMessageRepository = {
    getChannelId: async (senderId , receiverId) => {
        const directMessage = await DirectMessage.findOne({
            $or: [{ user1: senderId , user2: receiverId }, { user1: receiverId , user2: senderId }]
        });
        return directMessage?.channel;
    } , 

    create : async (user1Id , user2Id , channelId) => {
        const directMessage = await DirectMessage.create({
            user1: user1Id , 
            user2: user2Id , 
            channel: channelId , 
        }) ; 

        return directMessage ; 
    }
};

export default directMessageRepository ; 