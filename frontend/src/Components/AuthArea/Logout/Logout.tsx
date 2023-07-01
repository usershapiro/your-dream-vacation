
import { useNavigate } from "react-router-dom";
import "./Logout.css";
import { useEffect } from "react";
import authService from "../../../Services/AuthService";



function Logout(): JSX.Element {

    const navigate = useNavigate();
   
       useEffect(() => {

        authService.logout()
        .then(()=>{   alert("Bye Bye")
                      navigate("/login")
    })
        .catch((err: any)=>{console.log(err)})
          
    });

    return null; 
}

export default Logout;
