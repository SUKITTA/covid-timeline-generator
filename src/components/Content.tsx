import React, { FC, ReactElement } from 'react';
import styled from 'styled-components';

interface ContentProps {
    children: ReactElement[]
}

const Content: FC<ContentProps> = (props) => {
    return (
        <Container>
            {props.children}
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;

    @media only screen and (min-width: 768px){
        flex-direction: row;
    }
`;

export default Content
