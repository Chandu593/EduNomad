import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia,Typography} from '@mui/material';
import Alertt from './Alertt';
function CarouselCard(props) {
  return (
    <>
      <Card sx={{width:{xs:290,sm: 300,md:320,lg:320,xl:320},maxHeight: 350,padding: 2,marginY:3,marginLeft:{xs:9.6,sm:10,md:5.2,lg:7.5,xl:2},'&:hover': { boxShadow: '5px 5px 5px rgb(190, 176, 196)',cursor:'pointer',transition:'all 0.3s' } }}>
          <CardActionArea>
            <CardMedia component='img' height='140' width='200' image={`${props.imgurl}`} />
            <CardContent>
              <Typography variant='h6' sx={{ marginLeft: -2, fontWeight: 'bold' }}><div className='global'>{`Complete ${props.subjectname} course`}</div></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Alertt link={props.link}/>
          </CardActions>
        </Card>
    </>
  )
}

export default CarouselCard
