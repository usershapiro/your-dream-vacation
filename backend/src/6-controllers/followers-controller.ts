import express, { Request, Response,NextFunction } from "express";
import followersLogic from "../5-logic/followers-logic";


const router = express.Router();

//adding follower
router.post("/followers/:id/:vacationcode", async (request: Request, response: Response, next: NextFunction) => {
  try {
    const id = parseInt(request.params.id);
    const vacationCode = parseInt(request.params.vacationcode);

    if (isNaN(id) || isNaN(vacationCode)) {
      throw new Error("Invalid parameters");
    }

    const addedFollower = await followersLogic.addFollwoer(id, vacationCode);
    response.status(201).json(addedFollower);
  } catch (err) {
    next(err);
  }
});

//count per vacation's followers
router.get("/followersNumber/:vacationCode" ,async(request: Request, response: Response, next: NextFunction) => {
    const vacationCode = +request.params.vacationCode
    const followersNumber =  await followersLogic.getFollowersNumberPerVacation(vacationCode)
    response.json(followersNumber)
})

//removing followers
//listen on http://localhost:3001/api/removeFollower/:id/:vacationCode
router.delete("/removeFollower/:id/:vacationCode",async(request:Request , response:Response , next:NextFunction)=>{
  try{
    const id = parseInt(request.params.id);
    const vacationCode = parseInt(request.params.vacationCode);

    if (isNaN(id) || isNaN(vacationCode)) {
      throw new Error("Invalid parameters");
    }

       await followersLogic.removeFollower(id,vacationCode)
       response.json(204)
       
  }
  catch(err:any){
     next(err)
  }
 })

 //getting followers numbers for all vacations
router.get("/followersForAllVacations", 
 async (request: Request, response: Response, next: NextFunction) => {
    try {
        const followers = await followersLogic.getFolowersNumbersForAllVacations()
        response.json(followers);
    }
    catch (err: any) {
        next(err);
    }
});

export default router;