import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
import { AccountCircle } from '@mui/icons-material';
import { Link } from 'react-router-dom';


export default function Navbar() {
    const [openSidebar, setOpenSidebar] = React.useState(false)
    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Sidebar open={openSidebar} toggleDrawer={toggleSidebar} />
            <AppBar position="static" color='transparent' elevation={0}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        noWrap
                        component={Link}
                        to='/'
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' }, textDecoration: 'none' }}
                    >
                        Blog App
                    </Typography>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        // onClick={handleMenu}
                        color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                    {/* <Menu
                        id="menu-appbar"
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        keepMounted
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right',
                        }}
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                    </Menu> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}