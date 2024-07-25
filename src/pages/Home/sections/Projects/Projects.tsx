import React, { useState } from 'react';
import { Container, styled, Typography, Box } from '@mui/material';
import StyledButton from '../../../../components/StyledButton';
import Cabonnet from '../../../../assets/images/portfolio/icones/cabonnet.jpg';
import Icovet from '../../../../assets/images/portfolio/icones/icovet.jpg';
import InstitutoColuna from '../../../../assets/images/portfolio/icones/instituto-coluna.jpg';
import MadereiraPrudentao from '../../../../assets/images/portfolio/icones/madereira-prudentao.jpg';
import Pinheiro from '../../../../assets/images/portfolio/icones/pinheiro.jpg';
import Umoe from '../../../../assets/images/portfolio/icones/umoe.jpg';
import Cantagallo from '../../../../assets/images/portfolio/icones/restaurante-cantagallo.jpg';
import Hcred from '../../../../assets/images/portfolio/icones/hcred.jpg';
import VxLog from '../../../../assets/images/portfolio/icones/vx-log.jpg';
import Multiplus from '../../../../assets/images/portfolio/icones/multiplus.jpg';
import RogerioLeal from '../../../../assets/images/portfolio/icones/rogerio-leal.jpg';
import Castilho from '../../../../assets/images/portfolio/icones/castilho.jpg';


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
  { imgSrc: Cabonnet, title: 'Cabonnet', subtitle: 'Subtítulo 1' },
  { imgSrc: Icovet, title: 'Icovet', subtitle: 'Subtítulo 2' },
  { imgSrc: InstitutoColuna, title: 'Instituto da Coluna', subtitle: 'Subtítulo 3' },
  { imgSrc: MadereiraPrudentao, title: 'Madereira Prudentão', subtitle: 'Subtítulo 4' },
  { imgSrc: Pinheiro, title: 'Pinheiro & D`arce', subtitle: 'Subtítulo 5' },
  { imgSrc: Umoe, title: 'Umoe', subtitle: 'Subtítulo 6' },
  { imgSrc: VxLog, title: 'Vx Log', subtitle: 'Subtítulo 7' },
  { imgSrc: Cantagallo, title: 'Restaurante Cantagallo', subtitle: 'Subtítulo 8' },
  { imgSrc: Hcred, title: 'HCred', subtitle: 'Subtítulo 5' },
  { imgSrc: Multiplus, title: 'Colégio Multiplus', subtitle: 'Subtítulo 6' },
  { imgSrc: RogerioLeal, title: 'Rogério Leal', subtitle: 'Subtítulo 6' },
  { imgSrc: Castilho, title: 'Oftalmologia Castilho', subtitle: 'Subtítulo 6' },
  
 
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
