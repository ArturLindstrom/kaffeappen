import styled from "styled-components";

interface TextboxProps {
    placeholder?: string,
    isValid?: boolean,
    fullWidth?: boolean
}

const StyledTextbox = styled.input<TextboxProps>`
    font-family: Armata;
    font-size: 17px;
    line-height: 50px;
    border-width: 1px;
    border-style: solid;
    border-color: ${props => props.isValid ? "black" : "rgb(228, 84, 84)"};
    background-color: ${props => props.isValid ? "white" : "rgb(255, 211, 211)"};
    border-radius: 3px;
    width: ${props => props.fullWidth ? "100%" : "auto"};
`
const Textbox = ({placeholder, isValid, fullWidth}: TextboxProps) => (
    <StyledTextbox placeholder={placeholder} isValid={isValid} fullWidth={fullWidth}>
        
    </StyledTextbox>
        
)

export default Textbox;