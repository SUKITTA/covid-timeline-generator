import React, { FC } from 'react'
import styled from 'styled-components'

const FormContainer: FC = () => {
    return (
        <Container>
            <div>
                1st FormContainer
            </div>
            <div>
                2nd FormContainer
            </div>
        </Container>
    )
}

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export default FormContainer
