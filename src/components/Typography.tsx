import styled from 'styled-components';

const Header = styled.h1`
    color: ${props => props.theme.yellow};
    font-weight: 100;
    margin-top: 0px;
`;

const FormHeader = styled.h3`
    margin: 16px;
    color: ${(props) => props.theme.greenText};
`;

const InfoHeader = styled.h1`
    color: ${(props) => props.theme.yellow};
    text-align: center;
    margin: 48px 0 8px 0;
`;

const TextH3 = styled.h3`
    font-weight: 300;
    font-size: 23px;
    margin: 12px 0 0 0;
`;

const TextH4 = styled.h4`
    font-weight: 900;
    font-size: 12px;
    margin: 0 0 12px 0;
    word-break: break-word;
`;

const Typography = {
    Header, FormHeader, InfoHeader, TextH3, TextH4
}

export default Typography