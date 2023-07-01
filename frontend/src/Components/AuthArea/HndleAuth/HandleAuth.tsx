import { useEffect, useState } from "react";
import "./HndleAuth.css";
import UserModel from "../../../Models/Users";
import { NavLink } from "react-router-dom";
import { authStore } from "../../../Redux/AuthState";
import { unsubscribe } from "diagnostics_channel";

function HndleAuth(): JSX.Element {

    
    const [user, setUser] = useState<UserModel>()



    useEffect(()=>{

        setUser(authStore.getState().user)
    //listen to any change in the user state global state:

        const unsubscribe = authStore.subscribe(() =>
         setUser(authStore.getState().user)
    )
    
        return () => {
             unsubscribe();
            };
    },[])
      

            return (
        <div className="HandleAuth">
			{!user && <>
            <span>Hello Guest |</span>
            <NavLink to="/login">Login</NavLink>
            <span> | </span>
            <NavLink to="/register">Register</NavLink>
            </>}

            {user && <>
              <span>Hello  {user.firstName} {user.lastName} |</span>
              <NavLink to="/logout">Logout</NavLink>
            </>}
            
        </div>
    );
}

export default HndleAuth;
