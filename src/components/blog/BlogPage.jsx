import { Avatar, Box, Card, Container, Skeleton, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getBlog } from '../../services/blogServices'
import UserProfileSmall from '../common/UserProfileSmall'

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
            <Box sx={{ display: 'flex', flex: 1, justifyContent: 'right' }}>
                {blog.blogTitle ? <UserProfileSmall userid={blog.userId} /> :
                    <Skeleton width='100%' height={100} />
                }
            </Box>
        </Container >
    )
}

export default BlogPage