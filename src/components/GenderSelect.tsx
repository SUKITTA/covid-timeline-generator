import React, { FC } from 'react';
import styled from 'styled-components';

interface GenderSelectProps {
    margin?: string;
    label: string;
    value: string;
    type?: "text" | "number" | "datetime-local";
    onChange: (val: string) => void;
}

interface ContainerProps {
    margin?: string;
}

const GenderSelect: FC<GenderSelectProps> = (props) => {
    return (
        <Container margin={props.margin}>
            <Label>
                {props.label}
            </Label>
            <Select value={props.value} onChange={(e) => props.onChange(e.target.value)}>
                <option value=""></option>
                <option value="ชาย">ชาย</option>
                <option value="หญิง">หญิง</option>
            </Select>

        </Container>
    )
}

const Select = styled.select`
    font-family: 'Prompt', sans-serif;
    height: 40px;
    margin-top: 8px;
    box-sizing:border-box;
    padding: 8px;
    font-size: 16px;
    border: none;
    outline: none;
`;

const Container = styled.div<ContainerProps>`
    margin: ${(props) => props.margin};
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    width: 100%;
`;

const Label = styled.label`
    color: ${(props) => props.theme.white};
`;

export default GenderSelect;
