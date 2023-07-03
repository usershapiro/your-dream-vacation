import { Box, Button, Checkbox, IconButton, Stack, TextField } from "@mui/material";
import "./SearchArea.css";
import { Favorite, FavoriteBorder, Rowing, Search } from "@mui/icons-material";
import VacationsModel from "../../../Models/VacationModel";
import VacationCard from "../VacationCard/VacationCard";
import SearchCard from "../SearchCard/SearchCard";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import followerService from "../../../Services/followerService";
import vacationsService from "../../../Services/VactionsService";
import { authStore } from "../../../Redux/AuthState";
import UserModel from "../../../Models/Users";

interface VacationSearchProps{
    vacations: VacationsModel[];
  }
  
  

function SearchArea(props:VacationSearchProps): JSX.Element {
  // const [currentVacations,setCurrentVacations]= useState<VacationsModel[]>([]);
  // const [futureVacations , setFutureVacations]= useState<VacationsModel[]>([]);
  // const [followedVacations , setFollowedVacations]= useState<VacationsModel[]>([]);
  const [filterVacations, setFilterVacations] = useState<VacationsModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const updatedVacations: VacationsModel[] = [];
  const navigate = useNavigate();

  useEffect(() => {

    setUser(authStore.getState().user);
    const unsubscribe = authStore.subscribe(() => {
        // Take current user when there is a change:
        setUser(authStore.getState().user);
    });

    return () => {
        // Unsubscribe: 
        unsubscribe();
    };
}, []);

    function CurrentVacations():VacationsModel[]{
    
      props.vacations.forEach((v) => {
        const today = new Date();
        const startDate = new Date(v.startDate);
        const endDate = new Date(v.endDate);
    
        if (today.getTime() >= startDate.getTime() && today.getTime() <= endDate.getTime()) {
          updatedVacations.push(v);
        }   
         
        setFilterVacations(updatedVacations)
      }); 
      
      return filterVacations; 
      
    }

    function FutureVacations():VacationsModel[]{

      props.vacations.forEach((v) => {
      const today = new Date();
      const startDate = new Date(v.startDate);
      
      if (today.getTime() < startDate.getTime()) {
        updatedVacations.push(v);
      }  

      setFilterVacations(updatedVacations)
    }); 
        
  
      return filterVacations
    }
    
    
 async  function FollowedVacations() : Promise <VacationsModel[]> {
    await vacationsService.getvacationForUser(user.id)
  
    .then((filterVacations) => {setFilterVacations(filterVacations)
    
    })
    .catch(err => alert(err));
   
    // return followedVacations
    return filterVacations
  }

    return (
        
        <div className="SearchArea">
      <Stack direction="row" spacing={2} >
      <Button size="small" color="secondary" onClick={FollowedVacations}>My Vacations</Button>
      <Button size="small" color="secondary" onClick={CurrentVacations} >Current Vacations</Button>
      <Button size="small" color="secondary" onClick={FutureVacations}>Future Vacations</Button>
  
      </Stack>
      
      
        <Stack direction="row" spacing={2}>
          {filterVacations.map((v) => <SearchCard key={v.vacationCode} vacation={v} />)} 
        
        </Stack>

  
        </div>
    );
}

export default SearchArea;
