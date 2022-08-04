import React from 'react';
import { Box, Card, Typography, CardActionArea, Stack, Button, Grid } from '@mui/material';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import PersonIcon from '@mui/icons-material/Person';
import Data from '../db/Data';
import Footer from './Footer';

const ProfileTitle = styled(Typography)(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#081F32',
    textAlign: 'center'
}));

const CardForID = styled(Card)(({ theme }) => ({
    color: '#FFFFFF',
    backgroundColor: '#242831',
    padding: '1rem',
    borderRadius: '0rem'
}));

const IdTypography = styled(Typography)(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '12px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end'
}));

const GridItem = styled(Typography)(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '11px',
}));

const Profile = () => {
    return (
        <Box mb={10}>
            <Box m={2}>
                <ProfileTitle>
                    Profile
                </ProfileTitle>
            </Box>
            <CardForID elevation={0}>
                <IdTypography>
                    <PersonIcon sx={{ fontSize: '1rem', paddingRight: '.3rem' }} />
                    My ID: 8989844583
                </IdTypography>
            </CardForID>
            <Grid container >
                {Data.map(item => (
                    <Grid item xs={4} key={item.name}>
                        <Box sx={{ display: 'flex', flexDirection: 'column', padding: '.5rem', margin: '.3rem', alignItems: 'center', justifyContent: 'center' }}>
                            <GridItem color="#081F32">
                                {item.icon()}
                            </GridItem>
                            <GridItem>
                                {item.name}
                            </GridItem>
                        </Box>
                    </Grid>
                ))}
            </Grid>
            <Footer />
        </Box>
    )
}

export default Profile