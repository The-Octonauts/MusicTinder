import {Request, Response} from "express";
// import MailComposer from "nodemailer/lib/mail-composer";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {setActivationToken, setHash} from '../../utils/auth.utils';


/*
const mailgun = require("mailgun.js")
*/

import formData from 'form-data'
import Mailgun from 'mailgun.js';
import Client from 'mailgun.js/dist/lib/client';
// const mailgun = new Mailgun(formData);


export async function signupProfileController (request: Request, response: Response): Promise<Response|undefined> {
    try {
        const mailgun: Mailgun = new Mailgun(formData)
        const mailgunClient: Client = mailgun.client({username: "api", key: <string>process.env.MAILGUN_API_KEY})

        const {profileEmail, profilePassword} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const profilePhotoUrl =null
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}/activation/${profileActivationToken}`
        console.log(profileActivationToken);

        const messages = `<h2>Welcome to PodPal</h2>
        <p>select your favorite podcast</p>
        <p><a href="${basePath}">${basePath}</a></p>`



        const mailgunMessage = {
            from:`Mailgun Sandbox<postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: [profileEmail],
            subject: "Testing some Mailgun ",
            html: "<h1>message</h1>"

        }
        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileEmail,
            profileHash,
            profilePhotoId: null,
            profilePhotoUrl,
            profileBio: null,
        };
        await insertProfile (profile)
// console.log(process.env.MAILGUN_DOMAIN)
//         console.log(mailgunMessage)


        await mailgunClient.messages.create(<string>process.env.MAILGUN_DOMAIN, mailgunMessage)

        // const emailComposer: MailComposer = new MailComposer(mailgunMessage)
        //
        // emailComposer.compile().build((error:any, message: Buffer)=>{
        //     const mg = mailgun ({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
        //     // const mg = mailgun.client({username: 'api', key: process.env.MAILGUN_API_KEY})
        //     console.log(message.toString("ascii"))
        //     const compiledEmail = {
        //         to: profileEmail,
        //         message: message.toString("ascii")
        //     }
            const status: Status = {
                status: 200,
                message:"Profile Successfully created check your Email.",
                data: null
            };
        //     mg.messages().sendMime(compiledEmail, (sendError:any, body:any)=> {
        //         if (sendError){
        //             return response.json({status: 418, data: null, message: "Error Sending Email"})
        //         }
        //         return response.json(status);
        //     })
        // })

        return response.json(status)

    } catch (error) {



        const status: Status = {
            status: 500,
            // @ts-ignore
            message: error.message,
            data: null
        };
        console.log(error)
        return response.json(status);
    }
}