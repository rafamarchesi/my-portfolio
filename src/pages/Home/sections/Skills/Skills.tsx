import Slider from "react-slick";
import { Container, styled, Typography } from '@mui/material';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import HtmlIcon from '../../../../../src/assets/images/html.png';
import CssIcon from '../../../../../src/assets/images/css.png';
import GitIcon from '../../../../../src/assets/images/git.png';
import MysqlIcon from '../../../../../src/assets/images/mysql.png';
import PhpIcon from '../../../../../src/assets/images/php.png';
import JsIcon from '../../../../../src/assets/images/js.png';
import ReactIcon from '../../../../../src/assets/images/react.png';
import TypescriptIcon from '../../../../../src/assets/images/ts.png';
import SassIcon from '../../../../../src/assets/images/sass.png';

const StyledSkills = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  height: "700px",
  display: "flex",
  alignItems: "center",
  color: theme.palette.common.white,
  padding: theme.spacing(2),
}));

const StyledSlider = styled(Slider)({
  '.slick-slide': {
    padding: '100px 10px 70px'
  },  
  '.slick-prev, .slick-next': {
    zIndex: 1,
    color: '#fff',
  },
  '.slick-dots li button:before': {
    fontSize: '12px',
    color: '#fff',
  },
  '.slick-dots li.slick-active button:before': {
    color: '#fff',
  }
});

const StyledImage = styled("img")({
  width: '100px',
  height: 'auto',
  display: 'block',
  margin: '0 auto 25px',
});

const skills = [  
  { name: 'Javascript', icon: JsIcon },
  { name: 'Mysql', icon: MysqlIcon },
  { name: 'PHP', icon: PhpIcon },
  { name: 'React', icon: ReactIcon },
  { name: 'Git', icon: GitIcon },
  { name: 'CSS', icon: CssIcon },
  { name: 'HTML', icon: HtmlIcon },
  { name: 'SASS', icon: SassIcon },
  { name: 'Typescript', icon: TypescriptIcon }  
];

const Skills = () => {
  const settings = {
    dots: true,    
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          arrows: false
        },
      },
    ],
  };

  return (
    <StyledSkills id="skills">
      <Container>
        <Typography variant="h3" gutterBottom>Skills</Typography>
        <StyledSlider {...settings}>
          {skills.map((skill, index) => (
            <div key={index}>
              <StyledImage src={skill.icon} alt={skill.name} />
              <Typography variant="body2" align="center">{skill.name}</Typography>
            </div>
          ))}
        </StyledSlider>
      </Container>
    </StyledSkills>
  );
};

export default Skills;
