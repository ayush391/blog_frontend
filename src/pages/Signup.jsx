import React, { useEffect, useState } from 'react'
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
import { createUser, loginUser } from '../services/userServices'
import { useNavigate } from 'react-router-dom'

// const bg = "https://source.unsplash.com/random/1280x720?purple"

const defaultUser = {
    id: '',
    name: '',
    password: ''
}

const Signup = () => {

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

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        const res = await createUser(user)
        if (res) {
            navigate('/login')
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
            <Box component='img' src={bg} sx={{ display: { xs: 'none', lg: 'block' }, width: '80vw', height: '100%', overflow: 'hidden', backgroundPosition: '50% 50%' }} />

        </Box >
    )
}

export default Signup