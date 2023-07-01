class VacationsModel {
    
    public vacationCode: number;
    public destination: string;
    public description: string;
    public startDate: string;
    public endDate: string;
    public price:number;
    public image : FileList;
    public imageFile:string;

    public static destinationValidation = {
        required: { value: true, message: "Missing destination" },
        minLength: { value: 3, message: "destination too short" },
        maxLength: { value: 150, message: "destination too long" }
    }

    public static descriptionValidation = {
        required: { value: true, message: "Missing decription" },
        minLength: { value: 2, message: "Name too short" },
        maxLength: { value: 150 , message: "Name too long" }
    }
    public static priceValidation = {
        required: { value: true, message: "Missing price" },
        min: { value: 0, message: "Price can't be negative" },
        max: { value: 10000, message: "Price can't exceed 10000" }
    }

}
export  default VacationsModel