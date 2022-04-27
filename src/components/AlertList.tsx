import styled from 'styled-components';

interface AlertListProps {
    children: React.ReactNode;
    variant: 'success' | 'failure'
}

const StyledAlertList = styled.div<AlertListProps>`
    background-color: ${props => props.variant === 'success' ? 'rgb(151, 176, 157)' : 'rgb(228, 84, 84)'};
    color: white;
    padding-top: 10px;
    padding-bottom: 10px;
    font-family: "Scope one";
    display: block;
    list-style-type: disc;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    padding-inline-start: 40px;
    `;

const AlertList = ({children, variant}: AlertListProps) => (
    <StyledAlertList variant={variant}>{children}</StyledAlertList>
)

export default AlertList;