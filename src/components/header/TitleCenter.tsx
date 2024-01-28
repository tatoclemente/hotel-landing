import { Container } from "@mui/material"
import { Button } from "@mui/material"



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
      <h1 id='title-header'>Hotel Marriott</h1>
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
        }}
      >Hacer reserva</Button>
    </Container>
  )
}
