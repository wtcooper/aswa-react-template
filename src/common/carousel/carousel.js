import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function CarouselCard({item}) {
  return (
    <Card
            // style={{
            //      height: item.height
            // }}
       sx={{ height: item.height }}

    >
      <CardActionArea
         color="primary.main"
        href={item.href}>
        <CardMedia
          component="img"
          height={item.height/2}
          image={item.image}
          alt={item.name}
        />
        <CardContent
           sx={{
             p: 0,
             m: 2}}
             // padding={0}
        >
          <Typography
             padding={0}
             gutterBottom
             variant="h5"
             component="div"
             height={item.height/8}
          >
             {item.name}
          </Typography>
          <Typography
             padding={0}
             variant="body2"
             color="text.secondary"
             height={item.height/2.666667}
          >
             {item.text}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
