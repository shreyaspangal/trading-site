import React from 'react';
import QrCode from '../assets/qr-code.svg';
import { Box, Typography, Button, CssBaseline, Paper, BottomNavigation, BottomNavigationAction, Card, Stack, FormControl, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

const CardBgColor = '#F5F6F8';

const PageTitle = styled(Typography)(({ theme }) => ({
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '20px'
}));

const InvitationCard = styled(Card)(({ theme }) => ({
    padding: '1rem',
    backgroundColor: CardBgColor,
}));

const InvitationText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
}));

const InvitationCodeText = styled(Typography)(({ theme }) => ({
    fontSize: '18px',
    color: '#043353',
    fontWeight: 'bold'
}));

const CopyBtn = styled(Button)(({ theme }) => ({
    backgroundColor: '#043353',
    width: '84px',
    height: '33px',
    color: 'white',
    textTransform: 'capitalize'
}));

const SmallGreyText = styled(Typography)(({ theme }) => ({
    fontSize: '14px',
    color: '#7A848C'
}));


const Invitation = () => {
    const [value, setValue] = React.useState(0);

    return (
        <Box m={2} mb={10}>
            <CssBaseline />
            <PageTitle mb={2}>
                Invitation
            </PageTitle>
            <InvitationCard elevation={0}>
                <Stack direction="row" justifyContent="space-between">
                    <InvitationText>
                        Invitation Code:
                    </InvitationText>
                    <InvitationCodeText>
                        21h64
                    </InvitationCodeText>
                    <CopyBtn>
                        Copy
                    </CopyBtn>
                </Stack>
            </InvitationCard>
            <InvitationCard elevation={0} sx={{ marginTop: '1rem' }}>
                <Stack spacing={2}>
                    <InvitationText>
                        Invitation Link:
                    </InvitationText>
                    <FormControl sx={{ m: 1, width: '100%' }} variant="outlined">
                        <OutlinedInput
                            sx={{ backgroundColor: '#FFFFFF', height: '40px' }}
                        />
                    </FormControl>
                    <Box sx={{ textAlign: 'right' }}>
                        <CopyBtn>
                            Copy
                        </CopyBtn>
                    </Box>
                </Stack>
            </InvitationCard>
            {/* QR Code */}
            <Box display="flex" justifyContent="center" mt={2}>
                <img src={QrCode} alt='qr code' width="128px" />
            </Box>
            {/* Invitation Rules */}
            <Box mt={3}>
                <SmallGreyText>
                    Invitation Rules
                </SmallGreyText>
                <Card sx={{ padding: '1rem', marginTop: '.7rem' }} elevation={4}>
                    <SmallGreyText>
                        1: Share your registration link to your friend, he will become your team member.
                    </SmallGreyText>
                    <SmallGreyText mt={1}>
                        2: You will get a 33% team invite bonus.
                    </SmallGreyText>
                    <SmallGreyText>
                        Level 1: 28%
                    </SmallGreyText>
                    <SmallGreyText>
                        Level 2: 3%
                    </SmallGreyText>
                    <SmallGreyText>
                        Level 3: 2%
                    </SmallGreyText>
                </Card>
            </Box>
            {/* Graph Section */}
            <Card>

            </Card>
            {/* Footer Navigation*/}
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                    <BottomNavigationAction label="Invite" icon={<PersonAddIcon />} />
                    <BottomNavigationAction label="Team" icon={<GroupIcon />} />
                    <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
                </BottomNavigation>
            </Paper>
        </Box>
    )
}

export default Invitation