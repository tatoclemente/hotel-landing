
import {
  styled,
} from "@mui/material";

import { imgHotel } from "../../utils/data"
import { Navigation } from "./Navigation";
import { TitleCenter } from "./TitleCenter";

const ImageBackground = styled('img')({
  width: '100%',
  height: '376px',
  objectFit: 'cover',
  objectPosition: 'top',
})

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  height: '376px',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.black,
  opacity: 0.4,
  transition: theme.transitions.create('opacity'),
}));


export const Header = () => {
  return (
    <header style={{position: 'relative',  height: '376px', maxWidth: '100%'}}>
      <ImageBackground src={imgHotel} alt="hotel-ph" />
      <ImageBackdrop />
      <Navigation />
      <TitleCenter />
    </header>
  )
}
