
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './swiper-event.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';
import { Event } from '../../../interfaces/types';
import { SubTitle } from '../../Subtitle';
import EventCard from './EventCard';


interface Props {
  subtitle: string
  events: Event[]
}

export const SlideshowEvents = ({events, subtitle}: Props) => {


  return (
    <div style={{ maxWidth: 888, margin: '4rem auto'}}>
      <SubTitle label={subtitle} />
      <Swiper
        cssMode={true}
        navigation={true}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        breakpoints={{
          430: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 2,
          },
          770: {
            slidesPerView: 3,
          },
        }}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
        className="my-swiper"
      >
        {
          events.map(( eventItems , index ) => (
            <SwiperSlide key={index}>
              <EventCard { ...eventItems } />
            </SwiperSlide>

          ))
        }
   
      </Swiper>
    </div>
  );
}

