import { Grid, Typography, styled, useTheme } from '@mui/material';
import Celular from '../../../../assets/images/celular.png';

const yellow ="#FFDE59";

const StyledServices = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height: '100%',
  display: 'flex',
  alignItems: 'center',
  color: theme.palette.primary.main,
}));

const StyledImg = styled('img')(() => ({
  width: '100%',
  marginTop: '30px',
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

const StyledBox = styled('div')<{ backgroundColor: string; color: string }>(({ backgroundColor, color }) => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center',
  backgroundColor,
  color,
  padding: '35px 70px'
  
}));

const Services = () => {
  const theme = useTheme();

  return (
    <>
      <StyledServices>        
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
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox backgroundColor={yellow} color="black">
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox backgroundColor="white" color={theme.palette.primary.main}>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox backgroundColor={theme.palette.secondary.main} color="white">
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox backgroundColor={yellow} color="black">
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox backgroundColor="white" color={theme.palette.primary.main}>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
              </SpaceBetweenBox>
            </Grid>
          </Grid>        
      </StyledServices>
    </>
  );
};

export default Services;
