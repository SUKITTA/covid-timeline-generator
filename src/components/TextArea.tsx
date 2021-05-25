import React, { FC } from 'react'
import styled from 'styled-components'

interface TextAreaProps {
    margin?: string;
    label: string;
    value: string;
    type?: "text" | "number" | "datetime-local";
    onChange: (val: string) => void;
}

interface ContainerProps {
    margin?: string;
}

const TextArea: FC<TextAreaProps> = (props) => {
    return (
        <Container 
            margin={props.margin}
        >
            <Label>
                {props.label}
            </Label>
            <Input value={props.value} onChange={(e) => props.onChange(e.target.value)} rows={5}/>
        </Container>
    )
}

const Input = styled.textarea`
    resize: vertical;
    font-size: 16px;
    padding: 8px;
    box-sizing: border-box;
`;

const Container = styled.div<ContainerProps>`
    margin: ${(props) => props.margin};
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const Label = styled.label`
    color: ${(props) => props.theme.white };
`;


export default TextArea;
