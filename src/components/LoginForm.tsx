import styled from "styled-components";
import Textbox from "./Textbox";
import Button from "./Button";

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & * {
        margin-top: 1rem;
    }
    `;

    const LoginForm = () => (
        <StyledLoginForm>
            <Textbox fullWidth isValid placeholder="användarnamn"/>
            <Textbox fullWidth isValid placeholder="lösenord"/>
            <Button fullWidth>Logga in</Button>
        </StyledLoginForm>
    )

    export default LoginForm;