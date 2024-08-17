import React from 'react';
import { Dialog, DialogTitle, DialogContent, Box, Slide } from '@mui/material';
import { TransitionProps } from '@mui/material/transitions';
import StyledButton from '../components/StyledButton';

interface Project {
  imgSrc: string;
  modalImgSrcs: string[];
  title: string;
  subtitle: string;
}

interface ProjectModalProps {
  open: boolean;
  project: Project | null;
  handleClose: () => void;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ProjectModal: React.FC<ProjectModalProps> = ({ open, project, handleClose }) => {
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      maxWidth="lg"
      fullWidth
      TransitionComponent={Transition}
      transitionDuration={{ enter: 500, exit: 500 }}
    >
      {project && (
        <>
          <DialogTitle>{project.title}</DialogTitle>
          <DialogContent>
            <Box 
              sx={{ 
                display: 'flex', 
                flexDirection: 'column', 
                alignItems: 'center', 
                gap: '20px', 
                padding: '20px 0' 
              }}
            >
              {project.modalImgSrcs.map((imgSrc, index) => (
                <img
                  key={index}
                  src={imgSrc}
                  alt={`${project.title} image ${index + 1}`}
                  style={{ 
                    width: '100%', 
                    maxWidth: '800px', 
                    height: 'auto', 
                    borderRadius: '8px',
                    boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.2)'
                  }}
                />
              ))}
              <StyledButton onClick={handleClose}>Fechar</StyledButton>
            </Box>
          </DialogContent>
        </>
      )}
    </Dialog>
  );
};

export default ProjectModal;
