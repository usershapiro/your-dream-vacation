import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import FollowerModel from "../4-models/followers-model";
import { ResourceNotFoundError } from "../4-models/error-model";


async function addFollwoer (id:number,vacationCode:number) :Promise<FollowerModel> {
        // const sql= `INSERT INTO followers VALUES (?, ?);`
       const sql =
       `INSERT INTO followers (id, vacationCode)
       SELECT users.id , vacations.vacationCode
       FROM users
       JOIN vacations ON users.id = ?
       WHERE vacations.vacationCode = ?;`
     
    
        const addedFollower = await dal.execute(sql,[id ,vacationCode]);
        console.log(addedFollower)
        return addedFollower
    
    }
    async function removeFollower(id: number,vacationCode:number): Promise<void> {
        
        const sql = `DELETE FROM followers
                     WHERE id = ? AND vacationCode = ?`
                     const info:OkPacket =await dal.execute(sql,[id ,vacationCode])
                     const values = id + vacationCode
                     if(info.affectedRows ===0) throw new ResourceNotFoundError(values)

    }


async function getFollowersNumberPerVacation(vacationCode:number) :Promise<number> {
   const sql = `SELECT COUNT(*) AS count FROM followers 
   WHERE vacationCode = ?;`

   const followersNumber = await dal.execute(sql,[vacationCode])
   return followersNumber[0]

}

async function getFolowersNumbersForAllVacations() {
    // const sql = ` SELECT vacationCode, COUNT(id) AS count FROM followers GROUP BY vacationCode;`;
    const sql = `SELECT v.vacationCode, v.destination, COUNT(f.id) AS count
    FROM followers f
    INNER JOIN vacations v ON f.vacationCode = v.vacationCode
    GROUP BY v.vacationCode, v.destination;`
    const followers = await dal.execute(sql);
    console.log(followers)
    return followers;
}




export default 
{
    addFollwoer,
    getFollowersNumberPerVacation,
    removeFollower,
    getFolowersNumbersForAllVacations
    
    
};