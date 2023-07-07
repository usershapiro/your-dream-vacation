import { Box, Button, TextField } from "@mui/material";
import "./UpdateVacation.css";
import { useForm } from "react-hook-form";
import VacationsModel from "../../../Models/VacationModel";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import vacationsService from "../../../Services/VactionsService";
import appConfig from "../../../Utils/appConfig";
import notifyService from "../../../Services/NotifyService";

function UpdateVacation(): JSX.Element {
   
    const {handleSubmit , register, formState ,setValue} = useForm <VacationsModel>();    
    const [vacation, setVacation] = useState<VacationsModel>()
    const navigate = useNavigate();
    const params = useParams();
   

  useEffect(()=>{
    const vacationCode = + params.vacationCode
    vacationsService.getVacationByCode(vacationCode)
    .then(v => {
      setVacation(v)
      setValue("vacationCode", v.vacationCode);
      setValue("destination", v.destination);
      setValue("description", v.description);
      setValue("startDate", v.startDate);
      setValue("endDate", v.endDate);
      setValue("price", v.price);
      setValue("imageFile", v.imageFile);
      setVacation(v)
      console.log(vacationCode)
  })
  .catch(err => notifyService.error(err));
  },[])
    

  
    async function update(vacation:VacationsModel) {
      const currentDate = new Date();
      const startDate = new Date(vacation.startDate);
      const endDate = new Date(vacation.endDate);
  
      if (endDate < startDate) {
        notifyService.error("End date cannot be earlier than the start date.");
        return;
      }
  
      if (currentDate > endDate) {
  
        const confirmed = window.confirm(
          "The selected end date is in the past. Are you sure you want to proceed?"
        );
        if (!confirmed) {
          return;
        }
      }
        try {
     
            await vacationsService.update(vacation)
            notifyService.success("Vacation has been updated")          
            navigate("/vacations");
        }
        catch(err: any) {
           notifyService.error(err)
        }
    }
  

    return (
        <div className="UpdateVacation">
				<h1>Update Vacation</h1>	
         <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      onSubmit={handleSubmit(update)}
      // noValidate
      autoComplete="off"
    >
      <div>
     <input type="number" {...register("vacationCode")} hidden ></input>
      <TextField
          
          variant="standard"
          color="secondary" 
          {...register("destination",VacationsModel.destinationValidation)}
        />
          <div className="Error">{formState.errors.destination?.message}</div>

        </div>
        <div>
          <TextField
         
         variant="standard"
          color="secondary"
          type="text"
          {...register("description",VacationsModel.descriptionValidation)}
        />
        <div className="Error">{formState.errors.description?.message}</div>
      </div>
      <div>
     
      <TextField
        
          variant="standard"
          color="secondary"
          type="date"
          {...register("startDate", VacationsModel.startDateValidation)}
        />
        </div>
        <div>
        <div className="Error">{formState.errors.startDate?.message}</div>
      <TextField
         
          variant="standard"
          color="secondary"
          type="date"
          {...register("endDate",VacationsModel.endDateValidation)}
        
        />
          <div className="Error">{formState.errors.endDate?.message}</div>
        </div>
        <div>
     
     <TextField
         variant="standard"
         color="secondary"
         type="number"
         {...register("price",VacationsModel.priceValidation)}
       />
       <span className="Error">{formState.errors.price?.message}</span>
       </div>
       {vacation && vacation.imageFile!== null &&<>
       
                <img  className="img"   src={vacation && appConfig.vacationImageUrl + vacation?.imageFile}/>
                <input type="file" accept="image/*"   {...register("image")} /></>}

       <Box sx={{ '& button': { m: 1 } }}>
  
       {/* <span className="Error">{formState.errors.image?.message}</span> */}
      <div>
        
        <Button variant="contained" size="medium"  color="secondary" type="submit">
         Update
        </Button>
        <Button variant="contained" size="medium"  color="secondary">
          Cancel
        </Button>
      </div>
    </Box>
    </Box>
        </div>
    );
}

export default UpdateVacation;


