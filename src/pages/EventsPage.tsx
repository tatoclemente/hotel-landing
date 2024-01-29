import { Container } from "@mui/material";
import { RoomSlideshow, SlideshowEvents } from "../components";

import { offerRooms } from '../utils/data';

import { events } from '../utils/data'
import { GridCards } from '../components/body/services/GridCards';


export default function EventsPage() {
  return (
    <div id='eventos' style={{ width: '100%', paddingTop: '100px'}}>
      <RoomSlideshow rooms={offerRooms} />
      <Container
        maxWidth="lg"
        sx={{ position: 'relative' }}
      >

        <SlideshowEvents events={events} subtitle="Eventos" />

      </Container>

      

    </div>
  );
}
