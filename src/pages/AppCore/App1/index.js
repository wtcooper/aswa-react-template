import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import {useSelector} from "react-redux";
import {selectClientPrincipal} from "../../../store/users/userSlice";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";


function App1() {
   const clientPrincipal = useSelector(selectClientPrincipal);

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
               App1
            </Typography>
         </Box>

         <Grid item xs={12}
               sx={{
                  display: 'flex',
                  justifyContent: 'center',
               }}>
            <Paper
               sx={{
                  height: 350,
                  width: '80%'
               }}
            >
               <Typography>{JSON.stringify(clientPrincipal)}</Typography>
            </Paper>
         </Grid>

      </Container>
   );
}


export default App1;
