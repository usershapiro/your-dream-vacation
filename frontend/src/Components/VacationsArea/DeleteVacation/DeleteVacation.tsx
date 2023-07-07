import { useEffect } from "react";
import "./DeleteVacation.css";
import vacationsService from "../../../Services/VactionsService";
import { useNavigate, useParams } from "react-router-dom";
import notifyService from "../../../Services/NotifyService";

function DeleteVacation(): JSX.Element {
    const params = useParams();
    const navigate = useNavigate();
    useEffect(()=>{
        try{
            const vacationCode = + params.vacationCode
            if(!window.confirm("Are you sure?")) return  navigate("/vacations/cardInfo/" +vacationCode) ;
            vacationsService.deleteVacation(vacationCode)
            notifyService.success("vacation has been deleted")
            navigate("/vacations")
             }
     catch (err: any) {
        notifyService.error(err)
      }
      
      },[])
    return (
        <div className="DeleteVacation">
			
        </div>
    );
}

export default DeleteVacation;
