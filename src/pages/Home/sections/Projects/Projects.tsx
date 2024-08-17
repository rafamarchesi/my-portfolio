import React, { useState } from 'react';
import { Container, styled, Typography, Box } from '@mui/material';

import StyledButton from '../../../../components/StyledButton';
import ProjectModal from '../../../../components/ProjectModal';


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
import Concreta from '../../../../assets/images/portfolio/icones/concreta.jpg';
import LeoMorato from'../../../../assets/images/portfolio/icones/leomorato.png';
import AtuaCred from '../../../../assets/images/portfolio/icones/atuacred.jpg';


//telas
//Cantagallo
import Canta1 from '../../../../assets/images/portfolio/telas/cantagallo/canta-1.png';
import Canta2 from '../../../../assets/images/portfolio/telas/cantagallo/canta-2.png';
import Canta3 from '../../../../assets/images/portfolio/telas/cantagallo/canta-3.png';
import Canta4 from '../../../../assets/images/portfolio/telas/cantagallo/canta-4.png';


//Cabonnet
import Cabonnet1 from '../../../../assets/images/portfolio/telas/cabonnet/cabonnet-1.png';
import Cabonnet2 from '../../../../assets/images/portfolio/telas/cabonnet/cabonnet-2.png';
import Cabonnet3 from '../../../../assets/images/portfolio/telas/cabonnet/cabonnet-3.png';
import Cabonnet4 from '../../../../assets/images/portfolio/telas/cabonnet/cabonnet-4.png';

//Atuacred
import Atuacred1 from '../../../../assets/images/portfolio/telas/atuacred/home.png';
import Atuacred2 from '../../../../assets/images/portfolio/telas/atuacred/blog.png';
import Atuacred3 from '../../../../assets/images/portfolio/telas/atuacred/blog-interna.png';


//Castilho
import Castilho1 from '../../../../assets/images/portfolio/telas/castilho/home.jpg';
import Castilho2 from '../../../../assets/images/portfolio/telas/castilho/blog.jpg';

//Concreta
import Concreta1 from '../../../../assets/images/portfolio/telas/concreta/home.jpg';
import Concreta2 from '../../../../assets/images/portfolio/telas/concreta/institucional.png';
import Concreta3 from '../../../../assets/images/portfolio/telas/concreta/interna.jpg';
import Concreta4 from '../../../../assets/images/portfolio/telas/concreta/contato.png';

//Madereira Prudentão
import Madereira1 from '../../../../assets/images/portfolio/telas/madereira/home.jpg';
import Madereira2 from '../../../../assets/images/portfolio/telas/madereira/madeiras.png';
import Madereira3 from '../../../../assets/images/portfolio/telas/madereira/quem-somos.png';

//Icovet
import Icovet1 from '../../../../assets/images/portfolio/telas/icovet/home.png';
import Icovet2 from '../../../../assets/images/portfolio/telas/icovet/produtos.png';
import Icovet3 from '../../../../assets/images/portfolio/telas/icovet/produto.png';
import Icovet4 from '../../../../assets/images/portfolio/telas/icovet/quem-somos.png';

//Instituto da Coluna
import Instituto1 from '../../../../assets/images/portfolio/telas/instituto-coluna/home.png';
import Instituto2 from '../../../../assets/images/portfolio/telas/instituto-coluna/tratamentos.png';
import Instituto3 from '../../../../assets/images/portfolio/telas/instituto-coluna/quem-somos.png';
import Instituto4 from '../../../../assets/images/portfolio/telas/instituto-coluna/blog.png';
import Instituto5 from '../../../../assets/images/portfolio/telas/instituto-coluna/interna-blog.png';

//Umoe
import Umoe1 from '../../../../assets/images/portfolio/telas/umoe/home.jpg';
import Umoe2 from '../../../../assets/images/portfolio/telas/umoe/nossos-produtos.png';
import Umoe3 from '../../../../assets/images/portfolio/telas/umoe/produto.png';
import Umoe4 from '../../../../assets/images/portfolio/telas/umoe/conselho.png';
import Umoe5 from '../../../../assets/images/portfolio/telas/umoe/sobre-umoe.png';

