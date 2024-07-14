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
import { IconButton, InputAdornment } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useForm } from 'react-hook-form'
import { DevTool } from '@hookform/devtools'
import './Global.css'
export default function Register() {
    const form = useForm()
    const { register, control, handleSubmit, formState ,watch} = form
    const password=watch('password')
    const { errors } = formState
    const navigate = useNavigate()
    const handlSubmit = (data) => {
        console.log(data)
        navigate('/login')
    }
    const passwordMatch=(value)=>value === password ? undefined : 'Passwords do not match'
    const [showPassword, setShowPassword] = React.useState(false)
    const handleClickShowPassword = () => setShowPassword(show => !show)
    return (
        <Container component="main" maxWidth="xs" sx={{ height: '100vh' }}>
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
                                {...register('firstName', {
                                    required: { value: true, message:'First name is required'}, pattern: {
                                        value
                                            : /^([A-Za-z]+(?: [A-Za-z]+)*)$/, message: 'Only letters are allowed'
                                    }
                                })}
                                error={!!errors.firstName}
                                helperText={errors.firstName?.message}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                {...register('lastName', { required: { value: true, message: 'Last name is required' }, pattern: { value: /^(?:[A-Z]+|[a-z]+)$/, message: 'Only letters are allowed' } })}
                                autoComplete="last-name"
                                error={!!errors.lastName}
                                helperText={errors.lastName?.message}
                            />
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
                                {...register('email', { required: { value: true, message: 'Email is required' }, pattern: { value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})$/, message: 'Invalid email format' } })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField fullWidth required id='password' type={showPassword ? 'text' : 'password'} sx={{ mb: 2 }}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                                label="Password"
                                name='password'
                                {...register('password', { required: { value: true, message: 'Password is required' }, pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[^\s]{8,}$/, message: 'Password must be of min length 8 with atleast one number and a special character' } })}
                                autoComplete='password'
                                error={!!errors.password}
                                helperText={errors.password?.message} />

                            <TextField fullWidth required id='confirmpassword' type={showPassword ? 'text' : 'password'} sx={{ mb: 2 }}
                                InputProps={{
                                    endAdornment:
                                        <InputAdornment position="end">
                                            <IconButton
                                                aria-label="toggle password visibility"
                                                onClick={handleClickShowPassword}
                                                edge="end"
                                            >
                                                {showPassword ? <Visibility /> : <VisibilityOff />}
                                            </IconButton>
                                        </InputAdornment>
                                }}
                                label="Confirm Password"
                                name='confirmpassword'
                                {...register('confirmpassword', { required: { value: true, message: 'Confirm your password' },validate:passwordMatch })}
                                autoComplete='confirmpassword'
                                error={!!errors.confirmpassword}
                                helperText={errors.confirmpassword?.message} />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mb: 2, textTransform: 'none', fontSize: 20 }}
                    >
                        Register
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid item>
                            <NavLink to='/login' style={{ textDecoration: 'underline', fontSize: 14 }}>
                                Already have an account? Sign in
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
                <DevTool control={control} />
            </Box>
        </Container>
    );
}