import "./Header.css";
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import logo from "../../../Assests/images/detailed-travel-logo_23-2148627268.webp"
import { NavLink, useNavigate } from "react-router-dom";
import HandleAuth from "../../AuthArea/HndleAuth/HandleAuth";
import SearchArea from "../../VacationsArea/SearchArea/SearchArea";


function Header(): JSX.Element {
  const navigate = useNavigate();

    const StyledToolbar = styled(Toolbar)(({ theme }) => ({
        alignItems: 'flex-start',
        // paddingTop: theme.spacing(1),
        // paddingBottom: theme.spacing(2),
        // Override media queries injected by theme.mixins.toolbar
        '@media all': {
          minHeight: 100,
        },
      }));
    
function addMenue(){
  navigate("/additionalMenu")
}


    return (
        <div className="Header ">
   <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <StyledToolbar>
          
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={addMenue}
          >
        
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h5"
            noWrap
            component="div"
            sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
          >
            <img className="img" src={logo} ></img> 
            <HandleAuth/>
          </Typography>
          <IconButton
            size="large"
            aria-label="display more actions"
            edge="end"
            color="inherit"
          >
            <MoreIcon />
          </IconButton>
        </StyledToolbar>
      </AppBar>

    </Box>

   
		  
        </div>
    );
}

export default Header;
