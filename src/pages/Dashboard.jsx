import { Box, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

import Post from '../components/blog/Post'
import PageSkeleton from '../components/blog/skeletons/page/PageSkeleton'


const Dashboard = () => {

    const [blogs, setBlogs] = useState([])
    const fetchAllBlogs = async () => {
        const url = import.meta.env.VITE_BASE_URL + '/blog/fetchall'
        const response = await axios.get(url)
        setBlogs(response.data)
    }
    useEffect(() => { fetchAllBlogs() }, [])

    useEffect(() => { document.title = 'Home - Blog App' }, [])

    return (
        <Container maxWidth='md'>

            {blogs.length ? blogs.map((blog) => {
                return (
                    <Box key={blog['_id']} to={'/blog/' + blog['_id']} sx={{ textDecoration: 'none' }}>
                        <Post blog={blog} />
                    </Box>
                )
            }) :
                <PageSkeleton />
            }
            <Typography variant='caption' color='grey' textAlign='center' display='block' sx={{ padding: '5rem' }}>
                Nothing more to show 🥹
            </Typography>
        </Container>
    )
}

export default Dashboard