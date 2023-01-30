// import { makeStyles } from '@mui/material';
import { AccountCircleRounded, GitHub, Instagram, LinkedIn, Person, Person2Rounded, Person2TwoTone, PersonPinCircleRounded, VerifiedUser, WebStories } from '@mui/icons-material';
import { AppBar, Box, Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//     footer: {
//         backgroundColor: theme.palette.primary.main,
//         width: `100%`,
//         position: "relative",
//         overflow: "hidden",
//         marginTop: "6em",
//         padding: "2em 0 ",
//     },
//     link: {
//         fontSize: "1.25em",
//         color: "#fff",
//         "&:hover": {
//             color: theme.palette.info.main,
//         },
//     },
//     copylight: {
//         color: "#fff",
//         fontSize: "1em",
//         "&:hover": {
//             color: theme.palette.info.main,
//         },
//     },
// }));

const socialMedia = {
    instagram: "https://www.instagram.com/_string01/",
    linkedin: "https://www.linkedin.com/in/ayush-kapoor-69330a202/",
    github:
        "https://github.com/ayush391",
    portfolio: "https://ayush391.github.io/portfolio_website/",

};

const path = [
    { name: "Home", link: "/" },
    { name: "Signup", link: "/signup" },
];

const Footer = () => {

    return (
        <footer>
            <AppBar color='secondary' position='static' sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: '2rem' }}>
                <Typography variant='body1' textAlign='center'>
                    Follow me on
                </Typography>
                <Box sx={{ borderBottom: '5px solid green', }}>
                    <IconButton size='large' component='a' href={socialMedia.portfolio} target='_blank'>
                        <AccountCircleRounded fontSize='large' sx={{ color: 'cyan' }} />
                    </IconButton>
                    <IconButton size='large' component='a' href={socialMedia.linkedin} target='_blank'>
                        <LinkedIn fontSize='large' sx={{ color: '#0072b1' }} />
                    </IconButton>
                    <IconButton size='large' component='a' href={socialMedia.github} target='_blank'>
                        <GitHub fontSize='large' sx={{}} />
                    </IconButton>
                    <IconButton size='large' component='a' href={socialMedia.instagram} target='_blank'>
                        <Instagram fontSize='large' sx={{ color: '#962fbf ' }} />
                    </IconButton>
                </Box>
                <Box sx={{ paddingTop: '2rem' }}>
                    <Typography variant='body1' textAlign='center'>
                        Created By
                    </Typography>
                    <Typography variant='h6' textAlign='center' fontWeight='bolder'>
                        Ayush Kapoor
                    </Typography>
                    <Typography variant='caption' textAlign='center'>
                        © All rights reserved
                    </Typography>

                </Box>


            </AppBar>
        </footer>
    )
}

export default Footer