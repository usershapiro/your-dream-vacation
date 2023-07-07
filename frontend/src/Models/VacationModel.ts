class VacationsModel {
    
    public vacationCode: number;
    public destination: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public price:number;
    public image : FileList;
    public imageFile:string;

    public isFollowing:boolean;
    public count:number;

    public static destinationValidation = {
        required: { value: true, message: "Missing destination" },
        minLength: { value: 3, message: "destination too short" },
        maxLength: { value: 150, message: "destination too long" }
    }

    public static descriptionValidation = {
        required: { value: true, message: "Missing decription" },
        minLength: { value: 2, message: "Description is too short" },
        maxLength: { value: 2000 , message: "Description is too long" }
    }
    public static startDateValidation = {
        required: { value: true, message: "Missing start date" }
    }
    public static endDateValidation = {
        required: { value: true, message: "Missing End date" }
    }
    public static priceValidation = {
        required: { value: true, message: "Missing price" },
        min: { value: 0, message: "Price can't be negative" },
        max: { value: 10000, message: "Price can't exceed 10000" }
    }
    public static imageValidation = {
        required: { value: true, message: "Missing Image "}
       
    }

}
export  default VacationsModel