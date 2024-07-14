import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia,Typography} from '@mui/material';
import Alertt from './Alertt';
function CarouselCardMini(props) {
  return (
    <>
     <Card sx={{maxWidth:300,minWidth:290,maxHeight: 350,padding: 2,marginY:3 }}>
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

export default CarouselCardMini
