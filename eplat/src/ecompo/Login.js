import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { NavLink, useNavigate } from 'react-router-dom';
import {IconButton, InputAdornment} from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { context } from '../App';
import { useForm } from 'react-hook-form';

export default function Login() {
    const form=useForm()
    const {register,handleSubmit,formState}=form
    const {errors}=formState
    const navigate=useNavigate()
    const {update}=React.useContext(context)
    const handlSubmit = () => {
        update(true)
        navigate('/')
    };
    const [showPassword, setShowPassword] = React.useState(false)
    const handleClickShowPassword = () => setShowPassword(show => !show)
    return (
        <Container component="main" maxWidth="xs"sx={{height:'80vh'}}>
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
                    Login
                </Typography>
                <Box component="form" onSubmit={handleSubmit(handlSubmit)} noValidate sx={{ mt: 1 }}>
                    <TextField
                    type='email'
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        {...register('email', { required: { value: true, message: 'Email is required' }, pattern: { value: /^[a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+(?:\.[a-zA-Z]{2,})$/, message: 'Invalid email format' } })}
                                error={!!errors.email}
                                helperText={errors.email?.message}
                        sx={{ mb: 2 }}
                    />
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
                                {...register('password', { required: { value: true, message: 'Password is required' }, pattern: { value: /^(?=.*[0-9])(?=.*[!@#$%^&*])[^\s]{8,}$/, message: 'Password must be of min length 8 and must contain one number and a special character' } })}
                                autoComplete='password'
                                error={!!errors.password}
                                helperText={errors.password?.message} />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                    />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 1, mb: 2, textTransform: 'none', fontSize: 20 }}
                        >
                            Login
                        </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <NavLink to='/register' style={{ textDecoration: 'underline', fontSize: 14 }}>
                                {"Don't have an account? Sign Up"}
                            </NavLink>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    );
}