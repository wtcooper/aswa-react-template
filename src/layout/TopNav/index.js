/*Will have:
 1) the top App Bar with
 2) Login features
 3) Bottom FAB with expandable
* */

import * as React from 'react';
import {Link, Outlet} from 'react-router-dom';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import Box from '@mui/material/Box';
import Slide from '@mui/material/Slide';

import {appTitle} from "app/appBrand";
import {AppIcon} from "app/appBrand";
import IconButton from "@mui/material/IconButton";

import Profile from "./Profile";

function HideOnScroll(props) {
   const {children} = props;
   // Note that you normally won't need to set the window ref as useScrollTrigger
   // will default to window.
   // This is only being set here because the demo is in an iframe.
   // const trigger = useScrollTrigger({
   //    target: window ? window() : undefined,
   // });

      const trigger = useScrollTrigger();

   return (
      <Slide appear={false} direction="down" in={!trigger}>
         {children}
      </Slide>
   );
}

export default function TopNav(props) {

   return (
      <>
         <Box sx={{ flexGrow: 1 }}>
            <HideOnScroll {...props}>
                  <AppBar position="static">
                    <Toolbar>
                      <IconButton
                        component={Link}
                        to={`/`}
                        size='large'
                        sx={{
                           p: 0,
                           mr: 2
                        }}
                      >
                        <AppIcon />
                      </IconButton>
                      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {appTitle}
                      </Typography>
                     <Profile/>

                    </Toolbar>
                  </AppBar>
            </HideOnScroll>
            <Toolbar/>
         </Box>
         <Outlet/>
      </>
   );
}