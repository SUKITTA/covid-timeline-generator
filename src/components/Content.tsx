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
    flex-direction: row;
    width: 100%;
`;

export default Content
