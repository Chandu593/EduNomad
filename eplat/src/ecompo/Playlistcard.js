import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import {Box, Tooltip } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';

export default function Playlistcard(Props) {
  const [like, setlike] = React.useState(false)
  const [likecount, setlikecount] = React.useState(47)
  const handlelike = () => {
    setlike(!like);
    if (!like) {
      setlikecount(likecount + 1)
    }
    else {
      setlikecount(likecount - 1)
    }
  }
  return (
    <>
      <Card component='div' sx={{ maxWidth: 320, margin: 3, '&:hover': { boxShadow: '5px 5px 5px rgb(190, 176, 196)', cursor: 'pointer', transition: 'all 0.3s' } }}>
        <CardMedia>
          <video width='320px' height='180px' src='https://media.istockphoto.com/id/1177255543/video/colors-in-motion.mp4?s=mp4-640x640-is&k=20&c=Ph50w6t3yui3f61WQ6sCFUsK3mgqxo3EuILCETTULDY='poster={Props.poster} controls />
        </CardMedia>
        <CardContent sx={{ marginY: -2.2 }}><Typography variant='body1'>Complete {Props.subname} course (part {Props.num})</Typography>
          <Typography variant="body2" color="text.secondary">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni doloremque inventore,provident illo rem reprehenderit!
          </Typography>
        </CardContent>
        <CardActions disableSpacing sx={{ display: 'flex', justifyContent: 'space-between', marginTop: -3 }}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <IconButton onClick={handlelike} aria-label="add to favorites" sx={{ '&:hover': { background: 'none' } }} >
              {like ? <ThumbUpAltIcon sx={{ fontSize: 26, color: '#813588' }} /> : <Tooltip title='Like' placement="top" arrow slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -4],
                      },
                    },
                  ],
                },
              }}><ThumbUpOffAltIcon sx={{ fontSize: 26 }} /></Tooltip>}
            </IconButton>
            <Typography variant='body1' >{likecount}</Typography></Box>
          <Box>
            <IconButton aria-label="more" sx={{ '&:hover': { background: 'none' } }}>
              <Tooltip title='Save' placement="top" arrow slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -4],
                      },
                    },
                  ],
                },
              }}><BookmarkBorderIcon sx={{ fontSize: 27 }} /></Tooltip>
            </IconButton>
            <IconButton aria-label="share" sx={{ '&:hover': { background: 'none' } }} >
              <Tooltip title='Share' placement="top" arrow slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, -4],
                      },
                    },
                  ],
                },
              }}><ShareIcon sx={{ fontSize: 23 }} /></Tooltip>
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </>
  );
}
