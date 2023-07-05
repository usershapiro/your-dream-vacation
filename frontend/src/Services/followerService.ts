import axios from "axios";
import FollowerModel from "../Models/FollowerModel";
import appConfig from "../Utils/appConfig";
import { Console } from "console";

class FollowerService {

    public async addFollower(id:number,vacationCode:number) :Promise<FollowerModel> {
        const response = await axios.post<FollowerModel>(`${appConfig.addFollowUrl}${id}/${vacationCode}`);

        const follower= response.data;

        return follower
    }
    
    public async followersNumberPerVacation(vacationCode:number):Promise<number> {
        const response = await axios.get(appConfig.followersNumber+vacationCode)
        const followersNumber = response.data.count
        console.log("followersNumber  "+followersNumber)
        
         return followersNumber
    }

    public async followersnumbersForAllVactions() {
        const response = await axios.get(appConfig.getFolowersNumberForAllVacations)
        const followersForAllVacations = response.data;
        console.log(followersForAllVacations);
        return followersForAllVacations;
    }

    public async removeFollower(id:number,vacationCode:number):Promise<void> {
        await axios.delete(`${appConfig.removefollowerUrl}${id}/${vacationCode}`);
    }

    
}

const followerService = new FollowerService();

export default followerService;