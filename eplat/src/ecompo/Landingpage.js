import React from 'react'
import '../ecompo/Global.css'
import { Box, Button, Divider, IconButton, Stack, Typography } from '@mui/material'
import CarouseL from '../ecompo/CarouseL';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import DownloadIcon from '@mui/icons-material/Download';
import StarIcon from '@mui/icons-material/Star';
import PinDropIcon from '@mui/icons-material/PinDrop';
import TimerIcon from '@mui/icons-material/Timer';
import EastIcon from '@mui/icons-material/East';
import { NavLink } from 'react-router-dom';
import CarouselCardMini from './CarouselCardMini';
import ReviewCardMini from './ReviewCardMini';
function Landingpage() {
  const ratingDetails = [{ profilepic: 'https://randomuser.me/api/portraits/men/36.jpg', name: 'Fib Allen', posteddate: 'Sept 14, 2016', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
  { profilepic: 'https://randomuser.me/api/portraits/women/51.jpg', name: 'Jennifer', posteddate: 'Nov 19, 2014', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
  { profilepic: 'https://randomuser.me/api/portraits/women/49.jpg', name: 'Catherine', posteddate: 'Jan 27, 2018', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
  { profilepic: 'https://randomuser.me/api/portraits/men/45.jpg', name: 'Chandru Chatterji', posteddate: 'Oct 11, 2020', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
  { profilepic: 'https://randomuser.me/api/portraits/women/79.jpg', name: 'Smriti Madona', posteddate: 'Jul 7, 2022', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
  { profilepic: 'https://randomuser.me/api/portraits/men/4.jpg', name: 'Nichols Johnson', posteddate: 'May 14, 2017', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' },
  { profilepic: 'https://randomuser.me/api/portraits/men/51.jpg', name: 'Tushar Pandey', posteddate: 'Mar 30, 2019', description: 'EduNomad is not just about acquiring knowledge; it is about investing in yourself. The platform offers flexible learning options, allowing you to tailor your learning experience to your busy schedule.' }
  ]
  let subjects = [{ subname: 'Telugu', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.ynfz9J5eF-7meBzw5YpyrAHaFc&pid=Api&P=0&h=180', link: '/telugu' },
  { subname: 'Hindi', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.U5B0Xyf92LSUZBN-M6q0bQHaD4&pid=Api&P=0&h=180', link: '/hindi' },
  { subname: 'English', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.pGIJv3urFPxIq5vczzjrIAHaFW&pid=Api&P=0&h=180', link: '/english' },
  { subname: 'Maths', imgurl: 'https://tse3.mm.bing.net/th?id=OIP.u6MjzcUX7m0OK9hgiLvBCwHaGA&pid=Api&P=0&h=180', link: '/maths' },
  { subname: 'Social', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.yvoTIkDfKb9z80oXivykPwHaEL&pid=Api&P=0&h=180', link: '/social' },
  { subname: 'Biology', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.-61YW9EikN5yNmDTtgQufAHaEH&pid=Api&P=0&h=180', link: '/biology' }]
  return (
    <>
      <div className='homemain'>
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', maxWidth: { xs: '650', sm: '750px', md: '750px', lg: '650px', xl: '650px' }, padding: { xs: 2, sm: 4, md: 3, lg: 6 }, paddingLeft: { md: 3 }, marginTop: { xs: -10, lg: '0' } }}>
          <Typography variant='h3' sx={{ fontWeight: 'bold', fontSize: { xs: 30, sm: 40, md: 50 }, textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
            Let's learn beyond the limits with <Typography component='span' sx={{ color: '#813588', fontSize: { xs: '30px', sm: '50px', md: '60px' }, fontWeight: 'bold' }} variant='h4'>E</Typography>du<Typography component='span' sx={{ color: '#813588', fontSize: { xs: '30px', sm: '45px', md: '60px' }, fontWeight: 'bold' }} variant='h4'>N</Typography>omad
          </Typography>
          <Typography variant='h6' color='text.secondary' sx={{ textAlign: { xs: 'center', sm: 'center', md: 'left', lg: 'left' } }}>
            We designed EduNomad to give students all across the nation an online school that let's them learn.
          </Typography>
        </Box>
        <img src='https://img.freepik.com/free-vector/online-certification-illustration_23-2148575636.jpg?size=626&ext=jpg' alt='HomeImage' />
      </div>
      <div className='hm'>
        <Box sx={{ marginX: 7.5, marginBottom: 4, height: '130px', display: { xs: 'none', sm: 'none', md: 'flex' }, flexWrap: 'wrap', justifyContent: 'space-evenly', alignItems: 'center', backgroundColor: 'orange', borderRadius: 4, color: 'white' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>1000k+</Typography>
            <Typography variant='h5'>students</Typography>
          </Box>
          <Divider variant='middle' orientation="vertical" sx={{ height: '70px', backgroundColor: 'white', width: '5px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>700+</Typography>
            <Typography variant='h5'>courses</Typography>
          </Box>
          <Divider variant='middle' orientation="vertical" sx={{ height: '70px', bgcolor: 'white', width: '5px' }} />
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold' }}>400+</Typography>
            <Typography variant='h5'>mentors</Typography>
          </Box>
        </Box>
        <Box sx={{ display: { xs: 'flex', md: 'none' }, flexWrap: 'wrap', justifyContent: 'space-evenly', gap: 3, padding: 3 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lavender', width: { xs: '500px', sm: '500px', md: '350px' }, backgroundColor: 'orange', color: 'white', height: 130, borderRadius: 4 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize:26 }}>1000k+</Typography>
            <Typography variant='h5'>students</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lavender', width: { xs: '500px', sm: '500px', md: '350px' }, backgroundColor: 'orange', color: 'white', height: 130, borderRadius: 4 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize:26 }}>700+</Typography>
            <Typography variant='h5'>courses</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', border: '1px solid lavender', width: { xs: '500px', sm: '500px', md: '350px' }, backgroundColor: 'orange', color: 'white', height: 130, borderRadius: 4 }}>
            <Typography variant='h4' sx={{ fontWeight: 'bold', fontSize:26 }}>400+</Typography>
            <Typography variant='h5'>mentors</Typography>
          </Box>
        </Box>
        <Box sx={{ marginInline: { xs: 1, lg: '45px' }, marginBottom: '20px' }}>
          <Typography variant='h4' sx={{ fontSize: { xs: 30, sm: 35 }, fontWeight: 'bold', marginBottom: 1, marginLeft: { xs: '0', md: 1.6 }, textAlign: 'center' }}>Our students and parents love us</Typography>
          <Box className='hm1'>
            <div className='hm1item'id='downloads'>
              <DownloadIcon sx={{fontSize:45,color:'#d500f9'}}/>
              <Typography variant='h4'sx={{color:'#6a1b9a',fontWeight:'bold',fontSize: { xs: 26, sm: 35 }}}>150+ Million</Typography>
              <Typography variant='h6'sx={{marginTop:-1}}>downloads</Typography>
            </div>
            <div className='hm1item'id='rating'>
              <StarIcon sx={{fontSize:45,color:'#d500f9'}}/>
              <Typography variant='h4'sx={{color:'#6a1b9a',fontWeight:'bold',fontSize: { xs: 26, sm: 35 }}}>4.7+ Star</Typography>
              <Typography variant='h6'sx={{marginTop:-1}}>app rating</Typography>
            </div>
            <div className='hm1item'id='locations'>
              <PinDropIcon sx={{fontSize:45,color:'#d500f9'}}/>
              <Typography variant='h4'sx={{color:'#6a1b9a',fontWeight:'bold',fontSize: { xs: 26, sm: 35 }}}>1100+ Cities</Typography>
              <Typography variant='h6'sx={{marginTop:-1}}>worldwide</Typography>
            </div>
            <div className='hm1item'id='time'>
              <TimerIcon sx={{fontSize:45,color:'#d500f9'}}/>
              <Typography variant='h4'sx={{color:'#6a1b9a',fontWeight:'bold',fontSize: { xs: 26, sm: 35 }}}>71 mins avg.</Typography>
              <Typography variant='h6'sx={{marginTop:-1}}>time spent daily</Typography>
            </div>
          </Box>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'start', width: '90vw', overflowX: 'auto', gap: 3 }}>
            {
              ratingDetails.map((element) => <ReviewCardMini key={element.profilepic} profilepic={element.profilepic} posteddate={element.posteddate} description={element.description} name={element.name} />)
            }
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block'},maxHeight:'350px' }}>
            <CarouseL for='rating' />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}><Button variant='outlined' endIcon={<EastIcon />} sx={{ backgroundImage: 'linear-gradient(to right, #9752ff, #5e93ff)', color: 'white', padding: 1, paddingInline: 2, textTransform: 'none', fontSize: 16, borderRadius: 7, margin: 3 }}>1000s of reviews by happy students</Button></Box>
        </Box>
        <Box sx={{ marginInline: { xs: 1, lg: '45px' }, marginBottom: '20px' }}>
          <Typography variant='h4' sx={{ fontSize: { xs: 30, sm: 35 }, fontWeight: 'bold', marginBottom: 1, marginLeft: { xs: '0', md: 1.6 }, textAlign: 'center' }}>Find your perfect course</Typography>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, justifyContent: 'start', width: '90vw', overflowX: 'auto', gap: 3 }}>
            {
              subjects.map((element) => (
                <NavLink to={element.link} style={{ textDecoration: 'none' }} key={element.subname}>
                  <CarouselCardMini key={element.subname} subjectname={element.subname} imgurl={element.imgurl} />
                </NavLink>
              ))
            }
          </Box>
          <Box sx={{ display: { xs: 'none', sm: 'block'},maxHeight:'350px' }}>
            <CarouseL for='subject' />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}><NavLink to='/courses' style={{ textDecoration: 'none', color: 'black' }}><Button variant='contained' size='large' sx={{ fontWeight: 'bold', fontSize: 20, borderRadius: 2.8, backgroundImage: 'linear-gradient(to right, #ff9234, #fc6274 100%)', color: 'white', padding: 1, paddingInline: 7, textTransform: 'none', margin: 3 }}>Explore All</Button></NavLink>
          </Box>
        </Box>
      </div>
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 6, padding: 7, justifyContent:'space-evenly', alignItems:'flex-start', backgroundColor: '#813588' }}>
        <Stack direction='column'>
          <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>COURSES</Typography>
          <NavLink to='/telugu'style={{textDecoration:'none'}}><Typography className='footeritem'  >Telugu</Typography></NavLink>
          <NavLink to='/hindi'style={{textDecoration:'none'}}><Typography className='footeritem'  >Hindi</Typography></NavLink>
          <NavLink to='/english'style={{textDecoration:'none'}}><Typography className='footeritem'  >English</Typography></NavLink>
          <NavLink to='/maths'style={{textDecoration:'none'}}><Typography className='footeritem'  >Maths</Typography></NavLink>
          <NavLink to='/physics'style={{textDecoration:'none'}}><Typography className='footeritem'  >Physics</Typography></NavLink>
          <NavLink to='/geology'style={{textDecoration:'none'}}><Typography className='footeritem'  >Geology</Typography></NavLink>
          <NavLink to='/gk'style={{textDecoration:'none'}}><Typography className='footeritem'  >GK</Typography></NavLink>
          <NavLink to='/biology'style={{textDecoration:'none'}}><Typography className='footeritem'  >Biology</Typography></NavLink>
        </Stack>
        <Stack direction='column'>
          <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>EXAMS</Typography>
          <Typography className='footeritem'  >Board Exams</Typography>
          <Typography className='footeritem'  >Talent Tests</Typography>
          <Typography className='footeritem'  >JEE Mains</Typography>
          <Typography className='footeritem'  >JEE Advanced</Typography>
          <Typography className='footeritem'  >NEET Exam</Typography>
          <Typography className='footeritem'  >CAT Exam</Typography>
          <Typography className='footeritem'  >CAT Exam 2024</Typography>
          <Typography className='footeritem'  >GATE Exam</Typography>
          <Typography className='footeritem'  >GATE Exam 2024</Typography>
          <Typography className='footeritem'  >UPSC</Typography>
          <Typography className='footeritem'  >UPSC Syllabus</Typography>
          <Typography className='footeritem'  >IPS Exam</Typography>
          <Typography className='footeritem'  >Bank Exam</Typography>
          <Typography className='footeritem'  >Education News</Typography>
          <Typography className='footeritem'  >Government Exams</Typography>
        </Stack>
        <Stack direction='column'>
          <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>EXAM PREPARATION</Typography>
          <Typography className='footeritem'  >Free CAT Prep</Typography>
          <Typography className='footeritem'  >Free IAS Prep</Typography>
          <Typography className='footeritem'  >English</Typography>
          <Typography className='footeritem'  >Maths</Typography>
          <Typography className='footeritem'  >Physics</Typography>
          <Typography className='footeritem'  >Chemistry</Typography>
          <Typography className='footeritem'  >Biology</Typography>
          <Typography className='footeritem'  >JEE 2024</Typography>
          <Typography className='footeritem'  >JEE Mains Mock Test</Typography>
          <Typography className='footeritem'  >JEE Mains Previous Year Papers</Typography>
          <Typography className='footeritem'  >JEE Advanced Mock Test</Typography>
          <Typography className='footeritem'  >JEE Advanced Previous Year Papers</Typography>
          <Typography className='footeritem'  >NEET 2024</Typography>
          <Typography className='footeritem'  >NEET Mock Tests</Typography>
          <Typography className='footeritem'  >NEET Previous Year Papers</Typography>
        </Stack>
        <Stack direction='column'>
          <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>FREE TEXTBOOK SOLUTIONS</Typography>
          <Typography className='footeritem'  >NCERT Solutions</Typography>
          <Typography className='footeritem'  >NCERT Exam Plan</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 5</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 6</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 7</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 8</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 9</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 10</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 11</Typography>
          <Typography className='footeritem'  >NCERT Solutions for class 12</Typography>
          <Typography className='footeritem'  >ICSE Selina Solutions</Typography>
        </Stack>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 4, padding: 1, justifyContent: 'space-evenly', alignItems: 'flex-start' }}>
          <Stack direction='column'>
            <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>COMPANY</Typography>
            <NavLink to='/about'style={{textDecoration:'none'}}><Typography className='footeritem'  >About Us</Typography></NavLink>
            <NavLink to='/contactus'style={{textDecoration:'none'}}><Typography className='footeritem'  >Contact Us</Typography></NavLink>
            <Typography className='footeritem'  >Investors</Typography>
            <Typography className='footeritem'  >Compliance</Typography>
            <Typography className='footeritem'  >Careers</Typography>
            <Typography className='footeritem'  >FAQ</Typography>
            <Typography className='footeritem'  >Support</Typography>
            <Typography className='footeritem'  >Blog</Typography>
            <Typography className='footeritem'  >Student's stories</Typography>
            <Typography className='footeritem'  >Contact our Financial Partners</Typography>
            <Typography className='footeritem'  >EduNomad app</Typography>
          </Stack>
          <Stack direction='column'>
            <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>STATE BOARDS</Typography>
            <Typography className='footeritem'  >Andhra Pradesh</Typography>
            <Typography className='footeritem'  >Telangana</Typography>
            <Typography className='footeritem'  >Maharstra</Typography>
            <Typography className='footeritem'  >Gujarat</Typography>
            <Typography className='footeritem'  >Tamilnadu</Typography>
            <Typography className='footeritem'  >Uttar Pradesh</Typography>
            <Typography className='footeritem'  >Bihar</Typography>
            <Typography className='footeritem'  >Rajasthan</Typography>
            <Typography className='footeritem'  >Karnataka</Typography>
            <Typography className='footeritem'  >Kerala</Typography>
            <Typography className='footeritem'  >Madhya Pradesh</Typography>
            <Typography className='footeritem'  >West Bengal</Typography>
          </Stack>
          <Stack direction='column'>
            <Typography variant='h6' sx={{ marginBottom: 1, color: 'orange' }}>RESOURCES</Typography>
            <Typography className='footeritem'  >CAT College Predictor</Typography>
            <Typography className='footeritem'  >Worksheets</Typography>
            <Typography className='footeritem'  >DSSL</Typography>
            <Typography className='footeritem'  >Home Tuition</Typography>
            <Typography className='footeritem'  >All Products</Typography>
            <Typography className='footeritem'  >Calculators</Typography>
            <Typography className='footeritem'  >Formulas</Typography>
          </Stack>
          <Stack direction='column'>
            <Typography variant='h6' sx={{ marginBottom: 1, marginLeft: 1.5, color: 'orange' }}>FOLLOW US</Typography>
            <Stack direction='row'>
              <IconButton>
                <FacebookIcon sx={{ fontSize: 35, color: 'white' }} />
              </IconButton>
              <IconButton>
                <LinkedInIcon sx={{ fontSize: 36, color: 'white' }} />
              </IconButton>
              <IconButton>
                <InstagramIcon sx={{ fontSize: 35, color: 'white' }} />
              </IconButton>
              <IconButton>
                <XIcon sx={{ fontSize: 32, color: 'white' }} />
              </IconButton>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  )
}

export default Landingpage
