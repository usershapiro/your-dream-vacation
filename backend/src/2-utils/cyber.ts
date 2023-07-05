import { Request } from "express";
import jwt from "jsonwebtoken";
import UserModel from "../4-models/user-model";
import crypto from "crypto";

const jwtSecretKey = "JohnBryceFullStackCourse";

function getNewToken(user: UserModel): string {

    delete user.password;

    const container = { user };
    const options = { expiresIn: "3h" };
    const token = jwt.sign(container, jwtSecretKey, options);
    return token;
}

function verifyToken(request: Request): Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
        try {
            const header = request.header("authorization");
            if (!header) {
                resolve(false);
                return;
            }
            const token = header.substring(7);
            if (!token) {
                resolve(false);
                return;
            }
            jwt.verify(token, jwtSecretKey, err => {
                if (err) {
                    resolve(false);
                    return;
                }
                resolve(true);
            });
        }
        catch (err: any) {
            reject(err);
        }
    });
}

const salt = "MakeThingsGoRight"

//sha = secure hash algorithm
 function hash(plainText:string):string {
    if(!plainText) return null

 
    // const hashedText = crypto.createHash("sha512").update(plainText).digest("hex")

    //hash with salt
    const hashedText = crypto.createHmac("sha512",salt).update(plainText).digest("hex")
    
    return hashedText
}

async function isAdmin(request: Request): Promise<boolean> {
  

    const header = request.header("authorization");
    const token = header.substring(7);

    // Extract container from token:
    const container: any = jwt.decode(token);

    // Extract user: 
    const user: UserModel = container.user;

    return user.role === "admin"
}
export default {
    getNewToken,
    verifyToken,
    hash,
    isAdmin
};


