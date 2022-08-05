import React from "react";
import Img from '../assets/graph.svg';
import { Stack, TextField, Button, Box, Grid } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Link } from 'react-router-dom';
import "./Register.css";

const styles = {
    RegisterBtn: {
        bgcolor: "#043353",
        width: "50%",
        marginTop: "1rem",
        fontSize: "1rem",
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
        padding: "2rem",
        borderRadius: "8px",
        margin: "1rem",
        marginTop: "0rem"
    },
    HeroTitle: {
        textAlign: 'center',
        width: '18ch',
        margin: 'auto'
    },
    FooterText: {
        color: "#7A848C",
        fontSize: '14px',
    }
}

const Register = () => {
    const initialState = {
        phoneNumber: '',
        password: '',
        confirmPassword: '',
        invitationCode: ''
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
            <Grid container direction={{ sx: 'column', md: 'row' }} justifyContent="center" alignItems="center" sx={{ height: "100vh" }}>
                <Grid item xs={12} md={6}>
                    <Box sx={styles.HeroBox}>
                        <Box component="p" sx={styles.HeroTitle}>
                            Now is time to Invest your money
                        </Box>
                        <img src={Img} alt="Graph" width="226" height="151" />
                    </Box>
                </Grid>
                <Grid item xs={12} md={6}>
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
                        {/* <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                            <OutlinedInput
                                id="outlined-adornment-password"
                                type={values.showPassword ? 'text' : 'password'}
                                value={values.password}
                                onChange={handleChange('password')}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="toggle password visibility"
                                            onClick={handleClickShowPassword}
                                            onMouseDown={handleMouseDownPassword}
                                            edge="end"
                                        >
                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                        </FormControl> */}
                        <TextField
                            required
                            id="outlined-required"
                            label="Confirm Password"
                            placeholder="Please confirm password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleFormChange}
                        />
                        <TextField
                            id="outlined-required"
                            label="Invitation Code"
                            placeholder="Ex: Anil"
                            name="invitationCode"
                            value={formData.invitationCode}
                            onChange={handleFormChange}
                        />
                        <Stack>
                            <Button variant="contained" endIcon={<ArrowForwardIosIcon />} sx={styles.RegisterBtn} onClick={handleFormSubmit}>
                                Register
                            </Button>
                            <Box sx={styles.FooterText} component="p">
                                Already have an account? <Link to="/login" className="login-link">
                                    Login
                                </Link>
                            </Box>
                        </Stack>
                    </Stack>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Register;