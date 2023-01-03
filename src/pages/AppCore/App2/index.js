import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

function App2() {
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
          color="text.light"
          gutterBottom
        >
            App2
         </Typography>

         </Box>
       </Container>
    );
}


export default App2;
