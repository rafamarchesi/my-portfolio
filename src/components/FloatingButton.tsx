import { Fab } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { styled } from '@mui/system';

const FloatingButton = styled(Fab)(({ theme }) => ({
  position: 'fixed',
  bottom: theme.spacing(2),
  right: theme.spacing(2),
  zIndex: '1300',
  backgroundColor: '#25D366',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#128C7E',
  },
}));

const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    const phoneNumber = '5518997872265';
    const message = 'Olá, vi seu portfolio e gostaria de saber informação sobre o seu trabalho!';
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <FloatingButton onClick={handleClick}>
      <WhatsAppIcon />
    </FloatingButton>
  );
};

export default FloatingWhatsAppButton;
