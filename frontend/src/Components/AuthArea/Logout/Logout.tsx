
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";
import notifyService from "../../../Services/NotifyService";



function Logout(): JSX.Element {

    const navigate = useNavigate();
   
       useEffect(() => {

        authService.logout()
        .then(()=>{   
        notifyService.success("Bye Bye");
                      navigate("/login")
    })
        .catch((err: any)=>{notifyService.error(err)})
          
    });

    return null; 
}

export default Logout;
