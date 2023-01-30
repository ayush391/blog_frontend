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

import bg from '../assets/bg_login.jpg'
import { createUser, editUser, getUserInfo, loginUser } from '../services/userServices'
import { useNavigate } from 'react-router-dom'
import AppContext from '../context/appContext'

// const bg = "https://source.unsplash.com/random/1280x720?purple"

const defaultUser = {
    id: '',
    name: '',
    summary: '',
    password: ''
}

const EditUser = () => {

    const context = useContext(AppContext)
    const { user, handleSnackbarOpen } = context

    const [userInfo, setUserInfo] = useState(defaultUser)

    const navigate = useNavigate()


    const fetchUser = async (userid) => {
        const response = await getUserInfo(userid)
        if (response.status === 200) {
            setUserInfo(response.data)
        }
    }


    useEffect(() => {
        //redirect if not logged in
        fetchUser(user.id)

    }, [user])

    // const handleUserId = (e) => {
    //     setUser({ ...userInfo, id: e.target.value })
    // }

    const handlePassword = (e) => {
        setUserInfo({ ...userInfo, password: e.target.value })
    }
    const handleName = (e) => {
        setUserInfo({ ...userInfo, name: e.target.value })
    }
    const handleSummary = (e) => {
        setUserInfo({ ...userInfo, summary: e.target.value })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        console.log(user)
        const res = await editUser(userInfo)
        if (res.status === 200) {
            handleSnackbarOpen('User updated successfully.')
            // setTimeout(() => navigate('/user/' + user.id), 2000)
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
                            // onChange={handleUserId}
                            value={user.id}
                            // label="User ID"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            color='secondary'
                            focused
                            fullWidth
                            disabled
                        />
                        <TextField
                            onChange={handleName}
                            value={userInfo.name}
                            label="Full Name"
                            variant='outlined'
                            type='text'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        />
                        <TextField
                            onChange={handleSummary}
                            value={userInfo.summary}
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
                            value={userInfo.password}
                            label="Password"
                            variant='outlined'
                            type='password'
                            margin='normal'
                            color='secondary'
                            fullWidth

                        >

                        </TextField>
                        <Button onClick={handleSubmit} disableElevation fullWidth variant='contained' sx={{ borderRadius: '20px', marginTop: '2rem' }}>
                            Update
                        </Button>
                    </CardContent>
                </Card>
            </Container>
            <Box component='img' src={bg} sx={{ display: { xs: 'none', lg: 'block' }, width: '80vw', height: '100%', overflow: 'hidden', backgroundPosition: '50% 50%' }} />

        </Box >
    )
}

export default EditUser