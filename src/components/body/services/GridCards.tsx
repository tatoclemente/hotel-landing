
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { ServicesCard } from '../services/ServicesCard';
import { SubTitle } from '../../Subtitle';

import { services } from '../../../utils/data'

export const GridCards = () => {
  return (
    <Box sx={{ flexGrow: 1, maxWidth: '888px' }}>
      <SubTitle label='Servicios' />
      <Grid style={{ margin: 'auto', maxWidth:'900px'}} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 16 }}>
        {services.map((service, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
              <ServicesCard name={service.name} img={service.img} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

