import { Container } from "@mui/material";
import { GridCards } from "../components";

export default function ServicesPage() {
  return (
    <Container
      id='servicios'
      maxWidth="lg"
      sx={{ display: 'flex', justifyContent: 'center', padding: '10rem 0' }}
    >

      <GridCards />
    </Container>
  );
}
