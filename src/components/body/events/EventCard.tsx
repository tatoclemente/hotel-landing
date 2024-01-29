

import Typography from '@mui/material/Typography';


import './event-card.css'

interface Props {
  img: string;
  name: string;
  date: string;
  time: string;
}

export default function EventCard({ img, name, date, time }: Props) {
  return (
    <div className='card-container'>
        <img
          className='image-card'
          src={img}
          alt="green iguana"
        />
        <div className='data-content'>
          <Typography 
            sx={{
              fontFamily: 'Inter',
              fontWeight: '600',
              fontSize: '1.8rem',
              textShadow: '1px 1px 5px #000000',
            }} 
            gutterBottom 
            variant="h5" 
            component="div"
          >
            {name}
          </Typography>
          <div>
            <Typography 
              sx={{ 
                fontFamily: 'Inter', 
                fontWeight: '700',
                color: 'white',
                textShadow: '1px 1px 2px #000000',
              }} 
              variant="body2" 
              color="text.secondary"
            >
              {date}
            </Typography>
            <Typography 
              sx={{ fontFamily: 'Inter', fontWeight: '700', color: 'white', textShadow: '1px 1px 2px #000000',}} 
              variant="body2" 
              color="text.secondary"
            >
              {time}
            </Typography>
          </div>
        </div>

    </div>
  );
}