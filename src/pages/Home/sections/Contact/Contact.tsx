import { Container, Grid, Typography, styled, Box } from '@mui/material';
import Programadora from '../../../../assets/images/programadora.png';
import SocialButton from '../../../../components/SocialButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contact = () => {

  const StyledContact = styled("div")(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
  }));

  const StyledImg = styled("img")(() => ({
    width: '90%',
  }));

  return (
    <StyledContact>
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h3">Contato</Typography>
            <Typography variant="body1" paragraph>
              Seu próximo projeto começa aqui! Entre em contato para discutirmos como podemos colaborar e alcançar seus objetivos. Estou ansiosa para ouvir de você!
            </Typography>            
            <Box display="flex" alignItems="center" mr={2}>
              <Typography variant="body2" mr={2}>
                REDES SOCIAIS:
              </Typography>
              <Grid container spacing={1} md={6}>                
                    <SocialButton href="https://wa.me/5518997872265">
                      <WhatsAppIcon fontSize='large'/>
                    </SocialButton>     
                    <SocialButton href="https://www.linkedin.com/in/rafaela-marchesi-barrionuevo-81ba7b10b/">
                      <LinkedInIcon fontSize='large'/>
                    </SocialButton>
                    <SocialButton href="https://www.instagram.com/rafamarchesi/">
                      <InstagramIcon fontSize='large'/>
                    </SocialButton>                 
                    <SocialButton href="https://github.com/rafamarchesi">
                      <GitHubIcon fontSize='large'/>
                    </SocialButton>                  
                </Grid>              
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box textAlign="center">
              <StyledImg src={Programadora} alt="Foto de rosto Rafaela Marchesi" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </StyledContact>
  );
}

export default Contact;
