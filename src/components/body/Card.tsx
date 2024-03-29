

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



interface Props {
  img: string;
  name: string;
  price: number;
}

export default function CardComponent({ img, name, price }: Props) {
  return (
    <Card sx={{ width: 210, height: '273px', borderRadius: '15px', boxShadow: '0 5px 5px rgba(0,0,0,.2)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            padding: '10px',
            borderRadius: '20px',
          }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{
            fontFamily: 'Inter',
            fontWeight: '600',
            fontSize: '1.3rem',
          }} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography sx={{ fontFamily: 'Inter', fontWeight: '700' }} variant="body2" color="text.secondary">
            ${price.toFixed(2)}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}