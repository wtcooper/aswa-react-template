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
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import {appTitle} from "app/appBrand";
import {AppIcon} from "app/appBrand";
import IconButton from "@mui/material/IconButton";

import {useSelector} from "react-redux";
import {selectUserDetails} from "store/users/userSlice";

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
  const [anchorElUser, setAnchorElUser] = React.useState(null);
   const userDetails = useSelector(selectUserDetails);

  const handleOpenUserMenu = (event) => {
     console.log(userDetails)
    setAnchorElUser(event.currentTarget);
  };

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
                       {!userDetails
                           ?
                          <Tooltip title="Login">
                              <Button
                                 // href="/.auth/login/aadb2c?post_login_redirect_uri=.referrer"
                                 // variant="contained"
                                 // color="blackAndWhite"
                                 sx={{
                                    color: 'white'
                                 }}
                              >
                                 Login
                              </Button>
                          </Tooltip>
                           :
                           <Tooltip title={userDetails}>
                             <IconButton
                                onClick={handleOpenUserMenu}
                                sx={{
                                   p: 0
                                 }}
                             >
                               <Avatar
                                  alt="User"
                                  // src="/static/images/avatar/2.jpg"
                               />
                             </IconButton>
                           </Tooltip>
                       }
                    </Toolbar>
                  </AppBar>
            </HideOnScroll>
            <Toolbar/>
         </Box>
         <Outlet/>
      </>
   );
}