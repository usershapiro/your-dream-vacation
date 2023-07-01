import Joi from "joi";

class UserModel {
    
    public id: number;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public role:string;

    public constructor(user: UserModel) {
        this.id = user.id;
        this.firstName = user.firstName;
        this.lastName = user.lastName;
        this.email = user.email;
        this.password = user.password;
        this.role = user.role;
    }

    public static validationSchema = Joi.object({
        id: Joi.number().optional().integer().positive(),
        firstName: Joi.string().required().min(2).max(20),
        lastName: Joi.string().required().min(2).max(20),
        email: Joi.string().required().email(),
        password: Joi.string().required().min(4).max(200),
        role:Joi.string().optional().min(2).max(30)
    });

    public validate(): string {
        const result = UserModel.validationSchema.validate(this);
        return result.error?.message;
    }

}

export default UserModel;