
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';
import CardComponent from '../body/Card';
import { Suggestion } from '../../interfaces/types';
import { SubTitle } from '../Subtitle';

interface Props {
  subtitle: string
  lunch: Suggestion[]
}

export const Slideshow = ({lunch, subtitle}: Props) => {


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
        className="mySwiper"
      >
        {
          lunch.map(( lunchItems , index ) => (
            <SwiperSlide key={index}>
              <CardComponent { ...lunchItems } />
            </SwiperSlide>

          ))
        }
   
      </Swiper>
    </div>
  );
}

