import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";


import './room-styles.css'


interface Props {
  roomName: string;
  img: string;
  description: string;
}

export default function RoomCard({ roomName, img, description }: Props) {
  return (
    <Card className="card-room" sx={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="160"
        sx={{
          borderRadius: '10px',
          height: '230px !important',
          width: '350px !important',
        }}
        image={ img }
      />
      <Box sx={{
        display: 'flex',
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto'
      }}>
        <CardContent>
          <Typography sx={{ color: '#fff'}} gutterBottom variant="h5" component="div">
            Habitación { roomName }
          </Typography>
          <Typography 
            sx={{
              textAlign: 'left',
              color: '#fff'
            }} 
            variant="body2" 
            color="text.secondary"
          >
            { description }
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{
            fontFamily: 'Inter',
            fontWeight: '600',
            textTransform: 'capitalize',
            fontSize: '1rem',
            width: '300px',
            backgroundColor: "#fff",
            color: '#AE9672',
          }} variant="contained" size="small">Hacer Reservación</Button>
        </CardActions>
      </Box>
    </Card>
  );
}
