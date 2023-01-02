import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";

function About() {
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
            Glass Pane
         </Typography>

         </Box>
       </Container>
    );
}


export default About;