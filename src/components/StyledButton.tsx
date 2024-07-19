import { styled } from '@mui/material'
import theme from '../theme'
import {ReactNode} from "react"

interface StyledButtonProps{
  children: ReactNode
}

const StyledButton: React.FC<StyledButtonProps> = ({children}) => {

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
      <StyledButton>
        {children}
      </StyledButton>
    </>
  )
}

export default StyledButton
