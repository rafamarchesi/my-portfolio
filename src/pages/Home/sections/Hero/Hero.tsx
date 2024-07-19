import { Container, Grid, Typography, styled, Button } from '@mui/material'
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';


const Hero = () => {

  const StyledHero = styled("div")(()=>({    
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }))

  return (
    <>
      <StyledHero >
        <Container>
          <Grid container spacing={2}  >
            <Grid item xs={12}>
              <Typography variant="h1" textAlign="center" color="primary">Olá, eu sou Rafa</Typography>
              <Typography variant="h2" textAlign="center">Eu construo e desenvolvo sites!</Typography>
              <Grid container spacing={2} display="flex" justifyContent="center">
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>                
                    <DownloadIcon />
                    Download CV
                  </Button>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <Button>
                    <EmailIcon />
                    Contact Me
                  </Button>
                </Grid>
              </Grid>                          
            </Grid>
          </Grid>   
        </Container>       
      </StyledHero >
    </>
  )
}

export default Hero
