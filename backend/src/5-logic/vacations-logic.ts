import { OkPacket } from "mysql";
import dal from "../2-utils/dal";
import VacationsModel from "../4-models/vacations-model";
import { ResourceNotFoundError, ValidationError } from "../4-models/error-model";
import { v4 as uuid } from "uuid"; // v4 function changed to uuid name.
import path from "path";
import fs from "fs"
import fsPromises from "fs/promises"

async function getAllVacations() {
    const sql = `
    
    SELECT vacationCode, destination,description,
      startDate,
      endDate,
      price,
      imageFile FROM vacations
      ORDER BY startDate;
      ;
     `;
    const vacations = await dal.execute(sql);

    return vacations;
}

async function getVacationByCode(vacationCode : number):Promise<VacationsModel> {
   const sql =
   `SELECT 
   vacationCode, destination,description,
     DATE_FORMAT(startDate, '%d-%m-%Y') AS startDate,
     DATE_FORMAT(endDate, '%d-%m-%Y') AS endDate,
      price,
      imageFile
      
   FROM vacations WHERE vacations.vacationCode = ? `;
   const vacations = await dal.execute(sql , [vacationCode])
   const vacation = vacations[0]
   return vacation
}

async function addVaction (vacation: VacationsModel):Promise<VacationsModel> {
    // Validation: 
    const errors = vacation.validate()
    if(errors) throw new ValidationError(errors);
   
   
        if (vacation.image) {
       
            const extension = path.extname(vacation.image.name)
            vacation.imageFile = uuid() + extension;
            const pathToKeep = "./src/1-assets/images/" + vacation.imageFile;
            await vacation.image.mv(pathToKeep)
            delete vacation.image;
        }

    const sql=`INSERT INTO vacations
     VALUES ( DEFAULT,
        ?,
        ?, 
        ?,
        ?, 
        ?,
        ?)`;
    
    const info: OkPacket = await dal.execute(sql, [
        vacation.destination, 
        vacation.description, 
        vacation.startDate,
        vacation.endDate,
        vacation.price,
        vacation.imageFile
        ]);

    vacation.vacationCode = info.insertId
    console.log(vacation)
    return vacation
}
;

async function updateVacation (vacation: VacationsModel) :Promise<VacationsModel> {
   const errors = vacation.validate();
   if(errors) throw new ValidationError(errors)

        if (vacation.image) {

            deleteImage(vacation);
            
            saveImage(vacation);
            
            delete vacation.image;

    }else  {
        vacation.imageFile = vacation.imageFile
    }

    const sql =`
    UPDATE vacations
    SET 
        destination = ?,
        description = ?,
        startDate = ?,
        endDate = ?,
        price = ?,
        imageFile = ?
    WHERE vacationCode = ?
    `
    
    const values = [vacation.destination, 
                    vacation.description,
                    vacation.startDate, 
                    vacation.endDate, 
                    vacation.price, 
                    vacation.imageFile,
                     vacation.vacationCode]

    const updateVacationInfo = await dal.execute(sql ,values)
     
    if(updateVacationInfo.length === 0) throw new ResourceNotFoundError(vacation.vacationCode)
    
    return vacation
}  



async function getVacationsForUser(id: number):Promise<VacationsModel[]>  {

const sql = `
 SELECT DISTINCT V.*,
  EXISTS(SELECT * FROM followers WHERE vacationCode = F.vacationCode AND id = ?)  AS isFollowing,
   COUNT(F.id) AS followersCount
    FROM vacations AS V LEFT JOIN followers AS F
     ON V.vacationCode = F.vacationCode 
    GROUP BY vacationCode ORDER BY startDate DESC;
`
const vacations = await dal.execute(sql , [id])
//    const vacation = vacations[0]
   return vacations
}

async function deleteVacation(vacationCode: number): Promise<void>{
    const sql = `DELETE FROM vacations
     WHERE vacationCode = ?`
    const info:OkPacket =await dal.execute(sql,[vacationCode])
    if(info.affectedRows ===0) throw new ResourceNotFoundError(vacationCode)

}

// Images path
const imagesPath = path.join(__dirname, '..', '1-assets', 'images');

// Delete existing image
function deleteImage(vacation: VacationsModel) {
    if (fs.existsSync("./src/1-assets/images/" + vacation.imageFile)) {

        // Delete it:
        fs.unlinkSync("./src/1-assets/images/" + vacation.imageFile);
    }
};

// Save new image in file system
async function saveImage(vacation: VacationsModel): Promise<void> {
    const extension = vacation.image.name.substring(vacation.image.name.lastIndexOf('.'));
    vacation.imageFile = uuid() + extension;
    const image = path.join(imagesPath, vacation.imageFile);
    await vacation.image.mv(image);
};



export default {
    getAllVacations,
    getVacationByCode,
    addVaction,
    updateVacation,
    getVacationsForUser, 
    deleteVacation
}
