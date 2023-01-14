import React from 'react'
import Container from '@mui/material/Container'
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import FormLabel from '@mui/material/FormLabel'
import FormGroup from '@mui/material/FormGroup'
import FormHelperText from '@mui/material/FormHelperText'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import InputAdornment from '@mui/material/InputAdornment'
import AccountCircle from '@mui/icons-material/AccountCircleRounded'
import PasswordRounded from '@mui/icons-material/PasswordRounded'
import CardHeader from '@mui/material/CardHeader'
import Avatar from '@mui/material/Avatar'
import IconButton from '@mui/material/IconButton'


const bg = "https://source.unsplash.com/random/1280x720?purple"

const Login = () => {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <Container maxWidth='xs'>
                <Card sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '1rem' }}>
                    <CardContent>
                        <CardHeader
                            title="Login"
                            subheader="to post and view blogs"
                            sx={{ textAlign: 'center' }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* <AccountCircle fontSize='medium' sx={{ marginX: '10px' }}></AccountCircle> */}
                            <TextField
                                id="id"
                                label="User ID"
                                variant='outlined'
                                type='text'
                                margin='normal'
                                color='secondary'
                                fullWidth

                            />
                        </Box>

                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                            {/* <PasswordRounded fontSize='medium' sx={{ marginX: '10px' }}></PasswordRounded> */}
                            <TextField
                                id="id"
                                label="Password"
                                variant='outlined'
                                type='password'
                                margin='normal'
                                color='secondary'
                                fullWidth

                            >

                            </TextField>
                        </Box>
                        <Button disableElevation fullWidth variant='contained' color="secondary" sx={{ borderRadius: '20px', marginTop: '2rem' }}>
                            Login
                        </Button>
                        {/* <FormHelperText></FormHelperText> */}
                    </CardContent>
                </Card>
            </Container>
            <Paper component='img' src={bg} sx={{ display: { xs: 'none', lg: 'block' }, width: '80vw', height: '100vh', overflow: 'hidden', backgroundPosition: '50% 50%' }}>

            </Paper>
        </Box >
    )
}

export default Login