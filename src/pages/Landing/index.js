import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {AppIcon} from "../../app/appBrand";
import * as React from "react";

import { useSelector} from "react-redux";
import { selectUserDetails} from "store/users/userSlice";

function Index() {

   const userDetails = useSelector(selectUserDetails);


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
               color="text.light"
               gutterBottom
            >
               Landing
            </Typography>
            <Button
               variant="contained"
               href={!userDetails ? '/.auth/login/aadb2c?post_login_redirect_uri=/app' : '/app'}
               size='large'
               startIcon={<AppIcon/>}
            >
               App
            </Button>
         </Box>
      </Container>
   );
}


export default Index;
