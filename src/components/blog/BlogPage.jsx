import { Avatar, Box, Card, CardHeader, Container, Typography } from '@mui/material'
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
                    {blog.blogTitle}
                </Typography>
                <Typography variant='caption' color='grey'>
                    {new Date(blog.createdAt).toLocaleString()}
                </Typography>
                <Box component='img' src={blog.blogImg}>

                </Box>
            </Box>
            <Box dangerouslySetInnerHTML={{ '__html': blog.blogDesc }}>
            </Box >
            <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2rem', padding: '1rem 1rem', borderRadius: '20px' }}>
                <Avatar sx={{ bgcolor: 'violet', marginRight: '0.5rem', width: '4rem', height: '4rem' }}>A</Avatar>
                <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                    <Typography variant='subtitle1' >
                        Ayush Kapoor
                    </Typography>

                    <Typography variant='caption' sx={{ color: '#FFFFFF80' }}>
                        From Austria; specialised in analysis of contemporary warfare; working as author, illustrator, and book-series-editor for Helion & Co.
                    </Typography>
                </Box >
            </Card >
        </Container >
    )
}

export default BlogPage