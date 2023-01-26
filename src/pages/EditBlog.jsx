import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'

import { convertToHTML } from 'draft-convert';
import { Box, Card, Typography, CardHeader, Avatar, IconButton, CardContent, TextField, Button } from '@mui/material';

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { postBlog, getBlog, updateBlog } from '../services/blogServices';
import { useParams } from 'react-router-dom';

let initialBlog = {
    blogTitle: 'default',
    blogSummary: 'default',
    blogImg: 'default',
    blogDesc: 'dafault',
}

const EditBlog = () => {
    const params = useParams()

    const fetchBlog = async (id) => {
        const response = await getBlog(id)
        setBlog(response)
        console.log(response)
    }

    useEffect(() => {
        fetchBlog(params.blogId)
    }, [])

    const [blog, setBlog] = useState({})


    const handleTitle = (e) => {
        console.log('title Changed')
        setBlog({ ...blog, blogTitle: e.target.value })
    }
    const handleSummary = (e) => {
        console.log('summ Changed')
        setBlog({ ...blog, blogSummary: e.target.value })
    }
    const handleImgUrl = (e) => {
        console.log('img Changed')
        setBlog({ ...blog, blogImg: e.target.value })
    }

    const handleChange = (editorContents) => {
        setBlog({ ...blog, blogDesc: editorContents })
    }

    const handleSubmit = () => {
        console.log(blog)
        updateBlog(params.blogId, blog)
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
                        <Button onClick={handleSubmit}
                            disableElevation
                            color='secondary'
                            variant='contained'
                            sx={{ borderRadius: '20px', marginTop: '1rem' }}>
                            Save Changes
                        </Button>
                    }
                    title="Edit Blog"
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
                        focused
                        fullWidth />
                    <TextField
                        value={blog.blogSummary}
                        onChange={handleSummary}
                        label='Summary'
                        type='text'
                        margin='normal'
                        color='secondary'
                        placeholder='Summary of the blog'
                        focused
                        fullWidth
                    />
                    <Box>
                        <TextField
                            value={blog.blogImg}
                            onChange={handleImgUrl}
                            label='Image Url'
                            type='text'
                            margin='normal'
                            color='secondary'
                            placeholder='Paste blog image URL here'
                            focused
                            fullWidth
                        />
                        <Box sx={{ border: '2px dashed grey', borderRadius: '5px' }}>
                            <Typography textAlign='center' sx={{ color: 'grey', padding: '1rem' }}>
                                Image Preview
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '1rem', borderRadius: '5px', overflow: 'hidden' }}>
                        <SunEditor placeholder='Start Typing...'
                            autoFocus={false}
                            height='400px'
                            onChange={handleChange}
                            setOptions={{ buttonList: buttonList.basic }}
                            setContents={blog.blogDesc}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default EditBlog