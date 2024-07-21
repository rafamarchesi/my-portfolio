import { Container, Grid, Typography, styled } from '@mui/material';
import Celular from '../../../../assets/images/celular.png';

const StyledServices = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  color: theme.palette.primary.main,
}));

const StyledImg = styled("img")(() => ({
  width: '65%',
  marginTop: '30px'
}));

const CenterAlignedBox = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flexStart',
  height: '100%', 
}));

const SpaceBetweenBox = styled("div")(() => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-evenly',
  height: '100%', 
}));

const StyledBox = styled("div")(() => ({
  display: 'flex',
  justifyContent: 'flex-start',
  alignItems: 'center'
}));

const Services = () => {
  return (
    <>
      <StyledServices>
        <Container style={{ height: '100%' }}>
          <Grid container spacing={2} style={{ height: '100%' }}>
            <Grid item xs={12} md={6} style={{ display: 'flex' }}>
              <CenterAlignedBox>
                <Typography variant="h3">Soluções Inovadoras</Typography>  
                <Typography variant="body1" paragraph>
                  Estratégias Eficazes para Resultados Reais
                </Typography>
                <StyledImg src={Celular} alt="Foto de rosto Rafaela Marchesi" />
              </CenterAlignedBox>
            </Grid>
            <Grid item xs={12} md={6} style={{ display: 'flex' }}>
              <SpaceBetweenBox>
                <StyledBox>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
                <StyledBox>
                  <Typography variant="h4">Criação de Websites</Typography>
                  <Typography variant="body1">Desenvolvimento de sites de código limpo e eficiente.</Typography>
                </StyledBox>
              </SpaceBetweenBox>
            </Grid>
          </Grid>
        </Container>
      </StyledServices>
    </>
  );
};

export default Services;
