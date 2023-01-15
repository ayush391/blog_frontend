import { Card, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet'
import Post from '../components/blog/Post'

const Header = () => (
    <Helmet>
        <title>Dashboard - Blog App</title>
    </Helmet>
)

const Dashboard = () => {
    const [blogs, setBlogs] = useState([])
    const fetchAllBlogs = async () => {
        const url = import.meta.env.VITE_BASE_URL + '/blog/fetchall'
        const response = await axios.get(url)
        setBlogs(response.data)
    }
    useEffect(() => { fetchAllBlogs() }, [])
    return (
        <Container maxWidth='md'>
            <Header></Header>

            {blogs.map((blog) => {
                return (
                    <Post key={blog['_id']} title={blog.blogTitle} userId={blog.userId} content={blog.blogDesc} />
                )
            })}

        </Container>
    )
}

export default Dashboard