import { Card, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet-async'
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
                    <Post key={blog['_id']} title={blog.blogTitle} userId={blog.userId} content={blog.blogDesc} />
                )
            })}

        </Container>
    )
}

export default Dashboard