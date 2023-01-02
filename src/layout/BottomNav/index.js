import * as React from 'react';
import { Link } from 'react-router-dom';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MapIcon from '@mui/icons-material/Map';
import IconButton from '@mui/material/IconButton';
import Fab from '@mui/material/Fab';
import Zoom from '@mui/material/Zoom';

import {appNavList} from "routes/MainRoutes";

const drawerBleeding = 30;
const drawerHeight = 60;

const StyledBox = styled(Box)(({ theme }) => ({
  backgroundColor: 'transparent',
  // backgroundColor: theme.palette.mode === 'light' ? '#998b8b' : grey[500],
}));



function BottomNav(props) {
   const [open, setOpen] = React.useState(false);


   const getRoutes = (routes) =>
      routes.map((route) => {
         return (
            <Box
               key={route.path}
               sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center'
               }}
            >
               <IconButton
                  component={Link}
                  to={`/${route.parentPath}/${route.path}`}
                  size='large'
                  sx={{
                     p:0
                  }}
               >
                  {route.icon}
               </IconButton>
               {/*<Typography>*/}
               {/*   {route.name}*/}
               {/*</Typography>*/}
            </Box>
            )
      });

  const toggleDrawer = (newOpen) => () => {
    setOpen(!newOpen);

    // // if want to keep FAB but move position during open drawer
   // const [fabPos, setFabPos] = React.useState(drawerBleeding);
    // if (!newOpen) {
    //      setFabPos(`calc(${drawerHeight}% - ${drawerBleeding}px)`)
    // }
    // else {
    //   setFabPos(drawerBleeding)
    // }

  };

  return (
    <>
       {!open ?
         <Zoom in={!open}>
          <Fab
             onClick={toggleDrawer(open)}
              sx={{
              zIndex: 1400,
              bgcolor: 'primary.main',

              position: 'fixed',
              bottom: 20, // could set this via fabPos if wanted to change position on action
              left: 'calc(50% - 15px)',
            }}
           >
              <MapIcon sx={{color: 'white'}} />
           </Fab>
         </Zoom>
         : null
       }

      <SwipeableDrawer
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(open)}
        onOpen={toggleDrawer(open)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}

        ModalProps={{
          keepMounted: true
         }}
        PaperProps={{
          sx: {
            // height: `calc(${drawerHeightPerc}% - ${drawerBleeding}px)`,
            height: drawerHeight,
             overflow: 'visible'
          }
         }}

         //  see here for below targeting specific class: https://mui.com/material-ui/customization/how-to-customize/#overriding-with-classes
         sx={{
            '& .MuiBackdrop-root': {
               backgroundColor: 'transparent'
            }
         }}
      >

        {/*<StyledBox*/}
        {/*  sx={{*/}
        {/*    position: 'absolute',*/}
        {/*    top: -drawerBleeding,*/}
        {/*    borderTopLeftRadius: 8,*/}
        {/*    borderTopRightRadius: 8,*/}
        {/*    visibility: 'visible',*/}
        {/*    right: 0,*/}
        {/*    left: 0,*/}
        {/*     height: 1*/}
        {/*  }}*/}
        {/*>*/}

        {/*  /!*<Puller />*!/*/}
        {/*  /!* <Box sx={{ p: 1 }}></Box>*!/*/}
        {/*</StyledBox>*/}
        <StyledBox
          sx={{
            height: '100%',
            overflow: 'auto',
             display: 'flex',
          justifyContent: 'space-evenly',
          p: 1,
          m: 0,
          }}
        >
           {getRoutes(appNavList)}
           {/*<Button variant="contained">Link1</Button>*/}
           {/*<Button variant="contained">Link2</Button>*/}
           {/*<Button variant="contained">Link3</Button>*/}

        </StyledBox>
      </SwipeableDrawer>


    </>
  );
}


export default BottomNav;