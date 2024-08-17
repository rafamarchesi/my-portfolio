import { Container, Grid, Typography, styled } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';
import EmailIcon from '@mui/icons-material/Email';
import StyledButton from '../../../../components/StyledButton';
import curriculoPdf from '../../../../assets/pdf/curriculo.pdf';

const Hero = () => {

  const StyledHero = styled("div")(() => ({    
    height: "100vh",
    display: "flex",
    alignItems: "center"
  }));

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = curriculoPdf; 
    link.download = 'curriculo.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleContactClick = () => {
    setTimeout(() => {
      const contactElement = document.getElementById('contact');
      if (contactElement) {
        contactElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        console.error("Elemento de contato não encontrado");
      }
    }, 100);
  };

  return (
    <>
      <StyledHero>
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography variant="h1" textAlign="center" color="primary">Olá, eu sou Rafa</Typography>
              <Typography variant="h2" textAlign="center">Eu construo e desenvolvo sites!</Typography>
              <Grid container spacing={2} display="flex" justifyContent="center" pt={3}>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleDownload}>
                    <DownloadIcon /> 
                    <Typography textAlign="center">
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid item xs={12} md={4} display="flex" justifyContent="center">
                  <StyledButton onClick={handleContactClick}>
                    <EmailIcon /> 
                    <Typography textAlign="center">
                      Contact Me
                    </Typography>
                  </StyledButton>                  
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  );
}

export default Hero;
