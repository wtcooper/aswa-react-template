import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";

function App3() {
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
            App3
         </Typography>
         </Box>

          <Grid item xs={12}>
            <Paper
               sx={{
                  height: 350,
                  width: 300
               }}
            >
               <Typography>Test</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
               sx={{
                  height: 350,
                  width: 300
               }}
            >
               <Typography>Test</Typography>
            </Paper>
          </Grid>

          <Grid item xs={12}>
            <Paper
               sx={{
                  height: 350,
                  width: 300
               }}
            >
               <Typography>Test</Typography>
            </Paper>
          </Grid>


       </Container>
    );
}


export default App3;
