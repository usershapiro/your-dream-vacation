import express, { Request, Response, NextFunction } from "express";
import blockNonLoggedIn from "../3-middleware/block-non-logged-in";
import usersLogic from "../5-logic/users-logic";
import UserModel from "../4-models/user-model";


const router = express.Router();

router.get("/users", 
// [blockNonLoggedIn],
 async (request: Request, response: Response, next: NextFunction) => {
    try {
        const users = await usersLogic.getAllUsers ();
        response.json(users);
    }
    catch (err: any) {
        next(err);
    }
});


router.post("/users", async (request: Request, response: Response, next: NextFunction) => {
    try {
        const user = new UserModel(request.body);
        const addedUser = await usersLogic.addUser(user);
        response.status(201).json(addedUser);
    }
    catch (err: any) {
        next(err);
    }
});
export default router;