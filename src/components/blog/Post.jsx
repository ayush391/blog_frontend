import { Avatar, Card, CardContent, CardHeader, Typography } from '@mui/material'
import React from 'react'

const Post = (props) => {
    return (
        <Card sx={{ padding: '1rem', margin: '1rem' }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: 'red' }} aria-label="recipe">
                        R
                    </Avatar>
                }
                title={props.title}
                subheader={props.userId}
            />

            <CardContent>
                <Typography variant='body1'>
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default Post