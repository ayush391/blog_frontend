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
import { AccountCircle, Brightness1Rounded, Brightness5Rounded, DarkMode, Edit, LightMode } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';
import { useContext } from 'react';
import AppContext from '../../context/appContext';


export default function Navbar() {
    const context = useContext(AppContext)
    const { user, darkMode, toggleDarkMode } = context

    const [openSidebar, setOpenSidebar] = React.useState(false)
    const toggleSidebar = () => {
        setOpenSidebar(!openSidebar)
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Sidebar open={openSidebar} toggleDrawer={toggleSidebar} />
            <AppBar position="fixed" color='transparent' elevation={0}>
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="text.primary"
                        aria-label="open drawer"
                        sx={{
                            mr: 2,
                            display: {
                                sx: 'block',
                                md: 'none'
                            }
                        }}
                        onClick={toggleSidebar}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Box component={Link} to='/' sx={{ flexGrow: 1, textDecoration: 'none', textAlign: { xs: 'center', md: 'left' } }}
                    >
                        <Typography
                            variant="h5"
                            noWrap
                        >
                            Blog App
                        </Typography>
                    </Box>

                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                        <Button
                            variant='outlined'
                            size="small"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            // onClick={handleMenu}
                            color="secondary"
                            LinkComponent={Link}
                            to='/addblog/'
                            sx={{ textTransform: 'none' }}
                        >
                            <Edit />

                            <Typography marginX={1}>
                                Write
                            </Typography>
                        </Button>
                        <Button
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            // onClick={handleMenu}
                            color="inherit"
                            LinkComponent={Link}
                            to={user.id ? '/user/' + user.id : '/login'}
                            sx={{ textTransform: 'none' }}
                        >
                            <AccountCircle />
                            {
                                user.id ?
                                    <Typography marginX={1}>
                                        {user.id}
                                    </Typography>
                                    :
                                    <Typography marginX={1}>
                                        {"Login"}
                                    </Typography>
                            }
                        </Button>

                    </Box>
                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        onClick={toggleDarkMode}
                        color="inherit"
                    >
                        {darkMode ? <LightMode /> : <DarkMode />}
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}