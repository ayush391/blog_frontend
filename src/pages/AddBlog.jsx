import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'

import { convertToHTML } from 'draft-convert';
import { Box, Card, Typography, CardHeader, Avatar, IconButton, CardContent, TextField, Button } from '@mui/material';

import SunEditor, { buttonList } from 'suneditor-react';
import 'suneditor/dist/css/suneditor.min.css';



const AddBlog = () => {
    const [content, setContent] = useState()

    const handleChange = (editorContents) => {
        setContent(editorContents)
    }

    return (
        <Container maxWidth="md">
            <Card sx={{ padding: '1rem' }}>
                <CardHeader
                    avatar={
                        <Avatar aria-label="">

                        </Avatar>
                    }
                    action={
                        <IconButton aria-label="">

                        </IconButton>
                    }
                    title="Add Blog"
                    subheader="Write your heart out"

                />
                <CardContent sx={{ display: 'flex', flexDirection: 'column' }}>
                    <TextField label='Title'
                        type='text'
                        margin='normal'
                        color='secondary'
                        placeholder='Title of the blog'
                        fullWidth />
                    <TextField label='Image Url'
                        type='text'
                        margin='normal'
                        color='secondary'
                        placeholder='Paste blog image URL here'
                        fullWidth />
                    <Box sx={{ marginTop: '1rem', borderRadius: '5px', overflow: 'hidden' }}>
                        <SunEditor placeholder='Start Typing...'
                            height='100%'
                            onChange={handleChange}
                            setOptions={{ buttonList: buttonList.basic }}
                        />
                    </Box>
                    <Box>
                        <Button disableElevation color='secondary' variant='contained' sx={{ borderRadius: '20px', marginTop: '1rem' }}>
                            Post
                        </Button>
                    </Box>
                </CardContent>
            </Card>
        </Container>
    )
}

export default AddBlog