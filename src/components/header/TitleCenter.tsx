import { Container } from "@mui/material"
import { Button } from "@mui/material"


import './title-center.css'


export const TitleCenter = () => {
  return (
    <Container style={{
      position: 'absolute', 
      top: '50%', 
      left: '50%', 
      transform: 'translate(-50%, -10%)',
      maxWidth: 424,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <h1 className='title-header'>Hotel Marriott</h1>
      <Button 
        href="" 
        variant='contained'
        size="small"
        sx={{
          backgroundColor: '#fff',
          color: '#AE9672',
          fontFamily: 'Mosk',
          textTransform: 'capitalize',
          width: '100%',
          fontSize: '1.2rem',
          transition: '0.4s ease-in-out',
          '&:hover': {
            backgroundColor: '#AE9672',
            color: '#fff',
          }
        }}
      >Hacer reserva</Button>
    </Container>
  )
}
