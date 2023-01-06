import {Outlet} from 'react-router-dom';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Editor from "components/Editor";

function AppCore() {
    return (
       <>
       <Container component="main" >
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
          <Editor/>
       </Container>
       <Outlet/>
       </>
    );
}


export default AppCore;
