import { FC } from 'react'
import styled from 'styled-components'


interface HeaderProps {
    text: string;
}

const Header: FC<HeaderProps> = (props) => {

    return (
        <Text>{props.text}</Text>
    )
}

const Text = styled.h1`
    margin-left: 20px;
    color: ${props => props.theme.yellow};
`;

export default Header;

