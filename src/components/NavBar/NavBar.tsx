import { useState } from 'react';
import { AppBar, Toolbar, IconButton, Drawer, List, ListItem, ListItemIcon, useTheme, Box, useMediaQuery } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Face3Icon from '@mui/icons-material/Face3';
import DesignServicesIcon from '@mui/icons-material/DesignServices';
import CodeIcon from '@mui/icons-material/Code';
import PhonelinkIcon from '@mui/icons-material/Phonelink';
import ContactMailIcon from '@mui/icons-material/ContactMail';

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    if (sectionElement) {
      sectionElement.scrollIntoView({ behavior: 'smooth' });
    }
    if (isMobile) {
      setDrawerOpen(false); 
    }
  };

  const listItemIconStyles = {
    color: theme.palette.primary.main,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    position: 'relative',
    cursor: 'pointer',
    '&:hover::before': {
      content: 'attr(data-tooltip)',
      position: 'absolute',
      left: 'calc(-100% - 10px)',
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      padding: '5px 10px',
      borderRadius: '4px',
      whiteSpace: 'nowrap',
      zIndex: 1,
    },
  };

  const toolbarStyles = {
    justifyContent: 'flex-end',
    display: { sm: 'none' }
  };

  const appBarStyles = {
    backgroundColor: theme.palette.common.white,
    position: 'static',
    display: { xs: 'none', sm: 'flex' } // Hide on small screens
  };

  const boxStyles = {
    width: 100,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingTop: theme.spacing(2),
  };

  const drawerStyles = {
    '& .MuiDrawer-paper': {
      border: 'none',
      width: 200,
      justifyContent: 'center',
      alignItems: 'end',
      position: 'absolute',
    },
  };

  return (
    <>
      <AppBar sx={appBarStyles}>
        <Toolbar sx={toolbarStyles}>
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerToggle}
            sx={{ color: theme.palette.primary.main }}
          >
            <MenuIcon fontSize="large" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={isMobile ? drawerOpen : true}
        onClose={handleDrawerToggle}
        variant={isMobile ? 'temporary' : 'persistent'}
        sx={drawerStyles}
        PaperProps={{ sx: drawerStyles }}
      >
        <Box sx={boxStyles}>
          <List>
            <ListItem>
              <ListItemIcon sx={listItemIconStyles} data-tooltip="About" onClick={() => scrollToSection('about')}>
                <Face3Icon fontSize="medium" />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={listItemIconStyles} data-tooltip="Serviços" onClick={() => scrollToSection('services')}>
                <PhonelinkIcon fontSize="medium" />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={listItemIconStyles} data-tooltip="Skills" onClick={() => scrollToSection('skills')}>
                <DesignServicesIcon fontSize="medium" />
              </ListItemIcon>
            </ListItem>
            <ListItem>
              <ListItemIcon sx={listItemIconStyles} data-tooltip="Projects" onClick={() => scrollToSection('projects')}>
                <CodeIcon fontSize="medium" />
              </ListItemIcon>
            </ListItem>           
            <ListItem>
              <ListItemIcon sx={listItemIconStyles} data-tooltip="Contato" onClick={() => scrollToSection('contact')}>
                <ContactMailIcon fontSize="medium" />
              </ListItemIcon>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default NavBar;
