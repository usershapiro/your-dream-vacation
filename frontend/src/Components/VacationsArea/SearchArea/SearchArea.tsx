import { Box, Button, Checkbox, IconButton, Stack, TextField } from "@mui/material";
import "./SearchArea.css";
import { Favorite, FavoriteBorder, Rowing } from "@mui/icons-material";
import VacationsModel from "../../../Models/VacationModel";
import VacationCard from "../VacationCard/VacationCard";
import SearchCard from "../SearchCard/SearchCard";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface VacationSearchProps{
    vacations: VacationsModel[];
  }
  
  

function SearchArea(props:VacationSearchProps): JSX.Element {
  const [currentVacations,setCurrentVacations]= useState<VacationsModel[]>([]);
  const [futureVacations , setFutureVacations]= useState<VacationsModel[]>([]);
  const updatedVacations: VacationsModel[] = [];

 

    function CurrentVacations():VacationsModel[]{
      
      props.vacations.forEach((v) => {
        const today = new Date();
        const startDate = new Date(v.startDate);
        const endDate = new Date(v.endDate);
    
        if (today.getTime() >= startDate.getTime() && today.getTime() <= endDate.getTime()) {
          updatedVacations.push(v);
        }   
         
         setCurrentVacations(updatedVacations);
      }); 
        
        
      console.log("current "+ currentVacations)
      return currentVacations; 
      
    }
    function FutureVacations():VacationsModel[]{

      props.vacations.forEach((v) => {
      const today = new Date();
      const startDate = new Date(v.startDate);
      
      if (today.getTime() < startDate.getTime()) {
        updatedVacations.push(v);
      }  
      setFutureVacations(updatedVacations);
    }); 

    console.log("FUTURE"+ futureVacations)
      return futureVacations; 
    }
    
    useEffect(() => {
      CurrentVacations();
    }, []);

    
    return (
        
        <div className="SearchArea">
      <Stack direction="row" spacing={2} >
      <Button size="small" color="secondary" onClick={()=>{console.log(props.vacations)}}>Followed Vacations</Button>
      <Button size="small" color="secondary" onClick={CurrentVacations}>Current Vacations</Button>
      <Button size="small" color="secondary"  onClick={FutureVacations}>Future Vacations</Button>
   </Stack>
  
        
        {currentVacations.map((v) => <SearchCard key={v.vacationCode} vacation={v} />)}
        {futureVacations.map((v) => <SearchCard key={v.vacationCode} vacation={v} />)}
        <NavLink to={"/vacations"}>Back</NavLink>
        </div>
    );
}

export default SearchArea;
