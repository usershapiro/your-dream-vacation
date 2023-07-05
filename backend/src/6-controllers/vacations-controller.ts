import express, { Request, Response, NextFunction } from "express";
import blockNonLoggedIn from "../3-middleware/block-non-logged-in";
import vacationsLogic from "../5-logic/vacations-logic";
import VacationsModel from "../4-models/vacations-model";
import blockNonAdmin from "../3-middleware/block-non-admin";
import path from "path";



const router = express.Router();

//get all vacations
router.get("/vacations", 
 [blockNonLoggedIn],
 async (request: Request, response: Response, next: NextFunction) => {
    try {
        const vacations = await vacationsLogic.getAllVacations ();
        response.json(vacations);
    }
    catch (err: any) {
        next(err);
    }
});

//get vacation by code
router.get("/vacations-by-code/:vacationCode", 

 async (request: Request, response: Response, next: NextFunction) => {
    try {
        const vacationCode = + request.params.vacationCode
        const vacation = await vacationsLogic.getVacationByCode(vacationCode);
        response.json(vacation);
    }
    catch (err: any) {
        next(err);
    }
});

//add vacation
router.post("/vacations",
[blockNonAdmin],
async(request: Request, response: Response, next: NextFunction)=>{
  try{

     // Take uploaded file, set it to the body:
     request.body.image = request.files?.image;

    const vacation= new VacationsModel(request.body);
    const addedVacation = await vacationsLogic.addVaction(vacation);
    response.status(201).json(addedVacation);
  }
  catch(err){
    next(err)
  }
})

// get ONE image from fs

router.get("/vacations/images/:imageFile", async (request: Request, response: Response,next: NextFunction)=>{
  try{
      let imagename= request.params?.imageFile
          const file = path.join(__dirname,"..", "1-assets", "images" , imagename) 
          response.sendFile(file)
  }catch(err:any){
      next(err)
  }
})


//update vacation
router.put("/vacations/:vacationCode([0-9]+)" ,async(request: Request, response: Response,next: NextFunction)=>{
  try{
      request.body.image = request.files?.image
      request.body.vacationCode = +request.params.vacationCode

      const vacationToUpdate = new VacationsModel(request.body)
      const updatedVacation = await vacationsLogic.updateVacation(vacationToUpdate)
      
      response.status(201).json(updatedVacation)
  }catch(err:any){
      next(err)
  }
})

//get vacation for user
router.get("/getVacationsForUser/:id([0-9]+)",  async(request: Request, response: Response,next: NextFunction)=>{
  try{
    
    const id = +request.params.id
    const vacationsForUser= await vacationsLogic.getVacationsForUser(id)
    response.json(vacationsForUser)
}catch(err:any){
    next(err)
}
})


//delete vacation
router.delete("/vacations/:vacationCode", [blockNonLoggedIn],async(request:Request , response:Response , next:NextFunction)=>{
  try{
    const vacationCode = +(request.params.vacationCode);

       await vacationsLogic.deleteVacation(vacationCode)
       response.json(204)
       
  }
  catch(err:any){
     next(err)
  }
 })

export default router;