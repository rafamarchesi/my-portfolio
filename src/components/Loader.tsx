import React from 'react';
import { styled } from '@mui/material';
import Logo from '../assets/images/icon.png';

const StyledLoader = styled('div')<{ hide: boolean }>(({ hide }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  zIndex: 9999,
  opacity: hide ? 0 : 1,
  visibility: hide ? 'hidden' : 'visible',
  transition: 'opacity 0.5s ease-out, visibility 0.5s ease-out',
}));

const StyledLogo = styled('img')(() => ({
  width: '150px',
  opacity: 0, 
  transform: 'scale(0.8)', 
  animation: 'fadeInScale 1.5s ease-in-out forwards',
  '@keyframes fadeInScale': {
    '0%': {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    '100%': {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
}));

const Loader: React.FC<{ hide: boolean }> = ({ hide }) => {
  return (
    <StyledLoader hide={hide}>
      <StyledLogo src={Logo} alt="Logo" />
    </StyledLoader>
  );
};

export default Loader;