//VX Log
import Vx1 from '../../../../assets/images/portfolio/telas/vx-log/home.png';
import Vx2 from '../../../../assets/images/portfolio/telas/vx-log/interna.png';

//Pinheiro e D'arce
import Pinheiro1 from '../../../../assets/images/portfolio/telas/pinheiro/home.png';
import Pinheiro2 from '../../../../assets/images/portfolio/telas/pinheiro/areas-atuacao.png';
import Pinheiro3 from '../../../../assets/images/portfolio/telas/pinheiro/estrutura.png';
import Pinheiro4 from '../../../../assets/images/portfolio/telas/pinheiro/links-uteis.jpg';
import Pinheiro5 from '../../../../assets/images/portfolio/telas/pinheiro/perfil-escritorio.png';

//Hcred
import Hcred1 from '../../../../assets/images/portfolio/telas/hcred/home.png';
import Hcred2 from '../../../../assets/images/portfolio/telas/hcred/saude.png';
import Hcred3 from '../../../../assets/images/portfolio/telas/hcred/blog.png';


//Colégio Multiplus
import Multiplus1 from '../../../../assets/images/portfolio/telas/multiplus/home.jpg';
import Multiplus2 from '../../../../assets/images/portfolio/telas/multiplus/interna.png';
import Multiplus3 from '../../../../assets/images/portfolio/telas/multiplus/blog.png';


//Rogerio Leal
import RogerioLeal1 from '../../../../assets/images/portfolio/telas/rogerio-leal/rogerio-leal-1.png';
import RogerioLeal2 from '../../../../assets/images/portfolio/telas/rogerio-leal/rogerio-leal-2.png';
import RogerioLeal3 from '../../../../assets/images/portfolio/telas/rogerio-leal/rogerio-leal-3.png';


//Leo Morato
import LeoMorato1 from '../../../../assets/images/portfolio/telas/leo-morato/home.png';
import LeoMorato2 from '../../../../assets/images/portfolio/telas/leo-morato/noticia.png';
import LeoMorato3 from '../../../../assets/images/portfolio/telas/leo-morato/galeria.png';
import LeoMorato4 from '../../../../assets/images/portfolio/telas/leo-morato/equipe.png';

const allProjects: Project[] = [
  { 
    imgSrc: Cantagallo, 
    modalImgSrcs: [
      Canta1,
      Canta2,
      Canta3,
      Canta4      
    ],
    title: 'Restaurante Cantagallo', 
    subtitle: 'Desenvolvimento FullStack' 
  },
  { 
    imgSrc: Pinheiro, 
    modalImgSrcs: [
      Pinheiro1,
      Pinheiro2,
      Pinheiro3,
      Pinheiro4,
      Pinheiro5
    ],
    title: 'Pinheiro & Darce', 
    subtitle: 'Desenvolvimento FullStack' 
  },
  { 
    imgSrc: Cabonnet, 
    modalImgSrcs: [
      Cabonnet1,
      Cabonnet2,
      Cabonnet3,
      Cabonnet4
    ],
    title: 'Cabonnet', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: Icovet, 
    modalImgSrcs: [
      Icovet1,
      Icovet2,
      Icovet3,
      Icovet4
    ],
    title: 'Icovet', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: InstitutoColuna, 
    modalImgSrcs: [
      Instituto1,
      Instituto2,
      Instituto3,
      Instituto4,
      Instituto5
    ],
    title: 'Instituto da Coluna', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: MadereiraPrudentao, 
    modalImgSrcs: [
      Madereira1,
      Madereira2,
      Madereira3
    ],
    title: 'Madereira Prudentão', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: Umoe, 
    modalImgSrcs: [
      Umoe1,
      Umoe2,
      Umoe3,
      Umoe4,
      Umoe5

    ],
    title: 'Umoe', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: VxLog, 
    modalImgSrcs: [
      Vx1,
      Vx2
    ],
    title: 'Vx Log', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: Hcred, 
    modalImgSrcs: [
      Hcred1,
      Hcred2,
      Hcred3
    ],
    title: 'HCred', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: Multiplus, 
    modalImgSrcs: [
      Multiplus1,
      Multiplus2,
      Multiplus3
    ],
    title: 'Colégio Multiplus', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: RogerioLeal, 
    modalImgSrcs: [
      RogerioLeal1,
      RogerioLeal2,
      RogerioLeal3
    ],
    title: 'Rogério Leal', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: Castilho, 
    modalImgSrcs: [
      Castilho1,
      Castilho2
    ],
    title: 'Oftalmologia Castilho', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: AtuaCred, 
    modalImgSrcs: [
      Atuacred1,
      Atuacred2,
      Atuacred3
    ],
    title: 'AtuaCred', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: Concreta, 
    modalImgSrcs: [
      Concreta1,
      Concreta2,
      Concreta3,
      Concreta4
    ],
    title: 'Concreta Construções', 
    subtitle: 'Desenvolvimento BackEnd' 
  },
  { 
    imgSrc: LeoMorato, 
    modalImgSrcs: [
      LeoMorato1,
      LeoMorato2,
      LeoMorato3,
      LeoMorato4
    ],
    title: 'Leo Morato Arquitetura', 
    subtitle: 'Desenvolvimento FullStack' 
  }
];



