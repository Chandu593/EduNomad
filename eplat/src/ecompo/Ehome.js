import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';
import SchoolIcon from '@mui/icons-material/School';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import { Tooltip } from '@mui/material';
import '../ecompo/Global.css'
// import Dialoge from './Dialoge';
// import { context } from './Login';
import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import { context } from '../App';
// import { context } from './Contexts/ContextWrapper';

const drawerWidth = 250;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }),
);

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export default function Ehome() {
  const {isLoggedIn}=React.useContext(context)
  const open = false;
  const [Isdraweropen, setIsdraweropen] = React.useState(false)
  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="fixed" open={open} sx={{ background: '#813588' }}>
        <Toolbar>
          <div className='nav'>
            <div className='nav1'>

              <IconButton
                size='large'
                edge='start'
                color='inherit'
                aria-label='menu'
                onClick={() => setIsdraweropen(true)}
              >
                <MenuIcon sx={{ fontSize: '35px', color: 'white' }} />
              </IconButton>
              <Typography variant="h5" noWrap component="div" sx={{ paddingY: '15px' }}>
                EduNomad<sup>TM</sup>
              </Typography>
            </div>
            <Box className='nav2' sx={{ display: { xs: 'none', md: 'block' } }}>
              <input className='searchcourse' type='search' placeholder='Search courses...'></input>
            </Box>
            {isLoggedIn&&<Box sx={{ display:'flex',width:{xs:100,md:178},gap:1,justifyContent:'end' }}>
              <Tooltip title='Profile' placement="bottom" arrow slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 3],
                      },
                    },
                  ],
                },
              }}><AccountCircleIcon sx={{ fontSize: 40, '&:hover': { cursor: 'pointer' } }} /></Tooltip>
              <Tooltip title='Dark Mode' placement="bottom" arrow slotProps={{
                popper: {
                  modifiers: [
                    {
                      name: 'offset',
                      options: {
                        offset: [0, 3],
                      },
                    },
                  ],
                },
              }}><DarkModeIcon sx={{ fontSize: 41, '&:hover': { cursor: 'pointer' } }} /></Tooltip>
            </Box>}
            {!isLoggedIn&&<Box sx={{ display: { xs: 'none', sm: 'flex' },gap:1 }}>
              <NavLink to='/login' style={{ textDecoration: 'none' }}><Button
                variant="contained"
                sx={{ backgroundImage: 'linear-gradient(to right, #ff9234, #fc6274 100%)', color: 'white' }}
              >
                Login
              </Button>
              </NavLink>
              <NavLink to='/register' style={{ textDecoration: 'none' }}><Button
                variant="contained"
                sx={{ backgroundImage: 'linear-gradient(to right, #ff9234, #fc6274 100%)', color: 'white' }}
              >
                Sign Up
              </Button>
              </NavLink>
            </Box>}
          </div>
        </Toolbar>
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        anchor='left'
        open={Isdraweropen}
        onClose={() => setIsdraweropen(false)}
      >
        <DrawerHeader sx={{ display: 'flex', justifyContent: 'left', flexDirection: 'column' }}>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}><Typography variant="h5" noWrap component="div" sx={{ paddingY: '15px', fontWeight: 'bold', marginLeft: -7 }}>
            <IconButton onClick={() => setIsdraweropen(false)}>
              <ChevronLeftIcon sx={{ fontSize: '26px', color: 'black' }} />
            </IconButton>
            EduNomad<sup>TM</sup>
          </Typography></NavLink>
          <Box sx={{ display: { xs: 'flex', sm: 'none' }, flexDirection: 'column', gap: 2, paddingInline: 2.7 }}>
            {!isLoggedIn&&<NavLink to='/login' style={{ textDecoration: 'none' }}><Button
              variant="contained"
              sx={{ backgroundColor: 'white', color: 'black', border: '1px solid black', width: 207, '&:hover': { backgroundColor: 'white' } }}
            >
              Login
            </Button>
            </NavLink>}
            {!isLoggedIn&&<NavLink to='/register' style={{ textDecoration: 'none' }}><Button
              variant="contained"
              sx={{ backgroundColor: 'black', color: 'white', border: '1px solid black', width: 207, '&:hover': { backgroundColor: 'black' } }}
            >
              Sign Up
            </Button>
            </NavLink>}
          </Box>
        </DrawerHeader>
        <Divider />
        <List sx={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <NavLink to='/' style={{ textDecoration: 'none', color: 'black' }}> <ListItem key='Home' disablePadding >
            <ListItemButton>
              <ListItemIcon>
                <HomeIcon sx={{ fontSize: '30px', color: '#813588' }} />
              </ListItemIcon>
              <ListItemText primary='Home' />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/courses' style={{ textDecoration: 'none', color: 'black' }}> <ListItem key='Courses' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <SchoolIcon sx={{ fontSize: '30px', color: '#813588' }} />
              </ListItemIcon>
              <ListItemText primary='Courses' />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/about' style={{ textDecoration: 'none', color: 'black' }}> <ListItem key='About' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <InfoIcon sx={{ fontSize: '30px', color: '#813588' }} />
              </ListItemIcon>
              <ListItemText primary='About' />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/contactus' style={{ textDecoration: 'none', color: 'black' }}> <ListItem key='Contact Us' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <PermContactCalendarIcon sx={{ fontSize: '30px', color: '#813588' }} />
              </ListItemIcon>
              <ListItemText primary='Contact Us' />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/profile' style={{ textDecoration: 'none', color: 'black' }}> <ListItem key='Profile' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon sx={{ fontSize: '30px', color: '#813588' }} />
              </ListItemIcon>
              <ListItemText primary='Profile' />
            </ListItemButton>
          </ListItem></NavLink>
          <NavLink to='/saved' style={{ textDecoration: 'none', color: 'black' }}> <ListItem key='Saved' disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <BookmarksIcon sx={{ fontSize: '30px', color: '#813588' }} />
              </ListItemIcon>
              <ListItemText primary='Saved' />
            </ListItemButton>
          </ListItem></NavLink>
        </List>
      </Drawer>
      <DrawerHeader />
      <Main open={open} sx={{ background: 'rgb(245, 243, 241)' }}>
      </Main>
    </Box>
  );
}