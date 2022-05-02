import styled from 'styled-components'
import colors from '../theme/colors'

interface StyledButtonProps {
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
}

const StyledButton = styled.button<StyledButtonProps>`
    border-radius: 50px;
    font-family: Armata;
    font-size: 19px;
    border: 0px none;
    line-height: 50px;
    padding: 0px 20px;
    text-transform: uppercase;
    background-color: ${props => props.variant === 'secondary' ? colors.green : colors.yellow};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
`

interface ButtonProps {
  children: string,
  variant?: 'primary' | 'secondary',
  fullWidth?: boolean
}

const Button = ({children, variant, fullWidth}: ButtonProps) => {
  return (
    <StyledButton variant={variant} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  )
}

export default Button