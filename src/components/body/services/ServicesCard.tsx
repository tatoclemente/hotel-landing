

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';



interface Props {
  img: string;
  name: string;
}

export const ServicesCard = ({ img, name }: Props) => {
  return (
    <Card sx={{ width: 170, height: 270, borderRadius: '15px', boxShadow: '0 5px 5px rgba(0,0,0,.2)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          sx={{
            padding: '10px',
            borderRadius: '50%',
          }}
          image={img}
          alt="green iguana"
        />
        <CardContent>
          <Typography sx={{
            fontFamily: 'Jost',
            fontWeight: '700',
            fontSize: '1.3rem',
            textAlign: 'center',
          }} component="div">
            {name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}