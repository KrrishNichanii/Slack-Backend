import { APP_LINK, MAIL_ID } from "../../config/serverConfig.js";

export const workspaceJoinMail = function (workspace) {
    return {
        from: MAIL_ID ,
        subject: 'You have been added to a workspace' ,
        text:`Congratulations! You have been added to the workspace ${workspace.name}`
    }
}

export const verifyEmailMail = function (verifcationToken) {
    return {
        from : MAIL_ID , 
        subject: 'Verification of email' ,
        text: `Welcome to the app. Please verify your email by clicking on the link below:
              ${APP_LINK}/verify/${verifcationToken}
          `
    }
}

export const sendJoinCodeEmail = function (joinCode , workspaceName) {
    return {
        from: MAIL_ID ,
        subject: 'Join Code' ,
        text:`${joinCode} . This is the join code for joining ${workspaceName}`
    }
}