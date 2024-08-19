import { Container, Grid, Typography, styled, Box } from '@mui/material';
import Programadora from '../../../../assets/images/programadora.png';
import SocialButton from '../../../../components/SocialButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

const StyledContact = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.secondary.main,
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.common.white,
}));

const StyledImg = styled('img')(() => ({
  width: '90%',
}));

const TitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    width: 'auto',
    marginBottom: theme.spacing(0),
  },
}));

const BodyTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',
  marginBottom: theme.spacing(2),
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    width: 'auto',
    marginBottom: theme.spacing(0),
  },
}));

const SocialTitleTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'center',
  width: '100%',  
  [theme.breakpoints.up('md')]: {
    textAlign: 'left',
    width: 'auto',
    marginTop: theme.spacing(0),
    marginRight: '20px'
  },
}));

const SocialGrid = styled(Grid)(({ theme }) => ({
  justifyContent: 'center',
  [theme.breakpoints.up('md')]: {
    justifyContent: 'flex-start',
  },
}));

const Contact = () => {
  return (
    <StyledContact id="contact">
      <Container>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} md={6}>
            <TitleTypography variant="h3">Contato</TitleTypography>
            <BodyTypography variant="body1" paragraph>
              Seu próximo projeto começa aqui! Entre em contato para discutirmos como podemos colaborar e alcançar seus objetivos. Estou ansiosa para ouvir de você!
            </BodyTypography>
            <Box 
              display="flex" 
              alignItems="center" 
              flexDirection={{ xs: 'column', md: 'row' }} 
              width="100%"
              margin="30px 0"
            >
              <SocialTitleTypography variant="body2">
                REDES SOCIAIS:
              </SocialTitleTypography>
              <SocialGrid>
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
              </SocialGrid>              
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
