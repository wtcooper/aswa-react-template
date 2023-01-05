import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

import {useDispatch, useSelector} from "react-redux";
import {getUserDataAsync, selectUserData, selectUserDetails} from "store/users/userSlice";
import Button from "@mui/material/Button";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import * as React from "react";

function App3() {

   const dispatch = useDispatch();
   const userData = useSelector(selectUserData);
   const userDetails = useSelector(selectUserDetails);


     const fetchUserData = () => () => {
      dispatch(getUserDataAsync());
     };


    return (
       <Container component="main" >
       <Box
            sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
>
        <Typography
          component="h1"
          variant="h2"
          align="center"
          color="text.primary"
          gutterBottom
        >
            App3
         </Typography>

         <Button
               variant="contained"
               onClick={fetchUserData()}
               size='large'
               startIcon={<DirectionsRunIcon/>}
            >
               Run API
            </Button>

         </Box>

         <Grid
            item
            xs={12}
            zeroMinWidth
               sx={{
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
               }}>
            <Paper
               sx={{
                  // height: 350,
                  width: '80%'
               }}
            >
               <Typography
                variant="h5"
                // align="center"
                color="text.primary"
               >
                  User Details
               </Typography>

               <Typography
                  sx={{
                     overflowWrap: 'break-word',
                     whiteSpace: 'pre-line'
               }}
               >
                  {/*{testHeader}*/}
                  {JSON.stringify(userDetails)}
               </Typography>
            </Paper>
         </Grid>

         <Grid
            item
            xs={12}
            zeroMinWidth
               sx={{
                  mt: 2,
                  display: 'flex',
                  justifyContent: 'center',
               }}>
            <Paper
               sx={{
                  // height: 350,
                  width: '80%'
               }}
            >
               <Typography
                variant="h5"
                // align="center"
                color="text.primary"
               >
                  User Data
               </Typography>

               <Typography
                  sx={{
                     overflowWrap: 'break-word',
                     whiteSpace: 'pre-line'
               }}
               >
                  {/*{testHeader}*/}
                  {JSON.stringify(userData)}
               </Typography>
            </Paper>
         </Grid>


          <Grid item xs={12}
               sx={{
                  m: 3,
                  display: 'flex',
                  justifyContent: 'center',
               }}>
            <Paper
               sx={{
                  height: 350,
                  width: '80%'
               }}
            >
               <Typography>Test</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}
               sx={{
                  m: 3,
                  display: 'flex',
                  justifyContent: 'center',
               }}>
            <Paper
               sx={{
                  height: 350,
                  width: '80%'
               }}
            >
               <Typography>Test</Typography>
            </Paper>
          </Grid>

       </Container>
    );
}


export default App3;
