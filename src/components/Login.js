import React from "react";
import Img from '../assets/graph.png';
import { Stack, TextField, Button, Box, Link, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

const styles = {
    LoginBtn: {
        bgcolor: "#043353",
        width: "40%",
        marginTop: "1rem",
        fontSize: ".9rem",
        padding: "8px 12px",
        textTransform: "capitalize"
    },
    HeroBox: {
        textAlign: "center",
        margin: "1rem",
        fontWeight: "500",
        fontSize: "20px"
    },
    RegisterInputStack: {
        background: '#F7F7F7',
        padding: "2rem 1rem",
        borderRadius: "8px",
        margin: "1rem",
        marginTop: "0rem"
    },
    HeroTitle: {
        textAlign: 'center',
        width: '18ch',
        margin: 'auto'
    },
    HeroSubtitle: {
        textAlign: 'center',
        width: '27ch',
        margin: 'auto',
        marginTop: ".5rem",
        color: '#7A848C',
        fontWeight: 300,
        fontSize: "14px",
        lineHeight: 1.6,
    },
    FooterText: {
        color: "#7A848C",
        textAlign: 'center',
        paddingTop: "2rem",
        fontSize: '14px'
    }
}

const Login = () => {

    const initialState = {
        phoneNumber: '',
        password: '',
    }

    const [formData, setFormData] = React.useState(initialState);

    const handleFormChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        })
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }


    return (
        <Box mt={2}>
            <Grid container direction={{ sx: 'column', md: 'row' }} justifyContent="center" alignItems="center" mt={3} sx={{ height: "100vh" }}>
                <Grid item xs={12} md={6}>
                    <Box sx={styles.HeroBox}>
                        <img src={Img} alt="Graph" width="220" height="150" />
                        <Box component="p" sx={styles.HeroTitle}>
                            Login with your account
                        </Box>
                        <Box component="p" sx={styles.HeroSubtitle}>
                            Please login for investment, if you want a more money
                        </Box>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} mt={2}>
                    <Stack spacing={2} sx={styles.RegisterInputStack}>
                        <TextField
                            required
                            id="outlined-required"
                            label="Phone Number"
                            placeholder="Enter phone number"
                            name="phoneNumber"
                            value={formData.phoneNumber}
                            onChange={handleFormChange}
                        />
                        <TextField
                            required
                            id="outlined-required"
                            label="Password"
                            placeholder="Please enter password"
                            name="password"
                            value={formData.password}
                            onChange={handleFormChange}
                        />
                        <Stack direction="row" justifyContent="space-between" alignItems="end">
                            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={styles.LoginBtn} onClick={handleFormSubmit}>
                                Login
                            </Button>
                            <Link href="#" underline="always" color="#043353" variant="body2" sx={{ fontWeight: "bold" }}>
                                {'Forgot password?'}
                            </Link>
                        </Stack>
                        <Box sx={styles.FooterText} component="p">
                            New member? <Link href="#" underline="none" color="#043353">
                                {'Register'}
                            </Link>
                        </Box>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Login;