import axios from "axios";
import UserModel from "../Models/Users";
import appConfig from "../Utils/appConfig";
import { AuthActionType, authStore } from "../Redux/AuthState";
import CredentialsModel from "../Models/CredentialsModel";

class AuthService {

    public async register(user:UserModel):Promise<void> {
        const response = await axios.post<string>(appConfig.registerUrl, user);

        const token = response.data;

        authStore.dispatch({type:AuthActionType.Register , payload:token});
    }

    public async login(credentials:CredentialsModel):Promise<void> {
        const response = await axios.post<string>(appConfig.loginUrl,credentials);

        const token = response.data;

        authStore.dispatch({type:AuthActionType.Login , payload:token});
    }

    public async logout():Promise<void> {
        authStore.dispatch({type: AuthActionType.Logout});
    }
   
    public async isAdmin(id:number):Promise<UserModel> {
        const response = await axios.get<UserModel>(appConfig.getUserUrl+id)
        const user = response.data;
        return user
    }
    
}

const authService = new AuthService();

export default authService;