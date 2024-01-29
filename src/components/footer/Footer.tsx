
import { Grid, Typography } from "@mui/material";
import AdbIcon from "@mui/icons-material/Adb";
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import styles from './Footer.module.css';



export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.leftContent}>
          <div className={styles.logo}>
            <AdbIcon
              sx={{ mr: 1, color: "white" }}
            />
            <Typography
              variant="h6"
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                fontFamily: "Jost",
                fontWeight: 800,
                letterSpacing: ".3rem",
                color: "white",
                textDecoration: "none",
              }}
            >
              LOGO
            </Typography>
          </div>
          <div className={styles.divider}>.</div>
        </div>

        <div className={styles.centerContent}>
          <div className={styles.about}>
            <h3 className={styles.aboutTitle}>
              Sobre nosotros
            </h3>
            <p className={styles.aboutParagraph}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        
            <div className={styles.menuLinks}>
              {["Home", "Menu", "Eventos", "Servicios"].map(
                (link, index) => (
                  <Grid item xs={6} key={index}>
                    <a href={link}>
                      <Typography sx={{color: 'white'}}>
                        {link}
                      </Typography>
                    </a>
                  </Grid>
                )
              )}
        
          </div>
        </div>
    
        <div className={styles.rigthContent}>
          <div className={styles.socialIcons}>
            <XIcon style={{fontSize: '3rem'}}/>
            <LinkedInIcon style={{fontSize: '3rem'}} />
          </div>
          <a href='' style={{color: '#fff', fontSize: '1.3rem', fontWeight: '600', width: '100%', textAlign: 'center'}}>
              info@mariotthotel.com
          </a>
          
        
        </div>
  
   
      </div>
      <div className={styles.bottomFooter}>
        <p className={styles.allReserved}>
          Todos los derechos reservados © 2024
        </p>
        <div className={styles.termsAndConditions}>
          <p>
            Terminos y condiciones
          </p>
          <p>
            Politicas de privacidad
          </p>
          <p>
            Seguridad
          </p>
        </div>
      </div>
    </footer>
  );
};
