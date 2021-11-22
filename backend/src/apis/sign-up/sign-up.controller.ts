import {Request, Response} from "express";
import MailComposer from "nodemailer/lib/mail-composer";
import {Status} from "../../utils/interfaces/Status";
import {Profile} from "../../utils/interfaces/Profile";
import {insertProfile} from "../../utils/profile/insertProfile";
import {setActivationToken, setHash} from '../../utils/auth.utils';


const mailgun = require("mailgun-js")




export async function signupProfileController (request: Request, response: Response): Promise<Response|undefined> {
    try {
        const {profileId, profileEmail, profilePhotoId, profilePassword} = request.body;
        const profileHash = await setHash(profilePassword);
        const profileActivationToken = setActivationToken();
        const profilePhotoUrl = "😀"
        const basePath = `${request.protocol}://${request.get('host')}${request.originalUrl}activation/${profileActivationToken}`
        console.log(profileActivationToken);

        const message = `<h2>Welcome to PodPal</h2>
        <p>select your favorite podcast</p>
        <p><a href="${basePath}">${basePath}</a></p>`



        const mailgunMessage = {
            from:`Mailgun Sandbox<postmaster@${process.env.MAILGUN_DOMAIN}>`,
            to: profileEmail,
            subject: "One step closer to PodPal",
            text: 'Test email text.',
            html: message

        }
        const profile: Profile = {
            profileId: null,
            profileActivationToken,
            profileEmail,
            profileHash,
            profilePhotoId,
            profilePhotoUrl
        };
        await insertProfile (profile)
        const emailComposer: MailComposer = new MailComposer(mailgunMessage)

        emailComposer.compile().build((error:any, message: Buffer)=>{
            const mg = mailgun ({apiKey: process.env.MAILGUN_API_KEY, domain: process.env.MAILGUN_DOMAIN});
            console.log(message.toString("ascii"))
            const compiledEmail = {
                to: profileEmail,
                message: message.toString("ascii")
            }
            const status: Status = {
                status: 200,
                message:"Profile Successfully created check your Email.",
                data: null
            };
            mg.messages().sendMime(compiledEmail, (sendError:any, body:any)=> {
                if (sendError){
                    return response.json({status: 418, data: null, message: "Error Sending Email"})
                }
                return response.json(status);
            })
        })
    } catch (error) {
        const status: Status = {
            status: 500,
            // @ts-ignore
            message: error.message,
            data: null
        };
        return response.json(status);
    }
}