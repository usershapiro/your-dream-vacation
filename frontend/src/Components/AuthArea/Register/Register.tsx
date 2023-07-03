import "./Register.css";

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {  NavLink, useNavigate } from "react-router-dom";
import UserModel from "../../../Models/Users";
import { useForm } from "react-hook-form";
import AuthService from "../../../Services/AuthService";

function AuthMenu(): JSX.Element {
    
    const { register, handleSubmit,formState } = useForm<UserModel>();
    const navigate = useNavigate();
   

    async function send(user: UserModel) {

        try {
            await AuthService.register(user);
            // notifyService.success("Welcome!");
            
             alert("welcome!!!")
      
            navigate("/vacations");
        }
        catch(err: any) {
            // notifyService.error(err);
            alert(err)
        }
    }
    
const defaultTheme = createTheme();
    return (
        <div className="Register">
			 <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://source.unsplash.com/random?wallpapers)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
         
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Register
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit(send)} sx={{ mt: 1 }}>
           
            <TextField
                margin="normal"
                required
                fullWidth
                id="firstName"
                label="First Name "
                name="firstName"
                autoComplete="firstName"
                autoFocus
                {...register("firstName",UserModel.firstNameValidation)}
                />
              <span>{formState.errors.firstName?.message}</span>
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lasttName"
                autoComplete="lasttName"
                autoFocus
                {...register("lastName",UserModel.lastNameValidation)}
              /><span>{formState.errors.lastName?.message}</span>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                type="email"
                autoFocus
                {...register("email",UserModel.emailValidation)}
              /><span>{formState.errors.email?.message}</span>
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                {...register("password",UserModel.passwordValidation)}
              />
             <span> {formState.errors.password?.message}</span><br/>
             
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Register
              </Button>
              <Grid container>
                {/* <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid> */}
                <Grid item>
                Already a member?
                  <NavLink to="/login"> Log In</NavLink>
                 </Grid>
              </Grid>
            
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
        </div>
    );
}

export default AuthMenu;

