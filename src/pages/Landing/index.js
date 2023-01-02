import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {AppIcon} from "../../app/appBrand";
import * as React from "react";

function Index() {
   return (
      <Container component="main" maxWidth="md">
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
               Landing
            </Typography>
            <Button
               variant="contained"
               href='/app'
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
