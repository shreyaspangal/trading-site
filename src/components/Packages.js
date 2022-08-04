import React from 'react';
import '../App.css';
import TelegramIcon from '../assets/telegram-logo.svg';
import RechargeIcon from '../assets/power-bank.svg';
import WithdrawlIcon from '../assets/withdraw.svg';
import CompanyIcon from '../assets/office-building.svg';
import { Box, Card, Typography, CardActionArea, Stack, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import Footer from './Footer';

const PackageTitle = styled(Typography)(({ theme }) => ({
    marginBottom: '.5rem',
    fontFamily: 'Inter',
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'black'
}));

const PackageText = styled(Typography)(({ theme }) => ({
    marginBottom: '.5rem',
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 'light',
}));

const PackageTotal = styled(Typography)(({ theme }) => ({
    fontFamily: 'Inter',
    fontSize: '14px',
    fontWeight: 'bold',
}));


const CardBorderRadius = '8px';
const CardBg = '#F7F7F7';
const styles = {
    CardForIcon: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '66px',
        width: '66px',
        borderRadius: '12.49px',
    },
    CardIconTitle: {
        fontSize: "10px",
        textAlign: 'center',
        marginTop: '.5rem'
    },
    InvestNowBtn: {
        bgcolor: "#043353",
        width: "124px",
        height: '33px',
        marginTop: "1rem",
        fontSize: "14px",
        padding: "8px 12px",
        textTransform: "capitalize"
    },
    PackageCard: {
        padding: '1rem',
        backgroundColor: CardBg,
        borderRadius: CardBorderRadius,
    },
}

const Packages = () => {
    return (
        <Box sx={{ margin: "1rem 1.5rem", marginBottom: '5rem' }}>
            <Card elevation={4} sx={{ padding: '1rem', borderRadius: CardBorderRadius, width: '343px', maxWidth: '90%' }}>
                <Typography component="p" mb={2} sx={{ fontSize: '14px' }}>
                    Best Investment Plans
                </Typography>
                <Stack direction="row" justifyContent="space-between">
                    <Box>
                        <CardActionArea>
                            <Card sx={styles.CardForIcon} elevation={2}>
                                <img src={TelegramIcon} width="32px"
                                    alt="telegram icon" />
                            </Card>
                        </CardActionArea>
                        <Typography component="p" sx={styles.CardIconTitle}>
                            Telegram
                        </Typography>
                    </Box>
                    <Box>
                        <CardActionArea>
                            <Card sx={styles.CardForIcon} elevation={2}>
                                <img src={RechargeIcon} width="32px" alt="recharge icon" />
                            </Card>
                        </CardActionArea>
                        <Typography component="p" sx={styles.CardIconTitle}>
                            Recharge
                        </Typography>
                    </Box>
                    <Box>
                        <CardActionArea>
                            <Card sx={styles.CardForIcon} elevation={2}>
                                <img src={WithdrawlIcon} width="32px" alt="withdrawl icon" />
                            </Card>
                        </CardActionArea>
                        <Typography component="p" sx={styles.CardIconTitle}>
                            Withdrawl
                        </Typography>
                    </Box>
                    <Box>
                        <CardActionArea>
                            <Card sx={styles.CardForIcon} elevation={2}>
                                <img src={CompanyIcon} width="32px" alt="company icon" />
                            </Card>
                        </CardActionArea>
                        <Typography component="p" sx={styles.CardIconTitle}>
                            Company
                        </Typography>
                    </Box>
                </Stack>
            </Card>
            {/* Trading packages starts here */}
            <Stack mt={2} spacing={2}>
                {/* Card 1 */}
                <Card sx={styles.PackageCard}>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageTitle>
                            Trading Package
                        </PackageTitle>
                        <PackageTitle>
                            600
                        </PackageTitle>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageText color="#7A848C">
                            Daily income
                        </PackageText>
                        <PackageText color="#22903A">
                            0.5% - 1.5%
                        </PackageText>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageText color="#7A848C">
                            Revenue Cycle
                        </PackageText>
                        <PackageText color="#7A848C">
                            200 Days
                        </PackageText>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageTotal
                            color="#1A1A1A">
                            Total Income
                        </PackageTotal>
                        <PackageTotal color="#043353">
                            $4,500 Approx
                        </PackageTotal>
                    </Box>
                    <Button variant="contained" sx={styles.InvestNowBtn}>
                        Invest Now
                    </Button>
                </Card>
                {/* Card 2 */}
                <Card sx={styles.PackageCard}>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageTitle>
                            Trading Package
                        </PackageTitle>
                        <PackageTitle>
                            600
                        </PackageTitle>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageText color="#7A848C">
                            Daily income
                        </PackageText>
                        <PackageText color="#22903A">
                            0.5% - 1.5%
                        </PackageText>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageText color="#7A848C">
                            Revenue Cycle
                        </PackageText>
                        <PackageText color="#7A848C">
                            200 Days
                        </PackageText>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageTotal
                            color="#1A1A1A">
                            Total Income
                        </PackageTotal>
                        <PackageTotal color="#043353">
                            $4,500 Approx
                        </PackageTotal>
                    </Box>
                    <Button variant="contained" sx={styles.InvestNowBtn}>
                        Invest Now
                    </Button>
                </Card>
                {/* Card 3 */}
                <Card sx={styles.PackageCard}>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageTitle>
                            Trading Package
                        </PackageTitle>
                        <PackageTitle>
                            600
                        </PackageTitle>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageText color="#7A848C">
                            Daily income
                        </PackageText>
                        <PackageText color="#22903A">
                            0.5% - 1.5%
                        </PackageText>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageText color="#7A848C">
                            Revenue Cycle
                        </PackageText>
                        <PackageText color="#7A848C">
                            200 Days
                        </PackageText>
                    </Box>
                    <Box display="flex" justifyContent="space-between" width="228px">
                        <PackageTotal
                            color="#1A1A1A">
                            Total Income
                        </PackageTotal>
                        <PackageTotal color="#043353">
                            $4,500 Approx
                        </PackageTotal>
                    </Box>
                    <Button variant="contained" sx={styles.InvestNowBtn}>
                        Invest Now
                    </Button>
                </Card>
            </Stack>
            <Footer />
        </Box>
    )
}

export default Packages;