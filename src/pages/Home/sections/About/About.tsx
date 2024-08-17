import { Container, Grid, Typography, styled, Box } from '@mui/material'
import Avatar from '../../../../assets/images/avatar.jpg'


const About = () => {

  const StyledAbout = styled("div")(({ theme })=>({    
    backgroundColor: theme.palette.primary.main,
    height: "100vh",
    display: "flex",
    alignItems: "center",
    color: theme.palette.common.white,
       [theme.breakpoints.down('sm')]: { 
          padding: "100px 20px 0",  
          height: "auto"
        },  
  }))

  const StyledImg = styled("img")(()=>({    
    width: '100%',
    borderRadius: '0 100% 0 0'
       
  }))

  return (
    <>
     <StyledAbout id="about">
        <Container>
          <Grid container justifyContent="space-between">
            <Grid item xs={12} md={6}>
              <Typography variant="h3">Sobre Mim</Typography>
              <Typography variant="body1" component="div">
                <p>Eu trabalho há mais de 6 anos como desenvolvedora Full Stack. Já criei diversos e-commerces e gerenciei vários projetos. Agora, estou focando mais em front-end, aprendendo tecnologias como React e React Native.</p>
                <p>Moro em São Paulo e recentemente decidi virar freelancer, depois de trabalhar em várias agências de publicidade. Essa mudança me permitiu explorar novos projetos de forma independente e criativa.</p>
                <p>Tenho 36 anos e sou apaixonada por tecnologia e inovação. E, claro, não posso esquecer dos meus três cachorros incríveis: Pantufa, Mel e Zé, que tornam meus dias ainda mais especiais.</p>
              </Typography>                                              
            </Grid>
            <Grid item xs={12} md={5}>
              <Box textAlign="center" mt={2}>
                <StyledImg src={Avatar} alt="Foto de rosto Rafaela Marchesi"  />
              </Box>                                       
            </Grid>
          </Grid>   
        </Container>       
    </StyledAbout>
      
    </>
  )
}

export default About