interface Project {
  imgSrc: string;
  modalImgSrcs: string[];
  title: string;
  subtitle: string;
}

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
  gridTemplateColumns: "repeat(1, 1fr)",
  gap: theme.spacing(2),
  width: "100%",
  maxWidth: "1200px",
  margin: '75px 0',
  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: "repeat(2, 1fr)",
  },
  [theme.breakpoints.up('md')]: {
    gridTemplateColumns: "repeat(4, 1fr)",
  },
}));

const GridItem = styled(Box)(() => ({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  '& img': {
    width: "100%",
    height: "auto",    
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
  backgroundColor: "rgb(47 30 153 / 82%)",
  color: "#fff",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  opacity: 0,
  transition: "opacity 0.3s ease-in-out",
}));

const Title = styled(Typography)(() => ({
  marginTop: "120px",
}));

const ProjectTitle = styled(Typography)(() => ({
  fontSize: "1.5rem",
  fontWeight: "bold",
}));

const ProjectSubtitle = styled(Typography)(({ theme }) => ({
  fontSize: "1rem",
  marginTop: theme.spacing(1),
}));

const ButtonContainer = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'center',
  margin: '100px 0'
}));

const Projects = () => {
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>(allProjects.slice(0, 8));
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const handleLoadMore = () => {
    setDisplayedProjects(allProjects);
    setExpanded(true);
  };

  const handleLoadLess = () => {
    setDisplayedProjects(allProjects.slice(0, 8));
    setExpanded(false);
    const titleElement = document.getElementById('title');
    if (titleElement) {
      titleElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <StyledProjects>
      <Container>
        <Title variant="h3" id="title">Meus Projetos</Title>
        <GridContainer>
          {displayedProjects.map((project, index) => (
            <GridItem key={index} onClick={() => {
              setSelectedProject(project);
              setOpen(true);
            }}>
              <img src={project.imgSrc} alt={project.title} />
              <Overlay>
                <ProjectTitle>{project.title}</ProjectTitle>
                <ProjectSubtitle>{project.subtitle}</ProjectSubtitle>
              </Overlay>
            </GridItem>
          ))}
        </GridContainer>
        <ButtonContainer>
          {expanded ? (
            <StyledButton onClick={handleLoadLess}>Mostrar Menos</StyledButton>
          ) : (
            <StyledButton onClick={handleLoadMore}>Mostrar Mais</StyledButton>
          )}
        </ButtonContainer>
      </Container>
      <ProjectModal open={open} project={selectedProject} handleClose={() => setOpen(false)} />
    </StyledProjects>
  );
};

export default Projects;