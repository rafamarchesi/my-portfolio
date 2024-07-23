import React from "react";
import Slider from "react-slick";
import { Container, styled, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "100vh",
  display: "flex",
  alignItems: "center",
  color: theme.palette.common.white,
  padding: theme.spacing(2),
}));

const StyledSlider = styled(Slider)({
  '.slick-slide': {
    padding: '0 10px',
  },
  '.slick-list': {
    padding: '0 50px',
  },
  '.slick-prev, .slick-next': {
    zIndex: 1,
    color: '#fff',
  }
});

const skills = [
  { name: 'JavaScript', icon: '🟨' },
  { name: 'React', icon: '⚛️' },
  { name: 'Node.js', icon: '🟩' },
  { name: 'CSS', icon: '🎨' },
  { name: 'HTML', icon: '📄' },
  
];

const Skills = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <StyledSkills>
      <Container>
        <Typography variant="h3" gutterBottom>Skills</Typography>
        <StyledSlider {...settings}>
          {skills.map((skill, index) => (
            <div key={index}>
              <Typography variant="h5" align="center">{skill.icon}</Typography>
              <Typography variant="h6" align="center">{skill.name}</Typography>
            </div>
          ))}
        </StyledSlider>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
