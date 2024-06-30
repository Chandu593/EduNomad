import React from 'react'
import '../ecompo/Global.css'
import { Box, Link, Typography } from '@mui/material'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
function AboutUs() {
    return (
        <>
            <div className='about'>
                <div className='about1'>
                    <Typography variant='h3' sx={{ textAlign: 'center', fontFamily: 'Suisse Works, Georgia, Times, Times New Roman, serif', fontWeight: 'bold', fontSize: { xs: 30, sm: 40, md: 45 }, marginTop: { xs: -40, sm: -20, md: 0 } }}>Welcome to where possibilities begin</Typography>
                </div>
                <img src='https://about.udemy.com/wp-content/uploads/2024/02/about-homepage-hero-jan-2024.png' alt='About Us' />
            </div>
            <div className='about2'>
                <Typography className='d-flex justify-content-center align-items-center' variant='h6' sx={{ backgroundColor: 'black', color: 'white', fontWeight: 'bold', height: 65, marginTop: { xs: -33, sm: -20, md: -10 } }}>Check our latest company news!</Typography>
            </div>
            <Box className='d-flex justify-content-center align-items-center flex-column' sx={{ margin: { xs: 4, sm: 8 }, textAlign: 'center' }}>
                <Typography variant='h3' sx={{ maxWidth: { xs: '90vw', sm: '80vw', lg: '70vw' }, fontFamily: 'Suisse Works, Georgia, Times, Times New Roman, serif', fontWeight: 'bold', marginBottom: 2, fontSize: { xs: 25, sm: 35, md: 40, lg: 45 } }}>Skills are the key to unlocking new potential</Typography>
                <Typography variant='h6' sx={{ maxWidth: { xs: '80vw', sm: '70vw', lg: '55vw' },fontSize:{xs:15,sm:20} }}>Whether you want to learn a new skill, train your teams, or share what you know with the world, you’re in the right place. As a leader in online learning, we’re here to help you achieve your goals and transform your life.</Typography>
            </Box>
            <Box sx={{ backgroundColor: '#5624d0', color: 'white', padding: { xs: 2, sm: 4, md: 6, lg: 8 }, paddingTop: { xs: 5, sm: 7, md: 9 }, paddingBottom: { xs: 5, sm: 7, md: 9 } }}>
                <Box className='d-flex justify-content-center align-items-center flex-column' sx={{ textAlign: 'center' }}>
                    <Typography variant='h3' sx={{ fontSize: { xs: 25, sm: 35, md: 40, lg: 45 }, maxWidth: { xs: '90vw', sm: '90vw', lg: '70vw' }, fontFamily: 'Suisse Works, Georgia, Times, Times New Roman, serif', fontWeight: 'bold', marginBottom: 2 }}>Creating impact around the world</Typography>
                    <Typography variant='h6' sx={{ textAlign: 'center', maxWidth: { xs: '80vw', sm: '70vw', lg: '55vw', xl: '50vw' },fontSize:{xs:15,sm:20} }}>With our global catalog spanning the latest skills and topics, people and organizations everywhere are able to adapt to change and thrive.</Typography>
                </Box>
                <Box className='aboutstat'>
                    <Box id='aboutstat1'sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold',fontSize:{xs:30,sm:40} }} variant='h3'>1000k+</Typography>
                        <Typography variant='h6'sx={{fontSize:{xs:15,sm:20}}}>Students</Typography>
                    </Box>
                    <Box id='aboutstat2'sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold',fontSize:{xs:30,sm:40} }} variant='h3'>700+</Typography>
                        <Typography variant='h6'sx={{fontSize:{xs:15,sm:20}}}>Courses</Typography>
                    </Box>
                    <Box id='aboutstat3'sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold',fontSize:{xs:30,sm:40} }} variant='h3'>400+</Typography>
                        <Typography variant='h6'sx={{fontSize:{xs:15,sm:20}}}>Mentors</Typography>
                    </Box>
                    <Box id='aboutstat4'sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold',fontSize:{xs:30,sm:40} }} variant='h3'>12M+</Typography>
                        <Typography variant='h6'sx={{fontSize:{xs:15,sm:20}}}>Course enrollments</Typography>
                    </Box>
                    <Box id='aboutstat5'sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold',fontSize:{xs:30,sm:40} }} variant='h3'>20</Typography>
                        <Typography variant='h6'sx={{fontSize:{xs:15,sm:20}}}>Languages</Typography>
                    </Box>
                    <Box id='aboutstat6'sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography sx={{ fontWeight: 'bold',fontSize:{xs:30,sm:40} }} variant='h3'>10k+</Typography>
                        <Typography variant='h6'sx={{fontSize:{xs:15,sm:20}}}>Enterprise customers</Typography>
                    </Box>
                </Box>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 7, marginBottom: 3, textAlign: 'center' }}>
                <Typography variant='h6' sx={{ width: {xs:'90vw',sm:'80vw',lg:'52vw'},fontSize:{xs:17,sm:19,lg:20} }}>
                    We help students of all types prepare for the path ahead — wherever it leads. Our curated collection of business and technical courses help students go further by placing learning at the center of their strategies.
                </Typography>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: { xs: 'wrap', md: 'nowrap' }, marginBottom: 6 }}>
                <Box className='aboutboxes' sx={{ maxWidth: { xs: '500px', sm: '700px', md: '350px' }, margin: {xs:2,sm:5,md:2} }}>
                    <FormatQuoteIcon sx={{ fontSize: 40, color: 'orange', marginLeft: -1 }} />
                    <Typography variant='h5'sx={{fontSize:{xs:20,sm:25,md:26}}}>
                        Udemy fit us like a glove. Their team curates fresh, up-to-date courses from their marketplace and makes them available to students.
                    </Typography>
                </Box>
                <Box className='aboutboxes' sx={{ maxWidth: { xs: '500px', sm: '700px', md: '350px' }, margin: {xs:2,sm:5,md:2} }}>
                    <FormatQuoteIcon sx={{ fontSize: 40, color: 'orange', marginLeft: -1 }} />
                    <Typography variant='h5'sx={{fontSize:{xs:20,sm:25,md:26}}}>
                        In total, it was a big success, I would get emails about what a fantastic resource it was.
                    </Typography>
                </Box>
                <Box className='aboutboxes' component='div' sx={{ maxWidth: { xs: '500px', sm:'700px', md: '350px' }, margin: {xs:2,sm:5,md:2} }}>
                    <FormatQuoteIcon sx={{ fontSize: 40, color: 'orange', marginLeft: -1 }} />
                    <Typography variant='h5'sx={{fontSize:{xs:20,sm:25,md:26}}}>
                        Udemy responds to the needs of the students in an agile and global manner. It’s truly the best solution for our students and their careers.
                    </Typography>
                </Box>
            </Box>
            <Typography variant='h3' sx={{ textAlign: 'center', fontWeight: 'bold', fontFamily: 'Suisse Works, Georgia, Times, Times New Roman, serif', margin: 3,fontSize: { xs: 25, sm: 35, md: 40, lg: 45 } }}>Our Partners</Typography>
            <Box className='clients'>
                <img id='aboutimg1'src='https://tse1.mm.bing.net/th?id=OIP.0X-34Vb0QmNpLNkJPrVMOwHaHS&pid=Api&P=0&h=180' alt='University Of Delhi' />
                <img id='aboutimg2'src='https://tse4.mm.bing.net/th?id=OIP.fjlQ5U5zkM96i3Qfsf_c9gHaHa&pid=Api&P=0&h=180' alt='IIT Madras' />
                <img id='aboutimg3'src='https://tse4.mm.bing.net/th?id=OIP.t_gEbTGdsXr6DxJBbhFoBQAAAA&pid=Api&P=0&h=180' alt='IIT Delhi' />
                <img id='aboutimg4'src='https://tse2.mm.bing.net/th?id=OIP.bQRZGJqCA__uAeR8eoFwuwAAAA&pid=Api&P=0&h=180' alt='Lovely Professional University' />
                <img id='aboutimg5'src='https://tse2.mm.bing.net/th?id=OIP.vr-Ciq99Mk1St44Y5nRtnwAAAA&pid=Api&P=0&h=180' alt='Andhra University' />
                <img id='aboutimg6'src='https://tse4.mm.bing.net/th?id=OIP.k3sJvtcellmz78bCfKCakgHaFq&pid=Api&P=0&h=180' alt='Sastra University' />
                <img id='aboutimg7'src='https://tse2.mm.bing.net/th?id=OIP.5LB8wWiTSQNXyd9UheXmIgHaHa&pid=Api&P=0&h=180' alt='SRM University' />
                <img id='aboutimg8'src='https://tse4.mm.bing.net/th?id=OIP.a6k0KVxqPd7x-ujyuRnxCgAAAA&pid=Api&P=0&h=180' alt='KL University' />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: { xs: 'wrap', md: 'nowrap' }, justifyContent: 'space-evenly', margin: 2, marginTop: 10, marginBottom: 10, gap: 4 }}>
                <Box sx={{ borderTop: '9px solid #a435f0', maxWidth: { xs: '500px', sm: '700px', md: '350px' }, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold', fontSize: 30 }}>Work with us</Typography>
                    <Typography variant='h6'>At EduNomad, we’re all learners and instructors. We create a culture that is diverse, inclusive, and committed to helping students thrive.</Typography>
                    {/* <Typography variant='body1' sx={{ color: '#a435f0', textDecoration: 'underline',marginTop:1 }}>Join our team</Typography> */}
                    <Link href='#' sx={{ color: '#a435f0', marginTop: 1, textDecoration: 'underline' }}>Join our team</Link>
                </Box>
                <Box sx={{ borderTop: '9px solid darkblue', maxWidth: { xs: '500px', sm: '700px', md: '350px' }, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold', fontSize: 30 }}>See our research</Typography>
                    <Typography variant='h6'>We’re committed to improving lives through learning. Dig into our original research to learn about the forces that are shaping the modern workplace.</Typography>
                    <Link href='#' sx={{ color: 'darkblue', marginTop: 1, textDecoration: 'underline' }}>Learn more</Link>
                </Box>
                <Box sx={{ borderTop: '9px solid green', maxWidth: { xs: '500px', sm: '700px', md: '350px' }, display: 'flex', flexDirection: 'column' }}>
                    <Typography variant='h4' sx={{ marginTop: 2, marginBottom: 2, fontWeight: 'bold', fontSize: 30 }}>Read our blog</Typography>
                    <Typography variant='h6'>Want to know what we’ve been up to lately? Check out the Udemy blog to get the scoop on the latest news, ideas and projects, and more.</Typography>
                    <Link href='#' sx={{ color: 'green', marginTop: 1, textDecoration: 'underline' }}>Read now</Link>
                </Box>
            </Box>
        </>
    )
}

export default AboutUs
