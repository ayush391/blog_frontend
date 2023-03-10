import React, { useContext, useEffect, useState } from 'react'
import Axios from 'axios'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'

// import bg from '../assets/bg_login.jpg'
import bg from '../assets/blog_bg_new.jpg'

import { createUser, loginUser } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/appContext'

// const bg = "https://source.unsplash.com/random/1280x720?purple"

const defaultUser = {
    id: '',
    name: '',
    summary: '',
    password: ''
}

const Signup = () => {

    const context = useContext(AppContext)
    const { handleSnackbarOpen } = context

    const [user, setUser] = useState(defaultUser)

    const navigate = useNavigate()


    const handleUserId = (e) => {
        setUser({ ...user, id: e.target.value })
    }

    const handlePassword = (e) => {
        setUser({ ...user, password: e.target.value })
    }
    const handleName = (e) => {
        setUser({ ...user, name: e.target.value })
    }
    const handleSummary = (e) => {
        setUser({ ...user, summary: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        const res = await createUser(user)
        if (res.status === 200) {
            handleSnackbarOpen('User created successfully. You will be redirected to login page now')
            setTimeout(() => navigate('/login'), 2000)
        }
        else {
            handleSnackbarOpen(res.data)
        }

    }
    useEffect(() => { document.title = 'Home - Blog App' }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100vh' }}>
            <Container maxWidth='xs'>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem', borderRadius: '20px' }}>
                    <CardContent>
                        <CardHeader
                            title="Signup"
                            subheader="to post and view blogs"
                            sx={{ textAlign: 'center' }}
                        />
                        <TextField
                            onChange={handleUserId}
                            value={user.id}
                            label="User ID"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        />
                        <TextField
                            onChange={handleName}
                            value={user.name}
                            label="Full Name"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        />
                        <TextField
                            onChange={handleSummary}
                            value={user.summary}
                            label="Bio"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            color='secondary'
                            rows={3}
                            multiline
                            fullWidth

                        />


                        <TextField
                            onChange={handlePassword}
                            value={user.password}
                            label="Password"
                            variant='outlined'
                            type='password'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        >

                        </TextField>
                        <Button onClick={handleSubmit} disableElevation fullWidth variant='contained' sx={{ borderRadius: '20px', marginTop: '2rem' }}>
                            Create Account
                        </Button>
                    </CardContent>
                </Card>
            </Container>
            <Box component='img' src={bg} sx={{ position: 'absolute', width: '100%', height: '120vh', overflow: 'hidden', top: '0', objectFit: 'cover', zIndex: '-20' }} />

        </Box >
    )
}

export default Signup