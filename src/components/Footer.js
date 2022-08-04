import React from 'react';
import {
    Paper, BottomNavigation, BottomNavigationAction,
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';

const Footer = ({ number }) => {
    const [value, setValue] = React.useState(0);

    return (
        < Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%' }} elevation={3} >
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
        </Paper >
    )
}

export default Footer