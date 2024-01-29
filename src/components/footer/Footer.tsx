
import { Grid, Container, Typography, Link, Box } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

import "./footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-content">
        <Box>
          <AdbIcon
            sx={{ display: { xs: "none", md: "flex" }, mr: 1, color: "white" }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: "flex",
              fontFamily: "Jost",
              fontWeight: 800,
              letterSpacing: ".3rem",
              color: "white",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
        </Box>
        <div className="divider">.</div>

        <div className="center-content">
          <div className="about">
            <h3 className="about-title">
              Sobre nosotros
            </h3>
            <p className="about-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        
            <div className="menu-links">
              {["Home", "Menu", "Eventos", "Servicios"].map(
                (link, index) => (
                  <Grid item xs={6} key={index}>
                    <a href={link}>
                      <Typography className="menu-link">
                        {link}
                      </Typography>
                    </a>
                  </Grid>
                )
              )}
        
          </div>
        </div>
    
        <div className="rigth-content">
          <div className="social-icons">
            <XIcon style={{fontSize: '3rem'}}/>
            <LinkedInIcon style={{fontSize: '3rem'}} />
          </div>
          <Link href='' sx={{textDecoration: 'none'}}>
            <Typography variant="subtitle1" align="center" style={{color: '#fff', fontSize: '1.3rem', fontWeight: '600'}}>
              info@mariotthotel.com
            </Typography>
          </Link>
          
        
        </div>
  
   
      </Container>
      <div className="bottom-footer">
        <Typography variant="subtitle1" align="center" style={{color: '#fff', fontSize: '1.2rem', fontWeight: '600'}}>
          Todos los derechos reservados © 2024
        </Typography>
        <Typography variant="subtitle1" align="center" style={{color: '#fff'}}>
          Terminos y condiciones
        </Typography>
        <Typography variant="subtitle1" align="center" style={{color: '#fff'}}>
          Politicas de privacidad
        </Typography>
        <Typography variant="subtitle1" align="center" style={{color: '#fff'}}>
          Seguridad
        </Typography>
      </div>
    </footer>
  );
};
