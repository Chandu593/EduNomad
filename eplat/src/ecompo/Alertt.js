import * as React from 'react';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { context } from '../App';
import { useNavigate } from 'react-router-dom';

export default function Alertt(props) {
  const navigate=useNavigate()
  const [open, setOpen] = React.useState(false);
  const {isLoggedIn}=React.useContext(context)
  const handleClick = () => {
    if(isLoggedIn)navigate(props.link)
    else setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setOpen(false);
  };

  return (
    <div>
      <Button onClick={handleClick}size='medium' sx={{ fontWeight: 'bold', borderRadius: 1, backgroundImage: 'linear-gradient(to right, #ff9234, #fc6274 100%)', color: 'white', marginLeft: -1, marginBottom: -0.3, padding: 1.2, paddingInline: 2 }}>View playlist</Button>
      <Snackbar open={open} autoHideDuration={3000} onClose={handleClose}>
        <Alert severity="warning" sx={{ width: '100%' }}>
          Login to view playlist for free.
        </Alert>
      </Snackbar>
    </div>
  );
}
