import { styled } from '@mui/material'
import theme from '../theme'
import {ReactNode} from "react"

interface StyledButtonProps{
  children: ReactNode
  onClick: () => void
}

const StyledButton: React.FC<StyledButtonProps> = ({children, onClick}) => {

  const StyledButton = styled("button")(()=>({    
    backgroundColor: theme.palette.primary.main,
    color: "#fff",    
    border: `1px solid ${theme.palette.primary.main}`,        
    fontSize: "18px",
    textTransform: "uppercase",
    padding: "10px 30px",
    display: "flex",
    transition: ".3s",
    cursor: "pointer",
    gap: "10px",
    '&:hover': {
      backgroundColor: "transparent",
      color: theme.palette.primary.main
    }
    
  }))


  return (
    <>
      <StyledButton onClick={onClick}>
        {children}
        
      </StyledButton>
    </>
  )
}

export default StyledButton
