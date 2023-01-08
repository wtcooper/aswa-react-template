import {Outlet} from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import * as React from "react";

function AppCore() {

   return (
      <>
         <Container component="main">
            <Box
               sx={{
                  mb: 5,
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
                  Main App
               </Typography>

            </Box>

         </Container>
         <Outlet/>
      </>
   );
}


export default AppCore;
