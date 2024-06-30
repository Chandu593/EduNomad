import * as React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import '../ecompo/Global.css'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { Button } from '@mui/material';
export default function contactus() {
    const handleSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <>
            <Box sx={{ backgroundColor: '#f7f9fa' }}>
                <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', width: {xs:'100vw',md:'98vw'} }} className='contactimage'>
                        <img src='https://www.megadox.com/Content/Images/uploaded/contact-us-1769323_1280.png' alt='Contact Us' />
                    <Box
                        sx={{
                            maxWidth: '500px', padding: 3, backgroundColor: 'white', margin: 3,marginTop:{xs:-12,sm:-6,md:-4,lg:5}, border: '1px solid lavender',borderRadius:1
                        }}
                    >
                        <Typography component="h1" variant="h5" sx={{ fontWeight: 'bold', textAlign: 'center' }}>
                            Get in touch
                        </Typography>
                        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="name"
                                label="name"
                                name="name"
                                autoComplete="name"
                                autoFocus
                                sx={{ backgroundColor: '#f7f9fa' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                sx={{ backgroundColor: '#f7f9fa' }}
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="Mobile number"
                                label="Mobile number"
                                type="Mobile number"
                                id="Mobile number"
                                autoComplete="Mobile number"
                                sx={{ backgroundColor: '#f7f9fa' }}
                            />
                            <TextField
                                margin="normal"
                                multiline
                                rows={4}
                                fullWidth
                                name="Write to us"
                                label="Write to us"
                                type="Write to us"
                                id="Write to us"
                                autoComplete="Write to us"
                                sx={{ backgroundColor: '#f7f9fa' }}
                            />
                            <Box sx={{ display: 'grid', placeItems: 'center', width: 'inherit' }}>
                                <Button variant='contained' sx={{ margin:2,padding:1,width:200, backgroundColor: '#813588', color: 'white',"&:hover": { backgroundColor: "#813588" } }}>Submit</Button>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ display: 'flex', flexWrap:{ xs:'wrap',md:'nowrap'}, justifyContent: 'space-evenly', gap: 3, padding:3 }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lavender',borderRadius:1, width: { xs: '500px', sm: '500px', md: '361px' }, padding: 2, backgroundColor: 'white' }}>
                        <PhoneIcon sx={{ fontSize: 35, color: '#813588' }} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>call us</Typography>
                        <Typography variant='body1' color='text.secondary'>058-123-456</Typography>
                        <Typography variant='body1' color='text.secondary'>072-168-943</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lavender',borderRadius:1, width: { xs: '500px', sm: '500px', md: '361px' }, padding: 2, backgroundColor: 'white' }}>
                        <EmailIcon sx={{ fontSize: 35, color: '#813588' }} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>email address</Typography>
                        <Typography variant='body1' color='text.secondary'>edunomad@gmail.com</Typography>
                        <Typography variant='body1' color='text.secondary'>edustudent@gmail.com</Typography>
                    </Box>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lavender',borderRadius:1, width: { xs: '500px', sm: '500px', md: '361px' }, padding: 2, backgroundColor: 'white' }}>
                        <LocationOnIcon sx={{ fontSize: 35, color: '#813588' }} />
                        <Typography variant='h6' sx={{ fontWeight: 'bold' }}>office location</Typography>
                        <Typography variant='body1' color='text.secondary'>Flat no.102,Oxygen Towers</Typography>
                        <Typography variant='body1' color='text.secondary'>visakhapatnam,AP</Typography>
                    </Box>
                </Box>
            </Box>
        </>
    );
}