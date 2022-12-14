import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Button from "@mui/material/Button";

import Carousel from 'react-material-ui-carousel';
import CarouselCard from "common/carousel/carousel";

import image1 from 'assets/images/space/hubble1.jpg'


const items = [
    {
        name: "Screen 1",
        text: "I love my cards 1" ,
        height: 400,
       image: image1,
        href: null
    },
    {
        name: "Screen 2",
        text: "I love my cards 2",
        height: 400,
       image: image1,
        href: 'https://github.com/wtcooper'
    },
    {
        name: "Screen 3",
        text: "I love my cards 3",
        height: 400,
       image: image1,
        href: 'https://github.com/wtcooper'
    },
    {
        name: "Screen 4",
        text: "I love my cards 4",
        height: 400,
       image: image1,
        href: 'https://github.com/wtcooper'
    }
]


function Landing() {
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

         </Box>
         <Box
          sx={{
             color: "white"
          }}

         >
            <Carousel
               // height={400}
                autoPlay={true}
                animation={"fade"}
                indicators={true}
                duration={500}
                navButtonsAlwaysVisible={false}
                navButtonsAlwaysInvisible={false}
                cycleNavigation={true}
                fullHeightHover={false}
                swipe={true}
            >
                {
                    items.map((item, index) => {
                        return <CarouselCard item={item} key={index} />
                    })
                }
            </Carousel>

         </Box>

       </Container>
    );
}


export default Landing;
