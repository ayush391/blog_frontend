import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'

import { convertToHTML } from 'draft-convert';
import { Box, Card, Typography, CardHeader, Avatar, IconButton, CardContent, TextField, Button } from '@mui/material';

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';
import { postBlog } from '../services/blogServices';

const initialBlog = {
    blogTitle: '',
    blogImg: '',
    blogDesc: '',
}

const AddBlog = () => {
    const [blog, setBlog] = useState(initialBlog)

    const handleTitle = (e) => {
        setBlog({ ...blog, blogTitle: e.target.value })
    }
    const handleImgUrl = (e) => {
        setBlog({ ...blog, blogImg: e.target.value })
    }

    const handleChange = (editorContents) => {
        setBlog({ ...blog, blogDesc: editorContents })
    }

    const handleSubmit = () => {
        postBlog(blog)
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
                    <Box>
                        <TextField
                            value={blog.blogImg}
                            onChange={handleImgUrl}
                            label='Image Url'
                            type='text'
                            margin='normal'
                            color='secondary'
                            placeholder='Paste blog image URL here'
                            fullWidth />
                        <Box sx={{ border: '2px dashed grey', borderRadius: '5px' }}>
                            <Typography textAlign='center' sx={{ color: 'grey', padding: '1rem' }}>
                                Image Preview
                            </Typography>
                        </Box>
                    </Box>
                    <Box sx={{ marginTop: '1rem', borderRadius: '5px', overflow: 'hidden' }}>
                        <SunEditor placeholder='Start Typing...'
                            height='400px'
                            onChange={handleChange}
                            setOptions={{ buttonList: buttonList.basic }}
                        />
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default AddBlog