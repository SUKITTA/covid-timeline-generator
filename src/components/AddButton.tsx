import React, { FC } from 'react'
import styled from 'styled-components'

interface AddButtonProps {
    margin?: string;
    onClick: () => void;
}

interface ButtonProps {
    margin?: string;
}

const AddButton: FC<AddButtonProps> = (props) => {
    return (
        <Button
            margin={props.margin}
            onClick={props.onClick}
        >
            {props.children}
        </Button>
    )
}

const Button = styled.button<ButtonProps>`
    margin: ${(props) => props.margin};
    background-color: ${(props) => props.theme.yellow};
    font-family: 'Prompt', sans-serif;
    height: 40px;
    box-sizing:border-box;
    padding: 8px;
    font-size: 16px;
`;

export default AddButton;
