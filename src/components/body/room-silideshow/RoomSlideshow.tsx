
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './room-styles.css';

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, FreeMode } from 'swiper/modules';
import { Room } from '../../../interfaces/types';
import RoomCard from './RoomCard';
import { useEffect, useState } from 'react';
// import CardComponent from '../body/Card';
// import { Suggestion } from '../../interfaces/types';
// import { SubTitle } from '../Subtitle';

interface Props {
  rooms: Room[]
}



export const RoomSlideshow = ({rooms}: Props) => {

  const [anchoPantalla, setAnchoPantalla] = useState(window.innerWidth);
  const [showNavigation, setShowNavigation] = useState(true)

  useEffect(() => {
    const handleResize = () => setAnchoPantalla(window.innerWidth);
    window.addEventListener('resize', handleResize);
    const navigationOptions = anchoPantalla <= 500 
    if (navigationOptions) {
      setShowNavigation(false)
    } else {
      setShowNavigation(true)
    }
    return () => window.removeEventListener('resize', handleResize);
  }, [anchoPantalla]);


  

  return (
    <div className='room-slide-container'>
      <Swiper
        cssMode={true}
        navigation={showNavigation}
        freeMode={true}
        mousewheel={true}
        keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard, FreeMode]}
        className="mySwiperRoom"
      >
        {
          rooms.map(( roomItems , index ) => (
            <SwiperSlide key={index}>
              <RoomCard { ...roomItems } />
            </SwiperSlide>

          ))
        }
   
      </Swiper>
    </div>
  );
}

