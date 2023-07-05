import axios from "axios";
import appConfig from "../Utils/appConfig";
import VacationsModel from "../Models/VacationModel";
import FollowerModel from "../Models/FollowerModel";



class VacationsService  {

    public async getAllVacations():Promise <VacationsModel[]>{
        const response = await axios.get(appConfig.vacationsUrl);
        const vacations = response.data;
        return vacations
    }

    public async getVacationByCode(vacationCode:number):Promise <VacationsModel>{
         const response = await axios.get<VacationsModel>(appConfig.vacationByCodeUrl + vacationCode);
         const vacationByCode = response.data;
        
         return vacationByCode
    }

    public async getvacationForUser(id:number):Promise<VacationsModel[]>{
           const response = await axios.get<VacationsModel[]>(appConfig.getvacationForUser + id)
           const vacationsForUsers =response.data
           return vacationsForUsers
    }


    public async addVacation(vacation: VacationsModel): Promise<void> {
        const formData = new FormData()
      
    
        formData.append("destination", vacation.destination)
        formData.append("description", vacation.description)
        formData.append("startDate", vacation.startDate)
        formData.append("endDate", vacation.endDate)
        formData.append("price", vacation.price.toString())
        formData.append("image", vacation.image[0])
        const response = await axios.post(appConfig.addVacationUrl , formData)
        const addVacation = response.data

    }
    

    public async update(vacation:VacationsModel):Promise<VacationsModel>{
        
        const myForm = new FormData()
        myForm.append("vacationCode",vacation.vacationCode.toString());
        myForm.append("destination", vacation.destination);
        myForm.append("description", vacation.description);
        myForm.append("startDate", vacation.startDate);
        myForm.append("endDate", vacation.endDate);
        myForm.append("price", vacation.price.toString());
        myForm.append("imageFile",vacation.imageFile)
        myForm.append("image", vacation.image[0]);
    
    
        const response = await axios.put<VacationsModel>(appConfig.vacationsUrl+ vacation.vacationCode ,myForm)
        const updatedVacation = response.data
        console.log("updatedVacation"+ updatedVacation)
        return updatedVacation
    }

    public async deleteVacation(vacationCode:number):Promise<void> {
        await axios.delete(appConfig.vacationsUrl+vacationCode)
    }

}
const vacationsService = new VacationsService()
export default vacationsService