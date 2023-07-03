import { Box, Button, Card, CardContent, CardMedia, Pagination, Paper, Stack  } from "@mui/material";
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
  const [currentPage, setCurrentPage] = useState(1);
  const vacationsPerPage = 8;

  useEffect(()=>{
    vacationsService.getAllVacations()
    .then( vacations => setVecations(vacations))
    .catch(err=> alert(err))
  },[])
 
  // Calculate pagination data
  const indexOfLastVacation = currentPage * vacationsPerPage;
  const indexOfFirstVacation = indexOfLastVacation - vacationsPerPage;
  const currentVacations = vacations.slice(indexOfFirstVacation, indexOfLastVacation);

    // Handle page change
    const handlePageChange = (event: React.ChangeEvent<unknown>, pageNumber: number) => {
      setCurrentPage(pageNumber);
    };
  
 

  return (
    <div className="VacationList">
       <div className="vacationsbuttons">
       <SearchArea   vacations={vacations} />

       </div>
       
       <div className="vacationcards">     
       {currentVacations.map(v => <VacationCard key={v.vacationCode} vacation={v} />)}
       </div>
      <Stack spacing={2}>
    
     <Pagination   className="paging" count={Math.ceil(vacations.length / vacationsPerPage)}  page={currentPage}  onChange={handlePageChange} color="secondary"/>
   
</Stack>


      
    </div>
  );
}

export default VacationList;
