import React, { useEffect, useState } from 'react'
import Container from '@mui/material/Container'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'

// import bg from '../assets/bg_login.jpg'
import bg from '../assets/blog_bg_new.jpg'
import { loginUser } from '../services/userServices'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import AppContext from '../context/appContext'
import { Typography } from '@mui/material'

// const bg = "https://source.unsplash.com/random/1280x720?purple"

const Login = () => {
    const context = useContext(AppContext)
    const { fetchUserData, handleSnackbarOpen } = context

    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const navigate = useNavigate()

    const handleUserId = (e) => {
        setUserId(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { id: userId, password: password }
        const res = await loginUser(user)
        if (res.status === 200) {
            fetchUserData()
            navigate('/')
        }
        else {
            handleSnackbarOpen('User ID or Password is wrong')
        }

    }
    useEffect(() => { document.title = 'Home - Blog App' }, [])

    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: '100vh' }}>
            <Container maxWidth='xs'>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem', borderRadius: '20px' }}>
                    <CardContent sx={{ textAlign: 'center' }}>
                        <CardHeader
                            title="Login"
                            subheader="to post and view blogs"
                            sx={{ textAlign: 'center' }}
                        />
                        <TextField
                            onChange={handleUserId}
                            value={userId}
                            label="User ID"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        />

                        <TextField
                            onChange={handlePassword}
                            value={password}
                            label="Password"
                            variant='outlined'
                            type='password'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        >

                        </TextField>
                        <Button onClick={handleSubmit} disableElevation fullWidth variant='contained' sx={{ borderRadius: '20px', margin: '2rem 0rem' }}>
                            Login
                        </Button>

                        <Typography
                            color='danger'
                            component={Link}
                            to='/signup'
                            disableElevation
                            fullWidth
                            variant='contained'
                            sx={{ borderRadius: '20px', marginTop: '2rem' }}>
                            Click here to Register
                        </Typography>
                    </CardContent>
                </Card>
            </Container>
            <Box component='img' src={bg} sx={{ position: 'absolute', width: '100%', height: '120vh', overflow: 'hidden', top: '0', objectFit: 'cover', zIndex: '-20' }} />

        </Box >
    )
}

export default Login