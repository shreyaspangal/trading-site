import React from 'react';
import Footer from './Footer';
import { Box, Typography } from '@mui/material';

const Team = () => {
    return (
        <>
            <Box sx={{ display: 'flex', justifyContent: "center", alignItems: 'center', height: '50vh' }}>
                <Typography component="h1" sx={{fontSize: '32px', letterSpacing: '5px'}}>
                    Team
                </Typography>
            </Box>
            <Footer />
        </>
    )
}

export default Team