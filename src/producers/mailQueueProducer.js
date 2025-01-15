import '../processors/mailProcessor.js';
import mailer from '../config/mailConfig.js'
import mailQueue from "../queues/mailQueue.js"

export const addEmailtoMailQueue = async (emailData) => {
       try { 
            await mailer.sendMail(emailData) ; 
            console.log('Email send successfully'); 
       } catch (error) {
            console.log('Add email to mail queue error ',error);
            
       }
}