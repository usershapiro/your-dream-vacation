import { UploadedFile } from "express-fileupload";
import Joi from "joi";

class VacationsModel {
    
    public vacationCode: number;
    public destination: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public price:number;
    public image: UploadedFile; // The file uploaded by the frontend.
    public imageFile:string;

    public isFollowing: boolean;
    public followersCount:number;

    public constructor(vacation:VacationsModel) {
        this.vacationCode = vacation.vacationCode;
        this.destination = vacation.destination;
        this.description = vacation.description;
        this.startDate = vacation.startDate;
        this.endDate = vacation.endDate;
        this.price = vacation.price;
        this.image = vacation.image;
        this.imageFile = vacation.imageFile;
    }

    private static ValidationSchema = Joi.object({
        vacationCode: Joi.number().optional().positive().integer(),
        destination: Joi.string().required().min(2).max(150),
        description: Joi.string().required().min(2).max(450),
        startDate:Joi.string().optional(),
        endDate:Joi.string().optional(),
        price: Joi.number().required().min(0).max(20000),
        image: Joi.object().optional(),
        imageFile: Joi.string().optional()

    });

    public validate(): string {
        const result = VacationsModel.ValidationSchema.validate(this);
        return result.error?.message;
    }

}

export default VacationsModel;
