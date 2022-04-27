import styled from 'styled-components';

interface TitleProps {
    children: string;
}

const Title = styled.h1`
    font-family: "Scope One";
    font-size: 30px;
    text-transform: uppercase;
    text-align: center;
    `;

    const TitleComponent = ({children}: TitleProps) => {
        return (
            <Title>
                {children}
            </Title>
        );
    }

export default TitleComponent;