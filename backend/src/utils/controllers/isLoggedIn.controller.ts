import {NextFunction, Request, Response} from 'express';
import {JwtPayload, verify, VerifyErrors} from 'jsonwebtoken';
import {Status} from '../interfaces/Status';
import {Profile} from '../interfaces/Profile';
import {IncomingHttpHeaders} from 'http';

export function isLoggedIn(request: Request, response: Response, next: NextFunction): Response | void {

    let status: Status = {status: 400, message: 'Please login', data: null};

    const sessionProfile = (request: Request): Profile | undefined => request.session?.profile ?? undefined;
    console.log(request.sessionID)

    const signature = (request: Request): string => request.session?.signature ?? 'no signature'

    const isSessionActive = (isProfileActive: Profile | undefined): boolean => !!isProfileActive;

   /* const getJwtTokenFromHeader = (headers: IncomingHttpHeaders): string | undefined => {

        return headers['authorization']
    };*/


    const unverifiedJwtToken: string | undefined = request.headers['authorization'];


   /* const isJwtValid: JwtPayload | string | boolean = unverifiedJwtToken
      ? verify(*/

    //
    // const isJwtValid: boolean|void = unverifiedJwtToken
    //   ? verify(
    //         unverifiedJwtToken,
    //         signature(request),
    //         {maxAge: "3hr"},
    //
    //     )
    //   : false;

 /*   const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
        if (unverifiedJwtToken === undefined) {
            return false
        }
        const result: unknown = verify(
            unverifiedJwtToken,
            signature(request),
            {maxAge: '3hr'},
            (error: VerifyErrors | null): boolean => error ? false : true
        ) as unknown

      : false;


    }*/


     const isJwtValid = (unverifiedJwtToken: string | undefined): boolean => {
         if (unverifiedJwtToken === undefined) {
             return false
         }
         const result: unknown = verify(
             unverifiedJwtToken,
             signature(request),
             {maxAge: '3hr'},
             (error: VerifyErrors | null): boolean => error ? false : true
         ) as unknown


         return result as boolean

     }



    return isJwtValid(unverifiedJwtToken) && isSessionActive(sessionProfile(request)) ? next() : response.json(status);

}

