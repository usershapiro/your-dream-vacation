import "./SearchCard.css";
import {  Card, CardActionArea, CardMedia } from "@mui/material";
import VacationsModel from "../../../Models/VacationModel";
import { NavLink, useNavigate } from "react-router-dom";
import appConfig from "../../../Utils/appConfig";



interface VacationCardProps{
  vacation: VacationsModel;
}

function SearchCard(props: VacationCardProps): JSX.Element {
    return (
        <div className="SearchCard">
			<NavLink to={"/vacations/cardInfo/" + props.vacation.vacationCode} >  

<Card sx={{ maxWidth: 330 ,minWidth:330}}

>
<CardActionArea>
<div style={{ position: 'relative' }}>
  <CardMedia
    component="img"
    height="330"
    alt={props.vacation.destination}
    src={appConfig.vacationImageUrl + props.vacation.imageFile}
    className="img"
  /> <span style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'rgba(0, 0, 0, 0.5)', color: '#fff', fontSize: '24px', padding: '10px' }}>{props.vacation.destination}</span>

</div>
</CardActionArea>

</Card>
</NavLink>  
        </div>
    );
}

export default SearchCard;



