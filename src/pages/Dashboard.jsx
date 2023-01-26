import { Box, Card, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'
import Post from '../components/blog/Post'


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

            {blogs.map((blog) => {
                return (
                    <Box key={blog['_id']} to={'/blog/' + blog['_id']} sx={{ textDecoration: 'none' }}>
                        <Post blog={blog} />
                    </Box>
                )
            })}

        </Container>
    )
}

export default Dashboard