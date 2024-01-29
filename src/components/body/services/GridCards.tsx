

import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import { ServicesCard } from '../services/ServicesCard';

import { services } from '../../../utils/data'

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export const GridCards = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid style={{ margin: 'auto', width:'900px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
              <ServicesCard name={service.name} img={service.img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

