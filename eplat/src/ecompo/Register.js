import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import {useForm} from 'react-hook-form'
import {DevTool} from '@hookform/devtools'
import './Global.css'
export default function Register() {
    const form=useForm()
    const {register,control,handleSubmit,formState}=form
    const {errors}=formState
    const navigate=useNavigate()
    const handlSubmit = (data) => {
        // event.preventDefault();
        console.log(data)
        navigate('/login')
    }
    const [showPassword, setShowPassword] = React.useState(false)
  const handleClickShowPassword = () => setShowPassword(show => !show)
    return (
        <Container component="main" maxWidth="xs"sx={{height:{xs:'79.7vh',sm:'78.63vh',md:'78.7vh'}}}>
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" noValidate onSubmit={handleSubmit(handlSubmit)} sx={{ mt: 3 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="first-name"
                                name="firstName"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                {...register('firstName',{required:{value:true,message:'First name required'}})}
                            />
                            <p className='error'>{errors.firstName?.message}</p>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="last-name"
                                {...register('lastName')}
                            />
                            <p className='error'>{errors.lastName?.message}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                type='email'
                                {...register('email')}
                            />
                            <p className='error'>{errors.email?.message}</p>
                        </Grid>
                        <Grid item xs={12}>
                            <FormControl variant="outlined" fullWidth required sx={{mb:2}}>
                                <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-password"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Password"
                                    autoComplete='password'
                                    {...register('password')}
                                />
                                <p className='error'>{errors.password?.message}</p>
                            </FormControl>
                            <FormControl variant="outlined" fullWidth required>
                                <InputLabel htmlFor="outlined-adornment-confirmpassword">Confirm Password</InputLabel>
                                <OutlinedInput
                                    id="outlined-adornment-confirmpassword"
                                    type={showPassword ? 'text' : 'password'}
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                    }
                                    label="Confirm Password"
                                    autoComplete='confirmpassword'
                                    {...register('confirmpassword')}
                                />
                                <p className='error'>{errors.confirmpassword?.message}</p>
                            </FormControl>
                        </Grid>
                    </Grid>
                    {/* <NavLink to='/login' style={{textDecoration:'none'}}> */}
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2, textTransform: 'none', fontSize: 20 }}
                    >
                        Register
                    </Button>
                    {/* </NavLink> */}
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to='/login' style={{ textDecoration: 'underline', fontSize: 14 }}>
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
                <DevTool control={control}/>
            </Box>
        </Container>
    );
}