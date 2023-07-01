import { Navigate, Route, Routes } from "react-router-dom";
import "./Routing.css";
import Home from "../../HomeArea/Home/Home";

import VacationList from "../../VacationsArea/VacationList/VacationList";
import Login from "../../AuthArea/Login/Login";
import CardInfo from "../../VacationsArea/CardInfo/CardInfo";


import Register from "../../AuthArea/Register/Register";
import AddVacation from "../../VacationsArea/AddVacation/AddVacation";
import Logout from "../../AuthArea/Logout/Logout";
import UpdateVacation from "../../VacationsArea/UpdateVacation/UpdateVacation";

function Routing(): JSX.Element {
    return (
        <div className="Routing">
			   <Routes>
               <Route path="/home" element={<Home />} />
               <Route path="/login" element={<Login/>} />
               <Route path="/logout" element={<Logout/>} />
               <Route path="/register" element={<Register/>} />
               <Route path="/vacations" element={<VacationList />} />
               <Route path="/add" element={<AddVacation />} />
               <Route path="/update/:vacationCode" element={<UpdateVacation/>} />
               <Route path="/" element={<Navigate to="/home" />} />

               {/* <Route path="/cardInfo" element={<CardInfo/>} /> */}
               <Route path="/vacations/cardInfo/:vacationCode" element={<CardInfo/>} />
             
               </Routes>
            
        </div>
    );
}

export default Routing;
