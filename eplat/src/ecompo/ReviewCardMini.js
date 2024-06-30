import React from 'react'
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
function ReviewCardMini(props) {
  return (
    <>
     <Card sx={{ maxWidth:300,minWidth:290,maxHeight: 350,padding: 2,marginY:3 }}>
      <CardHeader
        avatar={
          <Avatar alt='chandu' src={props.profilepic} aria-label="recipe"/>
        }
        title={props.name}
        subheader={props.posteddate}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary" sx={{margin:0.1,marginTop:-1}}>
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Rating sx={{marginLeft:0.7,marginTop:-1.5}}defaultValue={5} precision={0.5} readOnly size="large" />
      </CardActions>
    </Card> 
    </>
  )
}

export default ReviewCardMini
