class CredentialsModel {
    public email: string;
    public password: string;

    public static emailValidation={
        required: {value: true, message: "email required!"},
               
    }


    public static passwordValidation={
        required:{value: true, message: "password required!"},
        minLength:{value: 4, message: "password has to be  4 characters!"},
        maxLength:{value: 25, message: "password is too long!"}
    }
}

export default CredentialsModel;