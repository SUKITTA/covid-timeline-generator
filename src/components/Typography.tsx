import styled from 'styled-components'

const Header = styled.h1`
    color: ${props => props.theme.yellow};
`;

const FormHeader = styled.h3`
    margin: 16px;
    color: ${(props) => props.theme.greenText};
`;

const InfoHeader = styled.h1`
    color: ${(props) => props.theme.yellow};
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 16px 0 0 0;
`;

const TextH1 = styled.h3`
    font-weight: 300;
    font-size: 23px;
    margin: 12px 0 0 0;
`;

const TextH2 = styled.h4`
    font-weight: 900;
    font-size: 12px;
    margin: 0 0 12px 0;
`;

export default {
    Header, FormHeader, InfoHeader, TextH1, TextH2
}