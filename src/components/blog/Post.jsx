import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import default_blog_img from '../../assets/blog_default.jpg'


const Post = (props) => {
    return (
        <Card sx={{ display: 'flex', borderRadius: '30px', margin: '1rem', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' } }}>
            <CardMedia
                component='img'
                height='200'
                image={props.img ? props.img : default_blog_img}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    objectFit: 'cover',
                }}
            />
            <Box sx={{ padding: '0.1rem', display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                            {props.userId[0].toUpperCase()}
                        </Avatar>
                    }
                    title={props.title}
                    subheader={props.userId}
                    sx={{
                        paddingBottom: '0px'
                    }}
                />

                <CardContent sx={{ display: { xs: 'none', xs: 'block', } }}>
                    <Typography variant='body1'>
                        {props.content.slice(0, 150) + '...'}
                    </Typography>
                    <Typography variant='caption' sx={{ color: '#00000095' }}>
                        Sept 24, 2022
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component='img'
                image={props.img ? props.img : default_blog_img}
                sx={{
                    display: { xs: 'none', sm: 'block' },
                    objectFit: 'cover',

                }}
            />
        </Card>
    )
}

export default Post