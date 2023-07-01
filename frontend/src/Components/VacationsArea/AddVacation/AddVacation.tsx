import { Box, Button, TextField } from "@mui/material";
import "./AddVacation.css";
import { send } from "process";
import { useForm } from "react-hook-form";
import VacationsModel from "../../../Models/VacationModel";
import vacationsService from "../../../Services/VactionsService";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function AddVacation(): JSX.Element {
  
    const {handleSubmit , register, formState } = useForm <VacationsModel>();
    const [selectedImage, setSelectedImage] = useState();
    const navigate = useNavigate();

    // const imageChange = (e:any) => {
    //   if (e.target.files && e.target.files.length > 0) {
    //     setSelectedImage(e.target.files.value[0]);
    //   }
    // };

    
  
    async function send(vacation:VacationsModel) {
        try {
            console.log(vacation)
            await vacationsService.addVacation(vacation)
            alert("vacation has been added")
            navigate("/vacations");
        }
        catch(err: any) {
            alert(err.message);
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
