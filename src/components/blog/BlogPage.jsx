import { Avatar, Box, Card, CardHeader, Container, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../services/blogServices'

import style from './style/blogPage.module.css'

const BlogPage = () => {
    const params = useParams()

    const [blog, setBlog] = useState({})
    const fetchBlog = async () => {
        const data = await getBlog(params.blogId)
        setBlog(data)
    }
    useEffect(() => { fetchBlog() }, [])

    return (
        <Container maxWidth='md'>
            <Box marginBottom={2}>
                <Typography variant='h4' fontWeight='900'>
                    {blog.blogTitle ?
                        blog.blogTitle :
                        <Skeleton />
                    }
                </Typography>
                <Typography variant='caption' color='grey'>
                    {blog.createdAt ? new Date(blog.createdAt).toLocaleString() :
                        <Skeleton width={200} />
                    }
                </Typography>
                {
                    blog.blogImg ?
                        <Box component='img' src={blog.blogImg} /> :
                        <Skeleton height={300} />
                }
            </Box>
            {
                blog.blogDesc ?
                    <Box dangerouslySetInnerHTML={{ '__html': blog.blogDesc }} /> :
                    <Skeleton height={500} />
            }
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2rem', padding: '1rem 1rem', borderRadius: '20px' }}>
                <Avatar sx={{ bgcolor: 'violet', marginRight: '0.5rem', width: '4rem', height: '4rem' }}>A</Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                    <Typography variant='subtitle1' >
                        {blog.userId ? blog.userId : <Skeleton width={150} />}
                    </Typography>

                    <Typography variant='caption' sx={{ color: '#FFFFFF80' }}>
                        {blog.userSummary ? blog.userId : <Skeleton width={200} />}
                    </Typography>
                </Box >
            </Card >
        </Container >
    )
}

export default BlogPage