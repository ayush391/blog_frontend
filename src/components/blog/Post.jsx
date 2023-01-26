import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

import default_blog_img from '../../assets/blog_default.jpg'


const Post = (props) => {
    return (
        <Card sx={{ display: 'flex', borderRadius: '30px', margin: '1rem', justifyContent: 'space-between', flexDirection: { xs: 'column', sm: 'row' } }}>
            <CardMedia
                component='img'
                height='200'
                image={props.blog.blogImg ? props.blog.blogImg : default_blog_img}
                sx={{
                    display: { xs: 'block', sm: 'none' },
                    objectFit: 'cover',
                }}
            />
            <Box sx={{ padding: '0.1rem', display: 'flex', flexDirection: 'column' }}>
                <CardHeader
                    avatar={
                        <Avatar sx={{ bgcolor: 'violet' }} aria-label="recipe">
                            {props.blog.userId[0].toUpperCase()}
                        </Avatar>
                    }
                    title={props.blog.blogTitle}
                    subheader={props.blog.userId}
                    sx={{
                        paddingBottom: '0px'
                    }}
                />

                <CardContent >
                    <Typography variant='caption'>
                        {props.blog.blogSummary}
                        Read More
                    </Typography>
                    <Typography variant='caption' color='grey' display='block' textAlign='right'>
                        {new Date(props.blog.createdAt).toDateString()}
                    </Typography>
                </CardContent>
            </Box>
            <CardMedia
                component='img'
                image={props.blog.blogImg ? props.blog.blogImg : default_blog_img}

                sx={{
                    display: { xs: 'none', sm: 'block' },
                    width: '250px',
                    // objectFit: 'cover',

                }}
            />
            <CardActions>
                <Button component={Link} to={'/editblog/' + props.blog['_id']}>Edit</Button>
            </CardActions>
        </Card>
    )
}

export default Post