import React, { useState } from 'react';
import { Container, styled, Typography, Box } from '@mui/material';
import Programadora from '../../../../assets/images/programadora.png';
import StyledButton from '../../../../components/StyledButton';

const StyledProjects = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.common.white,
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: theme.palette.primary.main,
  padding: theme.spacing(2),
  flexDirection: "column",
}));

const GridContainer = styled("div")(({ theme }) => ({
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "1200px",
  margin: '75px 0'
}));

const GridItem = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  '& img': {
    width: "100%",
    height: "auto",
    transition: "transform 0.3s ease-in-out",
    filter: 'sepia(100%) hue-rotate(200deg) saturate(100%) brightness(70%)'
  },
  '&:hover img': {
    transform: "scale(1.1)",
  },
  '&:hover div': {
    opacity: 1,
  },
}));

const Overlay = styled(Box)(() => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgb(47 30 153 / 46%);",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));

const ProjectTitle = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

const ProjectSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginTop: theme.spacing(1),
}));

const allProjects = [
  { imgSrc: Programadora, title: 'Projeto 1', subtitle: 'Subtítulo 1' },
  { imgSrc: Programadora, title: 'Projeto 2', subtitle: 'Subtítulo 2' },
  { imgSrc: Programadora, title: 'Projeto 3', subtitle: 'Subtítulo 3' },
  { imgSrc: Programadora, title: 'Projeto 4', subtitle: 'Subtítulo 4' },
  { imgSrc: Programadora, title: 'Projeto 5', subtitle: 'Subtítulo 5' },
  { imgSrc: Programadora, title: 'Projeto 6', subtitle: 'Subtítulo 6' },
  { imgSrc: Programadora, title: 'Projeto 7', subtitle: 'Subtítulo 7' },
  { imgSrc: Programadora, title: 'Projeto 8', subtitle: 'Subtítulo 8' },
  { imgSrc: Programadora, title: 'Projeto 5', subtitle: 'Subtítulo 5' },
  { imgSrc: Programadora, title: 'Projeto 6', subtitle: 'Subtítulo 6' },
  
 
];

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState(allProjects.slice(0, 8));
  const [hasMore, setHasMore] = useState(allProjects.length > 8);

  const handleLoadMore = () => {
    const nextProjects = allProjects.slice(displayedProjects.length, displayedProjects.length + 8);
    setDisplayedProjects([...displayedProjects, ...nextProjects]);
    if (displayedProjects.length + nextProjects.length >= allProjects.length) {
      setHasMore(false);
    }
  };

  return (
    <StyledProjects>
      <Container>
        <Typography variant="h3" gutterBottom>Projetos</Typography>
        <GridContainer>
          {displayedProjects.map((project, index) => (
            <GridItem key={index}>
              <img src={project.imgSrc} alt={project.title} />
              <Overlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              </Overlay>
            </GridItem>
          ))}
        </GridContainer>
        {hasMore && (
          <Box sx={{ display: 'flex', justifyContent: 'center'}}>
            <StyledButton onClick={handleLoadMore}>
              Outros Projetos
            </StyledButton>
          </Box>
        )}
      </Container>
    </StyledProjects>
  );
};

export default Projects;
