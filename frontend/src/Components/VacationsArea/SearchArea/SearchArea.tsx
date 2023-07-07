import { Stack, Button } from "@mui/material";
import "./SearchArea.css";
import VacationsModel from "../../../Models/VacationModel";
import SearchCard from "../SearchCard/SearchCard";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import vacationsService from "../../../Services/VactionsService";
import { authStore } from "../../../Redux/AuthState";
import UserModel from "../../../Models/Users";
import notifyService from "../../../Services/NotifyService";

interface VacationSearchProps {
  vacations: VacationsModel[];
}

function SearchArea(props: VacationSearchProps): JSX.Element {
  const [filterVacations, setFilterVacations] = useState<VacationsModel[]>([]);
  const [user, setUser] = useState<UserModel>();
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const navigate = useNavigate();

//getting the user
  useEffect(() => {
    setUser(authStore.getState().user);
    const unsubscribe = authStore.subscribe(() => {
      setUser(authStore.getState().user);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  function CurrentVacations(): void {
    const updatedVacations: VacationsModel[] = [];

    props.vacations.forEach((v) => {
      const today = new Date();
      const startDate = new Date(v.startDate);
      const endDate = new Date(v.endDate);

      if (today.getTime() >= startDate.getTime() && today.getTime() <= endDate.getTime()) {
        updatedVacations.push(v);
      }
    });

    setFilterVacations(updatedVacations);
    setIsButtonClicked(true);
  }

  function FutureVacations(): void {
    const updatedVacations: VacationsModel[] = [];

    props.vacations.forEach((v) => {
      const today = new Date();
      const startDate = new Date(v.startDate);

      if (today.getTime() < startDate.getTime()) {
        updatedVacations.push(v);
      }
    });

    setFilterVacations(updatedVacations);
    setIsButtonClicked(true);
  }

  async function FollowedVacations(): Promise<void> {
    try {
      const followedVacations = await vacationsService.getvacationForUser(user.id);
      // const filteredVacations = followedVacations.filter((v) => v.isFollowing === true);
      const filteredVacations = followedVacations.filter((v) => Boolean(v.isFollowing) === true);
      setFilterVacations(filteredVacations);
      console.log("my favorite", filteredVacations);
      setIsButtonClicked(true);
    } catch (err) {
      notifyService.error(err);
    }
  }
  const isUser = user?.role === "user"
  const isAdmin = user?.role === "admin"
  return (
    <div className="SearchArea">
      <div className="container">
      {isUser && (
            <Stack direction="row" spacing={2}>
            <Button size="small" color="secondary" onClick={FollowedVacations}>
              My Favorite
            </Button>
            <Button size="small" color="secondary" onClick={CurrentVacations}>
              Current Vacations
            </Button>
            <Button size="small" color="secondary" onClick={FutureVacations}>
              Future Vacations
            </Button>
          </Stack>
          )}
           {isAdmin && (
            <Stack direction="row" spacing={2}>
            
            <NavLink to={"/add" }><span className="material-symbols-outlined">add</span></NavLink>
            <NavLink to={"/informationChart"}><span className="material-symbols-outlined">monitoring</span> </NavLink>   
            
          </Stack>
          )}
        
        
        <div className="vacationcards">  
          {filterVacations.map((v) => (
            <SearchCard   key={v.vacationCode} vacation={v}  />
          ))}
          </div>
        
      </div>
      
      {isButtonClicked && (
        <>
          <h1>You are welcome to explore all of our unique and beautiful vacations!</h1>
          <h2>We have more dreams for you!</h2>
        </>
      )}
    </div>
  );
}

export default SearchArea;