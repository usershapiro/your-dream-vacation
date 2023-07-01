class UserModel {
    
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role:string;

    public static firstNameValidation= {
        required: {value: true, message: "firstName is required"},
        minLength: {value: 2, message: "at least 2 characters are required!"},
        maxlength: {value: 100, message: "it's  over 100 characters!"}
    }
    
    public static lastNameValidation={
        required: {value: true, message: "last Name required!"},
        minLength: {value: 2, message: "at least 2 characters required!"},
        maxLength: {value: 100, message: "it's over 100 characters!"}
    }
    
    public static emailValidation={
        required: {value: true, message: "email required!"},
        // RegExp: {RegExp:/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i, message:"email isn't valid"}
        
    }
    
    public static passwordValidation={
        required:{value: true, message: "password required!"},
        minLength:{value: 4, message: "password has to be longer than 2 characters!"},
        maxLength:{value: 25, message: "password is too long!"}
    }

}
export default UserModel