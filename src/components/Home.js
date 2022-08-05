import React from 'react';
import Footer from './Footer';
import { Box, Typography, Stack } from '@mui/material';
import { Link } from 'react-router-dom';
import "./Home.css";

const Home = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '50vh' }}>
                <Typography component="h1" sx={{ fontSize: '32px', letterSpacing: '5px' }}>
                    Home
                </Typography>
            </Box>
            <Stack direction="row" justifyContent="space-around">
                <Link to="/login" className='goToBtn'>Go to Login</Link>
                <Link to="/register" className='goToBtn'>Go to Register</Link>
            </Stack>
            <Footer />
        </>
    )
}

export default Home