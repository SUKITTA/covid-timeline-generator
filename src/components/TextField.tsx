import { FC, InputHTMLAttributes } from 'react';
import styled from 'styled-components'

interface TextFieldProps {
    margin?: string;
    label: string;
    value: string;
    type?: "text" | "number" | "datetime-local";
    onChange: (val: string) => void;
}

interface ContainerProps {
    margin?: string;
}

const TextField: FC<TextFieldProps> = (props) => {
    return (
        <Container
            margin={props.margin}
        >
            <Label>
                {props.label}
            </Label>
            <Input 
                value={props.value}    
                type={props.type}
                onChange={(e) => props.onChange(e.target.value)}
            />
        </Container>
        
    );
}

const Container = styled.div<ContainerProps>`
    margin: ${(props) => props.margin};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`

const Label = styled.label`
    color: ${(props) => props.theme.white };
`

const Input = styled.input`
    font-family: 'Prompt', sans-serif;
    height: 40px;
    margin-top: 8px;
    box-sizing:border-box;
    padding: 8px;
    font-size: 16px;
    border-radius: 4px;
    border: none;
    outline: none;
`

export default TextField;
