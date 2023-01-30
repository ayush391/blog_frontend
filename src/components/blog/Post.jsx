import { ArrowForwardIosRounded, Delete, Edit } from '@mui/icons-material'
import { Avatar, Card, CardContent, CardHeader, CardMedia, Typography, Box, CardActions, Button, Chip } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Link } from 'react-router-dom'

import default_blog_img from '../../assets/blog_default.jpg'
import AppContext from '../../context/appContext'
import { removeBlog } from '../../services/blogServices'


const Post = (props) => {
    const context = useContext(AppContext)
    const { handleSnackbarOpen } = context

    const [removed, setRemoved] = useState(false)
    const handleRemove = async () => {
        const res = await removeBlog(props.blog['_id'])
        if (res == 200) {
            handleSnackbarOpen("Blog removed successfully")
            setRemoved(true)
        }
        else {
            handleSnackbarOpen("An error occured")
        }
    }

    return (
        removed ? (<></>) :
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
                            <Avatar component={Link}
                                to={'/user/' + props.blog.userId}
                                sx={{ bgcolor: 'violet', textDecoration: 'none' }}
                            >
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
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <Typography variant='caption'>
                                {props.blog.blogSummary}
                            </Typography>
                            <Button variant='normal' size='small' component={Link} to={'/blog/' + props.blog._id}
                                sx={{
                                    fontWeight: 'bold'
                                }}
                            >
                                Read More
                                <ArrowForwardIosRounded fontSize='smaller' />
                            </Button>
                        </Box>

                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '0.5rem' }}>
                            <Chip
                                label={props.blog.category}
                                color='secondary'
                            />
                            <Typography variant='caption' color='grey'>
                                {new Date(props.blog.createdAt).toDateString()}
                            </Typography>
                        </Box>
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
                {
                    props.editable ? (<CardActions sx={{ display: 'flex', justifyContent: 'center' }}>
                        <Button fullWidth component={Link} to={'/editblog/' + props.blog['_id']} color='warning'><Edit />Edit</Button>
                        <Button fullWidth component={Link} onClick={handleRemove} color='danger'><Delete />Remove</Button>
                    </CardActions>) : null
                }
            </Card >
    )
}

export default Post