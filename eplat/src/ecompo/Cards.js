import React from 'react'
import { Card, CardActionArea, CardActions, CardContent, CardMedia,Button,Typography} from '@mui/material';
function Cards(props) {
  return (
    <Card sx={{width: 320,minWidth:'300px', maxHeight: 350, margin: 3, padding: 2, '&:hover': { boxShadow: '5px 5px 5px rgb(190, 176, 196)',cursor:'pointer',transition:'all 0.3s' } }}>
          <CardActionArea>
            <CardMedia component='img' height='140' width='200' image={`${props.imgurl}`} />
            <CardContent>
              <Typography variant='h6' sx={{ marginLeft: -2, fontWeight: 'bold' }}><div className='global'>{`Complete ${props.subjectname} course`}</div></Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button variant='contained' size='medium' sx={{ fontWeight: 'bold',borderRadius:1, backgroundImage:'linear-gradient(to right, #ff9234, #fc6274 100%)', color: 'white', marginLeft: -1,marginBottom:-0.3,padding:1.2,paddingInline:2  }}>View Playlist</Button>
          </CardActions>
        </Card>
  )
}
export default Cards
