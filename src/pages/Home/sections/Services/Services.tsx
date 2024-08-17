import { Grid, Typography, styled, useTheme } from '@mui/material';
import Celular from '../../../../assets/images/celular.png';


const yellow = "#FFDE59";

const StyledServices = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
  [theme.breakpoints.down('sm')]: { 
    padding: "100px 0 0",  
    height: "auto"
  }, 
}));

const StyledImg = styled('img')(({ theme }) => ({
  width: '100%',
  marginTop: '30px',
  [theme.breakpoints.down('sm')]: {
    marginBottom: '30px', 
  },
}));

const CenterAlignedBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  height: '100%',
}));

const SpaceBetweenBox = styled('div')(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: '100%',
}));

const StyledBox = styled('div')<{ backgroundColor: string; color: string }>(({ backgroundColor, color, theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
  backgroundColor,
  color,
  padding: '35px 70px',
  [theme.breakpoints.down('sm')]: {
    padding: '40px', 
  },
}));

const StyledTypographyH4 = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    width: '100%',   
    marginBottom: '15px'  
  },
}));

const Services = () => {
  const theme = useTheme();

  return (
    <StyledServices id="services">        
      <Grid container spacing={2}>
        <Grid item xs={12} md={6} style={{ display: 'flex', justifyContent: 'center' }}>
          <CenterAlignedBox>
            <Typography variant="h3">Soluções</Typography>
            <Typography variant="h3">Inovadoras</Typography>
            <Typography variant="body1" paragraph>
              Estratégias Eficazes para Resultados Reais.
            </Typography>
            <StyledImg src={Celular} alt="Foto de rosto Rafaela Marchesi" />
          </CenterAlignedBox>
        </Grid>
        <Grid item xs={12} md={6}>
          <SpaceBetweenBox>
            <StyledBox backgroundColor={theme.palette.secondary.main} color="white">
              <StyledTypographyH4 variant="h4">Criação de Websites</StyledTypographyH4>
              <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
            </StyledBox>
            <StyledBox backgroundColor={yellow} color="black">
              <StyledTypographyH4 variant="h4">E-commerce</StyledTypographyH4>
              <Typography variant="body1">Criação de lojas online em plataformas especializadas.</Typography>
            </StyledBox>
            <StyledBox backgroundColor="white" color={theme.palette.primary.main}>
              <StyledTypographyH4 variant="h4">Layouts Intuitivos</StyledTypographyH4>
              <Typography variant="body1">Técnicas que favorecem a experiência de navegação do usuário.</Typography>
            </StyledBox>
            <StyledBox backgroundColor={theme.palette.secondary.main} color="white">
              <StyledTypographyH4 variant="h4">Design Responsivo</StyledTypographyH4>
              <Typography variant="body1">Totalmente adaptável aos mais diversos tipos de tela.</Typography>
            </StyledBox>
            <StyledBox backgroundColor="white" color={theme.palette.primary.main}>
              <StyledTypographyH4 variant="h4">Otimização de Performance </StyledTypographyH4>
              <Typography variant="body1">Seu site carreguando rapidamente e com uma navegação fluida.</Typography>
            </StyledBox>
            <StyledBox backgroundColor={yellow} color="black">
              <StyledTypographyH4 variant="h4">E-mail Marketing</StyledTypographyH4>
              <Typography variant="body1">Criação de emails que capturam a atenção e incentivam a ação.</Typography>
            </StyledBox>            
          </SpaceBetweenBox>
        </Grid>
      </Grid>        
    </StyledServices>
  );
};

export default Services;
