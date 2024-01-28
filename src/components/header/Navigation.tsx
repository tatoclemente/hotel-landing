import { useEffect, useState } from 'react';

import { AppBar, Box, Toolbar, IconButton, Typography, Menu, Container, Avatar, Button, Tooltip, MenuItem, ListItem, colors } from '@mui/material';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';

import { useScrollColor } from '../../hooks/useScrollColor';


const pages = [
  { title:'Home', route: 'home' }, 
  { title: 'Menu', route: 'menu' }, 
  { title: 'Eventos', route: 'eventos' }, 
  { title: 'Servicios', route: 'servicios' },
];
const settings = ['Perfil', 'Cuenta', 'Salir'];

export const Navigation = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  const [pathname, setPatname] = useState('home')


  const { navbarBackground } = useScrollColor()
  


  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleClickMenu = (id: string) => {
    setAnchorElNav(null);
    
    setPatname(id)
    const section = document.getElementById(id);
    
    
    section!.scrollIntoView({ behavior: 'smooth' });
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };


  useEffect(() => {


  }, [])

  return (
    <nav 
      style={{ 
        position: 'fixed', 
        top: 0, 
        left: 0, 
        right: 0, 
        zIndex: 1000, 
        backgroundColor: navbarBackground,
        transition: 'background-color 0.5s ease',
        width: '100vw',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Jost',
              fontWeight: 800,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon sx={{color: '#fff'}} />
            </IconButton>
            <Menu
              id="menu-app"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={() => setAnchorElNav(null)}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (

                <MenuItem  key={page.title} onClick={() => handleClickMenu(page.route)}>
                  <Typography textAlign="center" sx={{textTransform: 'lowercase'}}>{page.title}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: 'white' }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'white',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box 
            sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' }, 
              justifyContent: 'center' 
            }}>
              
            <ListItem  sx={{ 
              flexGrow: 1, 
              display: { xs: 'none', md: 'flex' }, 
              justifyContent: 'center',
            }}>
              {pages.map((page) => (
                <Button
                  key={page.title}
                  data-value={page.route}
                  style={pathname === page.route 
                    ? {textDecoration: 'underline', textDecorationThickness: 2 } 
                    : {}  
                  }
                  onClick={() => handleClickMenu(page.route)}
                  sx={{ 
                    my: 2, 
                    color: 'white', 
                    display: 'block', 
                    textTransform: 'capitalize', 
                    fontFamily: 'Jost', 
                    fontWeight: '400',
                    fontSize: '1rem',
                    textShadow: '.5px .5px 1px #000',
                  }}
                >
                  {page.title}
                </Button>
              ))}

            </ListItem>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </nav>
  );
}
