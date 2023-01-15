import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import Axios from 'axios'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import CardHeader from '@mui/material/CardHeader'

import bg from '../assets/bg_login.jpg'

// const bg = "https://source.unsplash.com/random/1280x720?purple"
const Header = () => (
    <Helmet>
        <title>Login - Blog App</title>
    </Helmet>
)

const Login = () => {
    const [userId, setUserId] = useState('')
    const [password, setPassword] = useState('')

    const handleUserId = (e) => {
        setUserId(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const user = { id: userId, password: password }
        const url = import.meta.env.VITE_BASE_URL + '/user/login'
        const response = await Axios.post(url, user,)
        console.log(response)
    }
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Header></Header>
            <Container maxWidth='xs'>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem', borderRadius: '20px' }}>
                    <CardContent>
                        <CardHeader
                            title="Login"
                            subheader="to post and view blogs"
                            sx={{ textAlign: 'center' }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
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
                        </Box>
                        <Button onClick={handleSubmit} disableElevation fullWidth variant='contained' color="secondary" sx={{ borderRadius: '20px', marginTop: '2rem' }}>
                            Login
                        </Button>
                    </CardContent>
                </Card>
            </Container>
            <Box component='img' src={bg} sx={{ display: { xs: 'none', lg: 'block' }, width: '80vw', height: '100vh', overflow: 'hidden', backgroundPosition: '50% 50%' }}>

            </Box>
        </Box >
    )
}

export default Login