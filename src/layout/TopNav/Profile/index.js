import {useRef, useState, useEffect} from 'react';

// material-ui
import {useTheme} from '@mui/material/styles';
import {
   Box,
   ButtonBase,
   Card,
   CardContent,
   ClickAwayListener,
   Grid,
   IconButton,
   Paper,
   Popper,
   Stack,
   Typography
} from '@mui/material';

import {useDispatch, useSelector} from "react-redux";
import {getUserAsync, selectUserDetails} from "store/users/userSlice";

import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import LogoutIcon from '@mui/icons-material/Logout';

import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";


// ==============================|| HEADER CONTENT - PROFILE ||============================== //

const Profile = () => {
   const anchorRef = useRef(null);
   const [anchorEl, setAnchorEl] = useState(null);
   const [open, setOpen] = useState(false);


   const dispatch = useDispatch();
   const userDetails = useSelector(selectUserDetails);

   useEffect(() => {
      dispatch(getUserAsync());
   }, [dispatch]);


   const theme = useTheme();

   const handleToggle = (event) => {
      setAnchorEl(event.currentTarget);
      setOpen((prevOpen) => !prevOpen);
   };

   const handleClose = (event) => {
      setAnchorEl(null);
      // if (anchorRef.current && anchorRef.current.contains(event.target)) {
      //    return;
      // }
      setOpen(false);
   };

   return (
      <>
         {!userDetails
            ?
            <Tooltip title="Login">
               <Button
                  href="/.auth/login/aadb2c?post_login_redirect_uri=/app"
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
            <Box sx={{flexShrink: 0, ml: 0.75}}>
               <ButtonBase
                  aria-label="open profile"
                  ref={anchorRef}
                  aria-controls={open ? 'profile-grow' : undefined}
                  aria-haspopup="true"
                  onClick={handleToggle}
               >
                  <Stack direction="row" spacing={1} alignItems="center" sx={{p: 0.5}}>
                     <SelfImprovementIcon fontSize="large"/>
                     {/*<Typography variant="subtitle1">Name</Typography>*/}
                  </Stack>
               </ButtonBase>
               <Popper
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  placement="bottom-end"
               >
                  <Paper
                     sx={{
                        // boxShadow: theme.customShadows.z1,
                        width: 290,
                        minWidth: 240,
                        maxWidth: 290,
                        [theme.breakpoints.down('md')]: {
                           maxWidth: 250
                        }
                     }}
                  >
                     <ClickAwayListener onClickAway={handleClose}>
                        <Card>
                           <CardContent sx={{px: 2.5, pt: 3}}>
                              <Grid container justifyContent="space-between" alignItems="center">
                                 <Grid item>
                                    <Typography variant="h6">Name</Typography>
                                 </Grid>
                                 <Grid item>
                                    <Stack>
                                    <IconButton
                                       href="/.auth/logout"
                                       size="medium"
                                       sx={{p:0}}
                                    >
                                       <LogoutIcon/>
                                    </IconButton>
                                    <Typography variant="subtitle2">Logout</Typography>
                                    </Stack>
                                 </Grid>
                              </Grid>
                           </CardContent>
                           <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                              <Typography>
                                 Settings....
                              </Typography>
                           </Box>
                        </Card>
                     </ClickAwayListener>
                  </Paper>
               </Popper>
            </Box>
         }
      </>


   );
};

export default Profile;
