import { Box, Button, TextField } from "@mui/material";
import "./AddVacation.css";
import { send } from "process";
import { useForm } from "react-hook-form";
import VacationsModel from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VactionsService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import notifyService from "../../../Services/NotifyService";

function AddVacation(): JSX.Element {
  
    const {handleSubmit , register, formState } = useForm <VacationsModel>();
    const [selectedImage, setSelectedImage] = useState();
    const navigate = useNavigate();

 
    async function send(vacation:VacationsModel) {
      const currentDate = new Date();
      const startDate = new Date(vacation.startDate);
      const endDate = new Date(vacation.endDate);
  
      if (endDate < startDate) {
        notifyService.error("End date cannot be earlier than the start date.");
     
        return;
      }
  
      if (currentDate > startDate || currentDate > endDate) {
        notifyService.error("Please select future dates.");
      
        return;
      }
        try {
            console.log(vacation)
            await vacationsService.addVacation(vacation)
            notifyService.success("vacation has been added ")
        
            navigate("/vacations");
        }
        catch(err: any) {
            notifyService.error(err)
        }
    }
    return (
        <div className="AddVacation">
		<h1>Add Vacation</h1>	
            <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      onSubmit={handleSubmit(send)}
      // noValidate
      autoComplete="off"
    >
      <div>
     
      <TextField
          label="Destination"
          variant="standard"
          color="secondary"
          {...register("destination",VacationsModel.destinationValidation)}
        />
          <span className="Error">{formState.errors.destination?.message}</span>

        </div>
        <div>
          <TextField
         label="Description"
         variant="standard"
          color="secondary"
          type="text"
          {...register("description",VacationsModel.descriptionValidation)}
        />
        <span className="Error">{formState.errors.description?.message}</span>
      </div>
      <div>
     
      <TextField
          label="Start Date"
          variant="standard"
          color="secondary"
          type="date"
          {...register("startDate")}
        />
        </div>
        <div>
     
      <TextField
          label="End Date"
          variant="standard"
          color="secondary"
          type="date"
          {...register("endDate")}
        />
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
      
       <input
            type="file"        
            accept="image/*"
             {...register("image")}
         
          />
       <Box sx={{ '& button': { m: 1 } }}>
      
      <div>
        
        <Button variant="contained" size="medium"  color="secondary" type="submit">
         Add
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

export default AddVacation;
function setValue(arg0: string, arg1: string) {
  throw new Error("Function not implemented.");
}

