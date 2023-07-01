import { Box, Button, Card, CardContent, CardMedia, Pagination, Paper, Stack, Typography } from "@mui/material";
import "./VacationList.css";
import waveImg from "../../../Assests/images/beach-1761410_1280.jpg"
import VacationsModel from "../../../Models/VacationModel";
import { useEffect, useState } from "react";
import vacationsService from "../../../Services/VactionsService";
import VacationCard from "../VacationCard/VacationCard";
import { authStore } from "../../../Redux/AuthState";
import { useNavigate } from "react-router-dom";
import useVerifyLoggedIn from "../../../Utils/useVerifyloggedin";
import SearchArea from "../SearchArea/SearchArea";



function VacationList(): JSX.Element {
  const navigate = useNavigate()
 useVerifyLoggedIn();
  
  const[ vacations ,setVecations ] = useState<VacationsModel[]>([]);
  

  useEffect(()=>{
    vacationsService.getAllVacations()
    .then( vacations => setVecations(vacations))
    .catch(err=> alert(err))
  },[])



  return (
    <div className="VacationList">
       <div className="vacationsbuttons">
       <SearchArea   vacations={vacations} />
       </div>
       <div className="vacationcards">     
       {vacations.map(v => <VacationCard key={v.vacationCode} vacation={v} />)}
       </div>
      <Stack spacing={2}>
     <Pagination count={5} color="secondary" />

</Stack>


      
    </div>
  );
}

export default VacationList;
