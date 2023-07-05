import {  Box, Card, CardActionArea, CardContent, CardMedia, Checkbox, IconButton, Rating, Typography } from "@mui/material";
import "./CardInfo.css";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import VacationsModel from "../../../Models/VacationModel";
import { useEffect, useState } from "react";
import vacationsService from "../../../Services/VactionsService";
import React from "react";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import appConfig from "../../../Utils/appConfig";
import followerService from "../../../Services/followerService";
import { authStore } from "../../../Redux/AuthState";
import UserModel from "../../../Models/Users";
import FollowerModel from "../../../Models/FollowerModel";
import notifyService from "../../../Services/NotifyService";

function CardInfo(): JSX.Element {
    const params = useParams();
    const [user, setUser] = useState<UserModel>();
    const [isFollowung,setisFollowing]=useState<boolean>();
    const [vacation, setVacation] = useState<VacationsModel>();
    const [ vacations ,setVacations ] = useState<VacationsModel[]>([]);
    const [value, setValue] = React.useState<number | null>(3);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const [hasAddedFollower, setHasAddedFollower] = useState(false);
    const [followersCount, setFollowersCount] = useState<number>();
    const [checked, setChecked] = React.useState(true);

    //getting the vacations
    useEffect(() => {
        const vacationCode = + params.vacationCode; // prodId must be same name as declared in the routing! 
        vacationsService.getVacationByCode(vacationCode)

            .then((vacation) => {setVacation(vacation)
            
            })
            .catch(err => alert(err));
    }, []);
   
    //setting the user from redux
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

 //getting followers number per vacation
    useEffect(() => {
      const vacationCode = + params.vacationCode;
      followerService.followersNumberPerVacation(vacationCode)
          .then((followersCount) => setFollowersCount(followersCount))
          .catch(err => notifyService.error(err));
          console.log(vacations)
  }, []);
 
  //adding follower
 async function addFollower(){
  // if (checked) {
    try {
      // if (!hasAddedFollower) {
        await followerService.addFollower(user.id, vacation.vacationCode);
        setFollowersCount(followersCount + 1);
        
        // setHasAddedFollower(true);
      // }
    } catch (err: any) {
      alert(err.message);
    }
  
  
  }

  async function removeFollower() {
    try {
      //     // if (hasAddedFollower) {
            await followerService.removeFollower(user.id, vacation.vacationCode);
            setFollowersCount(followersCount - 1);
          
      
      //       // setHasAddedFollower(false);
      //     // }
        } catch (err: any) {
          notifyService.error(err)
        }
  }

    return (
        <div className="CardInfo" >

         {vacation && 
         <>
         <div className="container">
         <CardMedia
        component="img"
        height="250"
        src={appConfig.vacationImageUrl + vacation.imageFile}
        alt={vacation.destination}
        className="img"/>
            
		<Card sx={{ maxWidth: 800 }}
    className="card">
        
     <CardContent className="info" > 
      <div>

        
      {user.role === "user" && (
  <>
   <Checkbox 
      onChange={(e) => {
        if (e.target.checked) {
          addFollower();
        }
        else{
          removeFollower();
        }
      
      }}
      
       color="secondary"{...label} 
       sx={{ '& .MuiSvgIcon-root': { fontSize: 40 } }}
       icon={<FavoriteBorder /> }
       checkedIcon={<Favorite />}
       />
       <span>Like {followersCount}</span>
  
  </>
)}
     
    </div>
            <h1>{vacation.destination}</h1>
          <Typography gutterBottom variant="h5" className="description" component="div">
          {vacation.description}
          </Typography>
          
        </CardContent>

        <CardContent className="info">
          
          <Typography gutterBottom variant="h5" component="div" className="date">
             {vacation.startDate}➖{vacation.endDate}
             
          </Typography>
          
          <Typography gutterBottom variant="h5" component="div" className="price">
           price: {vacation.price}$
          </Typography>
        
          <Typography variant="body2" color="text.secondary">
          <div className="price"></div>
           <Typography component="legend">Rating</Typography>
      <Rating name="read-only" value={value} readOnly />

          </Typography>
        </CardContent>
        <NavLink to={"/vacations"}><span className="material-symbols-outlined">
redo
</span></NavLink><br></br>
      
        {user.role === "admin" && (
  <>
  
    <NavLink to={"/update/" + vacation.vacationCode}>
      <span className="material-symbols-outlined">
      ink_pen
    </span></NavLink>
   
    <NavLink to={"/delete/" + vacation.vacationCode}>
     <span className="material-symbols-outlined">
     delete
     </span></NavLink>
  </>
)}
    </Card>	
    </div>
         </>
         }
        </div>
    );
}

export default CardInfo;



