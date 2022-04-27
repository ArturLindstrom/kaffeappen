import styled from "styled-components";
import Textbox from "./Textbox";
import Button from "./Button";

const StyledLoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    & > Button {
        margin-top: 1rem;
    }
    `;

    const LoginForm = () => (
        <form>
            <Textbox fullWidth isValid placeholder="användarnamn"/>
            <Textbox fullWidth isValid placeholder="lösenord"/>
            <Button fullWidth>Logga in</Button>
        </form>
    )

    export default LoginForm;