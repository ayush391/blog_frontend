import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material'

import React, { useContext } from 'react'
import { AccountCircle, ArticleRounded, CreateRounded, FileCopy, LoginRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import AppContext from '../../context/appContext';
import { logoutUser } from '../../services/userServices';

const Sidebar = (props) => {
    const context = useContext(AppContext)
    const { user, handleSnackbarOpen, setUser } = context

    const handleLogout = () => {
        logoutUser(setUser)
        handleSnackbarOpen('You have been logged out.')
        // setTimeout(() => {
        //     window.location.replace('/')
        // }, 2000)
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
                            <ListItemText primary='All Blogs' />
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
                    {
                        user.id ?
                            <ListItemButton component={Link} to={user.id ? '/user/' + user.id : '/login'}>
                                <ListItemIcon>
                                    <FileCopy />
                                </ListItemIcon>
                                <ListItemText primary='My Blogs' />
                            </ListItemButton>


                            : null
                    }
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
                    <hr></hr>
                    <ListItemButton component={Link} to={user.id ? '/user/' + user.id : '/login'}
                    >
                        <ListItemIcon>
                            <AccountCircle />
                        </ListItemIcon>
                        <ListItemText primary={user.id ? user.id : 'Guest'} />
                    </ListItemButton>
                    {user.id ? <ListItemButton component={Link} to={user.id ? '/user/edituser' : ''}>
                        <ListItemIcon>
                            <FileCopy />
                        </ListItemIcon>
                        <ListItemText primary='Edit Profile' />
                    </ListItemButton> : null}
                </List>

            </Box>
        </SwipeableDrawer>
    )
}

export default Sidebar