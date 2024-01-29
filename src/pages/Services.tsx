import { Button, Container } from "@mui/material";
import { GridCards, Title } from "../components";

export default function ServicesPage() {
  return (
    <Container
      id='servicios'
      maxWidth="lg"
      sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '10rem 0' }}
    >

      <GridCards />

<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column'}}>

      <Title label='Califica tu experiencia' />
      <Button 
        variant="contained"
        sx={{
          backgroundColor: '#000',
          width: '100%',
          maxWidth: '300px',
          '&:hover': {
            backgroundColor: '#202020'
          }
        }}
      >Clasificar</Button>
</div>
    </Container>
  );
}
