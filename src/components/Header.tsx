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
    color: ${props => props.theme.yellow};
`;

export default Header;

