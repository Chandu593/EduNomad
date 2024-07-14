import React from 'react'
import '../ecompo/Global.css';
import Cards from './Cards';
import { Alert, Divider, IconButton, Typography } from '@mui/material'
import { NavLink} from 'react-router-dom';
import WestIcon from '@mui/icons-material/West';
import { context } from '../App';

function Courses() {
  let subjects = [{ subname: 'Telugu', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.ynfz9J5eF-7meBzw5YpyrAHaFc&pid=Api&P=0&h=180', link: '/telugu' },
  { subname: 'Hindi', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.U5B0Xyf92LSUZBN-M6q0bQHaD4&pid=Api&P=0&h=180', link: '/hindi' },
  { subname: 'English', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.pGIJv3urFPxIq5vczzjrIAHaFW&pid=Api&P=0&h=180', link: '/english' },
  { subname: 'Maths', imgurl: 'https://tse3.mm.bing.net/th?id=OIP.u6MjzcUX7m0OK9hgiLvBCwHaGA&pid=Api&P=0&h=180', link: '/maths' },
  { subname: 'Social', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.yvoTIkDfKb9z80oXivykPwHaEL&pid=Api&P=0&h=180', link: '/social' },
  { subname: 'Biology', imgurl: 'https://tse2.mm.bing.net/th?id=OIP.-61YW9EikN5yNmDTtgQufAHaEH&pid=Api&P=0&h=180', link: '/biology' },
  { subname: 'Physics', imgurl: 'https://tse1.mm.bing.net/th?id=OIP.u0kLFDWg-bpmGECblZVUjwHaHp&pid=Api&P=0&h=180', link: '/physics' },
  { subname: 'Chemistry', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.7dJN0KRfgBx2idiK11yO8AHaE8&pid=Api&P=0&h=180', link: '/chemistry' },
  { subname: 'GK', imgurl: 'https://tse4.mm.bing.net/th?id=OIP.Mi7PCTB1kYgQ0ceZdjvYpQHaE8&pid=Api&P=0&h=180', link: '/gk' },
  { subname: 'Economics', imgurl: 'https://tse4.mm.bing.net/th?id=OIP._kkXVDPZNPa56aXkxiayEQHaFL&pid=Api&P=0&h=180', link: '/economics' }]
  const {isLoggedIn}=React.useContext(context)
  return (
    <>
      <div className='quick1'>
        <NavLink to='/' style={{ textDecoration: 'none' }}>
        <IconButton disableRipple><WestIcon sx={{ fontSize: '26px', marginRight: -1.5, marginLeft: 2, color: 'black' }} /></IconButton>
        </NavLink>
        <Typography variant='h5' sx={{ marginX: 2, fontWeight: 'bold' }}><div className='global'>Our Courses</div></Typography>
      </div>
      <Divider variant='middle' sx={{ background: 'black', boxShadow: '1px 1px 1px black' }} />
      {!isLoggedIn&&<Alert severity='warning'variant='filled'sx={{color:'black',borderRadius:'0',display:'flex',justifyContent:'center',alignItems:'center',fontSize:{xs:15,sm:20}}}>Please login to view the playlist for free.</Alert>}
      <div className='quick4'>
        {
          subjects.map((element) => {
            return <Cards key={element.imgurl} subjectname={element.subname} imgurl={element.imgurl} link={element.link} /> })
        }
      </div>
    </>
  )
}

export default Courses
