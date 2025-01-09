import User from '../schema/user.js'
import crudRepository from './crudRepository.js';

const userRepository = {
    ...crudRepository(User) ,
    signUpUser : async function (data) {
        const newUser = new User({...data,recentWorkspaces:[]}) ; 
        await newUser.save() ; 
        return newUser ; 
    } ,
    getByEmail: async function (email) {
        const user = await User.findOne({ email }) ; 
        return user ; 
    } ,

    getByUsername: async function (username) {
        const user = await User.findOne({ username }).select('-password') ; 
        return user ; 
    } , 
    getByToken: async function (token) {
        const user = await User.findOne({verificationToken: token}) ;
        return user ; 
    } , 
    addRecentWorkspace: async function (userId , workspaceId){
        const user = await User.findById(userId) ; 
        if(user.recentWorkspaces.includes(workspaceId)){
         const index = user.recentWorkspaces.indexOf(workspaceId) ; 
         user.recentWorkspaces.splice(index , 1) ; //remove 1 element at found index
        }
        user.recentWorkspaces.push(workspaceId) ;
        if(user.recentWorkspaces.length > 5) user.recentWorkspaces.shift() ; 
        await user.save() ; 
    } , 

    getRecentWorkspaces: async function (userId) {
        const user = await User.findById(userId).populate('recentWorkspaces') ;
        const workspaces = user.recentWorkspaces ; 
        workspaces.reverse() ; 
        return workspaces ; 
    }
} ;

export default userRepository ; 
 