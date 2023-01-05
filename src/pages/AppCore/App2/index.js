import * as React from "react";

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";

import {useDispatch, useSelector} from "react-redux";
import {getHeaderAsync, selectTestHeader} from "store/genericData/genericDataSlice";
import {selectUserDetails} from "store/users/userSlice";

import DirectionsRunIcon from '@mui/icons-material/DirectionsRun';

function App2() {
   const dispatch = useDispatch();
   const testHeader = useSelector(selectTestHeader);
   const userDetails = useSelector(selectUserDetails);


     const fetchHeaderData = (userDetails) => () => {
      dispatch(getHeaderAsync(userDetails));
     };


    return (
       <Container component="main">
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
            App2
         </Typography>

          <Button
               variant="contained"
               onClick={fetchHeaderData(userDetails)}
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
                  sx={{
                     overflowWrap: 'break-word',
                     whiteSpace: 'pre-line'
               }}
               >
                  {/*{testHeader}*/}
                  {JSON.stringify(testHeader)}
               </Typography>
            </Paper>
         </Grid>

       </Container>
    );
}


export default App2;
