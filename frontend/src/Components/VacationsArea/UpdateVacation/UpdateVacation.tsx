import { Box, Button, TextField } from "@mui/material";
import "./UpdateVacation.css";
import { useForm } from "react-hook-form";
import VacationsModel from "../../../Models/VacationModel";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import vacationsService from "../../../Services/VactionsService";
import appConfig from "../../../Utils/appConfig";

function UpdateVacation(): JSX.Element {
   
    const {handleSubmit , register, formState ,setValue} = useForm <VacationsModel>();
    const [selectedImage, setSelectedImage] = useState();
    
    const [vacation, setVacation] = useState<VacationsModel>()
    const navigate = useNavigate();
    const params = useParams();
   

  useEffect(()=>{
    const vacationCode = + params.vacationCode
    vacationsService.getVacationByCode(vacationCode)
    .then(vacation => {
      setValue("vacationCode", vacation.vacationCode);
      setValue("destination", vacation.destination);
      setValue("description", vacation.description);
      // setValue("startDate", vacation.startDate);
      // setValue("endDate", vacation.endDate);
      // setValue("price", vacation.price);
      // setValue("imageFile", vacation.imageFile);
      setVacation(vacation)
      console.log(vacationCode)
  })
  .catch(err => alert(err.message));
  },[])
    

  
    async function update() {
        try {
            console.log(vacation)
            await vacationsService.update(vacation)
            alert("vacation has been updated")
            navigate("/vacations");
        }
        catch(err: any) {
            alert(err.message);
        }
    }
    // const imageChange = (e:any) => {
    //   if (e.target.files && e.target.files.length > 0) {
    //     setSelectedImage(e.target.files[0]);
    //   }
    // };

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
       <label>Image: </label>
                <img src={vacation && appConfig.vacationImageUrl + vacation?.imageFile}/>
                <input type="file" accept="image/*"  defaultValue={vacation?.imageFile} {...register("image")} />

       {/* <input
            type="file"        
            accept="image/*"
             {...register("image")}
         
          /> */}
       <Box sx={{ '& button': { m: 1 } }}>
      
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


