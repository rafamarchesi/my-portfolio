import { Typography, styled } from '@mui/material';

const StyledFooter = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,  
  display: "flex",
  color: theme.palette.common.white,
  justifyContent: "center",
  padding: "20px"
}));

const Footer = () => {
  return (
    <>
    <StyledFooter>
    <Typography variant="body1" >COPYRIGHT © 2024 - Rafaela Marchesi. Todos os direitos reservados.</Typography>
      
    </StyledFooter>
      
    </>
  );
};

export default Footer;
