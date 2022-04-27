import styled from 'styled-components'

interface StyledButtonProps {
  children: string,
  variant?: 'primary' | 'secondary',
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
    background-color: ${props => props.variant === 'secondary' ? 'rgb(151, 176, 157)' : 'rgb(221, 182, 62)'};
    width: ${props => props.fullWidth ? '100%' : 'auto'};
`

const Button = ({children, variant, fullWidth}: StyledButtonProps) => {
  return (
    <StyledButton variant={variant} fullWidth={fullWidth}>
      {children}
    </StyledButton>
  )
}

export default Button