import { Container,styled } from '@mui/material';

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  color: theme.palette.common.white,
}));



const Skills = () => {
  return (
    <>
    <StyledSkills>
        <Container >
          skills
        </Container>
      </StyledSkills>
    </>
  );
};

export default Skills;
