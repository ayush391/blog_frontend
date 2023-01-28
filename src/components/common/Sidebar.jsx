import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material'

import React, { useContext } from 'react'
import { ArticleRounded, CreateRounded, LoginRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AppContext from '../../context/appContext';
import { logoutUser } from '../../services/userServices';

const Sidebar = (props) => {
    const context = useContext(AppContext)
    const { user, handleSnackbarOpen } = context

    const handleLogout = () => {
        logoutUser()
        handleSnackbarOpen('You have been logged out. The page will now refresh')
        setTimeout(() => {
            window.location.replace('/')
        }, 2000)
    }
    return (
        <SwipeableDrawer
            anchor='left'
            open={props.open}
            onClose={props.toggleDrawer}
            onOpen={props.toggleDrawer}
        >
            <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={props.toggleDrawer}
            >
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/'>
                            <ListItemIcon>
                                <ArticleRounded></ArticleRounded>
                            </ListItemIcon>
                            <ListItemText primary='Blogs' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/addblog'>
                            <ListItemIcon>
                                <CreateRounded />
                            </ListItemIcon>
                            <ListItemText primary='Write' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        {user.id ? <ListItemButton onClick={handleLogout}>
                            <ListItemIcon>
                                <LoginRounded></LoginRounded>
                            </ListItemIcon>
                            <ListItemText primary='Logout' />
                        </ListItemButton>
                            :
                            <ListItemButton component={Link} to='/login'>
                                <ListItemIcon>
                                    <LoginRounded></LoginRounded>
                                </ListItemIcon>
                                <ListItemText primary='Login' />
                            </ListItemButton>}
                    </ListItem>
                </List>

            </Box>
        </SwipeableDrawer>
    )
}

export default Sidebar