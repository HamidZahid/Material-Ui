import { AppBar, Typography, Button, Toolbar } from '@mui/material'
import React from 'react'
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';


const Navbar = () => {
    return (
        <AppBar position='sticky'>
            <Toolbar>
                <Typography variant='h5' flexGrow={1} >Hamid Zahid APP </Typography>
                <Button variant='text' color="inherit" startIcon={<LoginIcon />} >Login</Button>
                <Button variant='text' color="inherit" endIcon={<LogoutIcon />}>Logout</Button>

            </Toolbar>
        </AppBar>
    )
}

export default Navbar
