import jwtDecode from "jwt-decode";
import UserModel from "../Models/Users";
import { create } from "domain";
import { createStore } from "redux";

export class AuthState {
    public token:string = null;
    public user:UserModel =null;

    public constructor() {
        this.token = sessionStorage.getItem("token");
        if(this.token) {
             const container: {user: UserModel} = jwtDecode(this.token);
             this.user = container.user
        }
    }
}

export enum AuthActionType {
    Register,
    Login,
    Logout
}

export interface AuthAction {
    type : AuthActionType;
    payload?:string;
}

export function authReducer(currentstate = new AuthState(), action:AuthAction) :AuthState{
  
    const newState = {...currentstate };

    switch (action.type) {
        case AuthActionType.Register:
        case AuthActionType.Login:
            newState.token = action.payload;
            const container: { user:UserModel} = jwtDecode(newState.token);
            newState.user = container.user;
            sessionStorage.setItem("token",newState.token);
            break;
        
        case AuthActionType.Logout:
            newState.token = null;
            newState.user = null;
            sessionStorage.removeItem("token");
            break;
    }

    return newState;
}

export const authStore = createStore(authReducer);