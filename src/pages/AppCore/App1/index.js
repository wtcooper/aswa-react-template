import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import App2 from "../App2";

function App1() {
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
            App1
         </Typography>

         </Box>
       </Container>
    );
}


export default App1;
