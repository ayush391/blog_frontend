import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'

import { convertToHTML } from 'draft-convert';
import { Box, Card, Typography, CardHeader, Avatar, IconButton, CardContent, TextField, Button, FormControl, InputLabel, Select, MenuItem, Snackbar } from '@mui/material';

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { getCategories, postBlog } from '../services/blogServices';
import { useContext } from 'react';
import AppContext from '../context/appContext';
import { redirect, useNavigate } from 'react-router-dom';

const initialBlog = {
    blogTitle: '',
    blogImg: '',
    blogSummary: '',
    blogCategory: 'General',
    blogDesc: '',
}

const AddBlog = () => {

    const context = useContext(AppContext)
    const { user } = context

    const [blog, setBlog] = useState(initialBlog)
    const [categories, setCategories] = useState([])

    const navigate = useNavigate()


    const fetchCategories = async () => {
        const response = await getCategories()
        setCategories(response)
        console.log(response)
    }
    useEffect(() => {
        if (user.id) {
            fetchCategories()
        }
        else {
            navigate('/login')
        }
    }, [user])

    const handleTitle = (e) => {
        console.log(blog)
        setBlog((blog) => ({ ...blog, blogTitle: e.target.value }))
    }
    const handleSummary = (e) => {
        console.log('summ Changed')
        setBlog((blog) => ({ ...blog, blogSummary: e.target.value }))
    }
    const handleImgUrl = (e) => {
        console.log(blog)
        setBlog((blog) => ({ ...blog, blogImg: e.target.value }))
    }

    const handleCategory = (e) => {
        console.log(blog)
        setBlog((blog) => ({ ...blog, category: e.target.value }))
        console.log(blog)
    }
    const handleChange = (editorContents) => {
        console.log(blog)
        setBlog((blog) => ({ ...blog, blogDesc: editorContents }))
    }

    const handleSubmit = () => {
        const status = postBlog(blog)
        if (status == 200) {
            handleSnackbarOpen("Changes been saved")
        }
        else {
            handleSnackbarOpen("An error occured")
        }
    }

    const [snackbarOpts, setSnackbarOpts] = useState({ open: false, message: 'Changes Saved' })

    const handleSnackbarOpen = (message) => {
        setSnackbarOpts({ open: true, message })
    }
    const handleSnackbarClose = () => {
        setSnackbarOpts({ ...snackbarOpts, open: false })
    }
    return (
        <Container maxWidth="md">
            <Card sx={{ padding: '1rem', borderRadius: '20px' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="">

                        </Avatar>
                    }
                    action={
                        <Button onClick={handleSubmit} disableElevation color='secondary' variant='contained' sx={{ borderRadius: '20px', marginTop: '1rem' }}>
                            Post
                        </Button>
                    }
                    title="Add Blog"
                    subheader="Write your heart out"
                >

                </CardHeader>
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField
                        value={blog.blogTitle}
                        onChange={handleTitle}
                        label='Title'
                        type='text'
                        margin='normal'
                        color='secondary'
                        placeholder='Title of the blog'
                        fullWidth />
                    <TextField
                        value={blog.blogSummary}
                        onChange={handleSummary}
                        label='Summary'
                        type='text'
                        margin='normal'
                        color='secondary'
                        placeholder='Summary of the blog'
                        fullWidth
                        multiline
                        sx={{ marginTop: '1rem' }}
                    />
                    <TextField
                        value={blog.blogImg}
                        onChange={handleImgUrl}
                        label='Image Url'
                        type='text'
                        margin='normal'
                        color='secondary'
                        placeholder='Paste blog image URL here'
                        fullWidth />

                    <FormControl sx={{ marginTop: '1rem' }}>
                        <InputLabel
                            id='labelCategory'
                            color='secondary'
                        >
                            Category
                        </InputLabel>
                        <Select
                            value={blog.category}
                            defaultValue='General'
                            label='Category'
                            onChange={handleCategory}
                            margin='normal'
                            color='secondary'
                            fullWidth
                        >
                            {
                                categories.map((category, idx) => {
                                    return (<MenuItem key={idx} value={category.name}>{category.name}</MenuItem>)
                                })
                            }
                        </Select>
                    </FormControl>
                    <Box sx={{ marginTop: '1rem', borderRadius: '5px', overflow: 'hidden' }}>
                        <SunEditor placeholder='Start Typing...'
                            height='400px'
                            onChange={handleChange}
                            setOptions={{ buttonList: buttonList.basic }}
                            defaultValue=''
                        />
                    </Box>
                </CardContent>
            </Card>
            <Snackbar
                open={snackbarOpts.open}
                message={snackbarOpts.message}
                autoHideDuration={3000}
                onClose={handleSnackbarClose}
            />
        </Container>
    )
}

export default AddBlog