import { Typography } from '@mui/material'
import React from 'react'
import PostSkeleton from '../components/PostSkeleton'

const PageSkeleton = () => {
    return (
        <>
            <Typography variant='h7' color='grey' textAlign='center' display='block' sx={{ padding: '0rem' }}>
                Please wait ⏱️.
            </Typography>
            <Typography variant='caption' color='grey' textAlign='center' display='block' sx={{ padding: '0rem' }}>
                This may take a few seconds.(Can't afford a fast server 😿)
            </Typography>
            <PostSkeleton />
            <PostSkeleton />
            <PostSkeleton />
        </>
    )
}

export default PageSkeleton