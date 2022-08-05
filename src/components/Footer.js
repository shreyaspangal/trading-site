import React from 'react';
import {
    Paper, BottomNavigation, BottomNavigationAction, Typography, Box, Stack, Button
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import GroupIcon from '@mui/icons-material/Group';
import PersonIcon from '@mui/icons-material/Person';
import { NavLink, Link } from 'react-router-dom';
import "./Footer.css";

const styles = {
    NavItem: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '0 12px',
        fontSize: '12px',
    },
    IconSize: {
        fontSize: '20px',
    },
    IconText: {
        fontSize: '12px',
    }
}

const Footer = ({ number }) => {
    const [value, setValue] = React.useState(0);

    return (
        < Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width: '100%', height: '56px' }} elevation={3} >
            {/* <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                    console.log(event.target)
                }}
            >
                <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                <BottomNavigationAction label="Invite" icon={<PersonAddIcon />} />
                <BottomNavigationAction label="Team" icon={<GroupIcon />} />
                <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
            </BottomNavigation> */}
            <Stack direction="row" justifyContent="space-around" alignItems="center" height="100%">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? 'link-item-active' : 'link-item'
                    }>
                    <Box sx={styles.NavItem}>
                        <HomeIcon sx={styles.IconSize} />
                        <Typography sx={styles.IconText}>
                            Home
                        </Typography>
                    </Box>
                </NavLink>
                <NavLink
                    to="/invitation"
                    className={({ isActive }) =>
                        isActive ? 'link-item-active' : 'link-item'
                    }>
                    <Box sx={styles.NavItem}>
                        <PersonAddIcon sx={styles.IconSize} />
                        <Typography sx={styles.IconText}>
                            Invite
                        </Typography>
                    </Box>
                </NavLink>
                <NavLink
                    to="/team"
                    className={({ isActive }) =>
                        isActive ? 'link-item-active' : 'link-item'
                    }>
                    <Box sx={styles.NavItem}>
                        <GroupIcon sx={styles.IconSize} />
                        <Typography sx={styles.IconText}>
                            Team
                        </Typography>
                    </Box>
                </NavLink>
                <NavLink
                    to="/profile"
                    className={({ isActive }) =>
                        isActive ? 'link-item-active' : 'link-item'
                    }>
                    <Box sx={styles.NavItem}>
                        <PersonIcon sx={styles.IconSize} />
                        <Typography sx={styles.IconText}>
                            Profile
                        </Typography>
                    </Box>
                </NavLink>
            </Stack>
        </Paper >
    )
}

export default Footer