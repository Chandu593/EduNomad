import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

export default function ReviewCard(props) {
  return (
    <Card sx={{ width:{xs:290,sm: 300,md:320,lg:320,xl:320},maxHeight: 350,padding: 1,paddingLeft:2,marginY:3,marginLeft:{xs:9.6,sm:10,md:5.2,lg:7.5,xl:2},'&:hover': { boxShadow: '5px 5px 5px rgb(190, 176, 196)',cursor:'pointer',transition:'all 0.3s' } }}>
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
  );
}
