import { Box, Divider, List, ListItem, ListItemButton, ListItemIcon, ListItemText, SwipeableDrawer } from '@mui/material'

import React from 'react'
import { ArticleRounded, CreateRounded, LoginRounded } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const Sidebar = (props) => {
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
                        <ListItemButton component={Link} to='/login'>
                            <ListItemIcon>
                                <CreateRounded />
                            </ListItemIcon>
                            <ListItemText primary='Write' />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to='/login'>
                            <ListItemIcon>
                                <LoginRounded></LoginRounded>
                            </ListItemIcon>
                            <ListItemText primary='Login' />
                        </ListItemButton>
                    </ListItem>
                </List>

            </Box>
        </SwipeableDrawer>
    )
}

export default Sidebar