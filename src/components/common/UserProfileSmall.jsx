import { Avatar, Box, Card, CardContent, Skeleton, Typography } from '@mui/material'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getUserInfo } from '../../services/userServices'

const UserProfileSmall = ({ userid }) => {
    const [user, setUser] = useState({
        id: '',
        summary: '',
    })

    useEffect(() => {
        (async () => {
            const userData = await getUserInfo(userid)
            setUser(userData.data)
        })()
    }, [])
    return (
        <Card sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '2rem', padding: '1rem 1rem', borderRadius: '20px' }}>
            <Avatar sx={{ bgcolor: 'violet', marginRight: '0.5rem', width: '5rem', height: '5rem' }}>{user.id[0]}</Avatar>
            <Box sx={{ display: 'flex', flexDirection: 'column', }}>

                <Typography variant='h5' >
                    {user.id}
                </Typography>

                <Typography variant='body1' color='grey'>
                    {user.summary ? user.summary : 'No Summary'}
                </Typography>
            </Box >
        </Card >
    )
}

export default UserProfileSmall