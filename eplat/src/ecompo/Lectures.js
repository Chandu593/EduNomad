import React from 'react'
import Playlistcard from './Playlistcard'
import { Divider, IconButton, Typography } from '@mui/material'
import WestIcon from '@mui/icons-material/West';
import '../ecompo/Global.css'
import { NavLink } from 'react-router-dom';
function Lectures(Props) {
  return (
    <>
      <div className='quick1'>
        <NavLink to='/courses'style={{ textDecoration: 'none'}}><IconButton disableRipple><WestIcon sx={{color:'black',fontSize:'26px',marginRight:-1.5,marginLeft:2}}/></IconButton></NavLink>
        <Typography variant='h5' sx={{ marginX: 2, fontWeight: 'bold' }}><div className='global'>Playlist Videos</div></Typography>
      </div>
      <Divider variant='middle'sx={{background:'black',boxShadow:'1px 1px 1px black'}} />
      <div className='quick4'>
      {Props.videourl.map((element)=>{return <Playlistcard key={Props.videourl.indexOf(element)} subname={Props.subject} num={Props.videourl.indexOf(element)+1}poster={Props.poster}/>})}
      </div>
    </>
  )
}

export default Lectures
