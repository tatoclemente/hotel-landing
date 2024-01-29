import { Container } from "@mui/material";
import { Slideshow, Title } from "../components";
import { suggestions } from '../utils/data'


export default function SuggestionsPage() {
  return (
    <Container
      id='menu' 
      maxWidth='lg' 
      sx={{ minHeight: '100vh', paddingTop: '100px'}}>
      <Title label={'Tus recomendaciones'} />
      {/* Almurzos */}
      <Slideshow lunch={suggestions.lunch} subtitle="Almuerzos" />
      <Slideshow lunch={suggestions.breackfastsAndDinners} subtitle="Desayunos y Cenas"/>
      <Slideshow lunch={suggestions.desserts} subtitle="Postres" />
      <Slideshow lunch={suggestions.drinks} subtitle="Bebidas" />
    </Container>
  );
}