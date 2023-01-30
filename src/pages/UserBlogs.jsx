import { Box, Card, Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import Post from '../components/blog/Post'
import PageSkeleton from '../components/blog/skeletons/page/PageSkeleton'
import AppContext from '../context/appContext'
import { userBlogs } from '../services/blogServices'


const UserBlogs = () => {
    const context = useContext(AppContext)
    const { user } = context

    const [blogs, setBlogs] = useState([])
    const [empty, setEmpty] = useState(false)
    const [allowEdit, setAllowEdit] = useState(false)
    const params = useParams()

    const { userId } = params


    useEffect(() => {
        const res = userBlogs(userId, setBlogs)
        setEmpty(res)
        setAllowEdit(user.id == userId)
    }, [user, userId])

    useEffect(() => { document.title = 'User Blogs - Blog App' }, [])

    return (
        <Container maxWidth='md'>

            {blogs.length ? blogs.map((blog) => {
                return (
                    <Box key={blog['_id']} to={'/blog/' + blog['_id']} sx={{ textDecoration: 'none' }}>
                        <Post blog={blog} editable={allowEdit} />
                    </Box>
                )
            }) : (empty ? <Typography variant='h5' textAlign='center'>No blogs to show 😔</Typography> :
                <PageSkeleton />
            )
            }

        </Container>
    )
}

export default UserBlogs