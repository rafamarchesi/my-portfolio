import { styled } from '@mui/material';
import { ReactNode } from 'react';
import IconButton from '@mui/material/IconButton';


interface SocialButtonProps {
  href: string;
  children: ReactNode;
}

const SocialButton: React.FC<SocialButtonProps> = ({ href, children }) => {
  const SocialButtonStyled = styled("a")(({ theme }) => ({    
    color: theme.palette.common.white,
    textDecoration: 'none',
    padding: '5px',    
    display: 'inline-block',
    textAlign: 'center',   
    '&:hover': {
      color: theme.palette.primary.dark,
    },
  }));

const StyledIconButton = styled(IconButton)(() => ({
  backgroundColor: 'transparent', 
  color: 'inherit', 
  '&:hover': {
    backgroundColor: 'transparent', 
  },
}));  
  

  return (
    <SocialButtonStyled href={href} target="_blank" rel="noopener noreferrer">
      <StyledIconButton>
        {children}
      </StyledIconButton>
    </SocialButtonStyled>
  );
}

export default SocialButton;