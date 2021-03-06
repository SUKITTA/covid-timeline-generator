import React, { FC } from 'react'
import styled from 'styled-components'
import { AddButton, GenderSelect, TextArea, TextField, Typography } from "../components"

interface FormContainerProps {
    gender: string;
    age: string;
    occupation: string;
    dateTime: string;
    detail: string;
    onGenderChange: (val: string) => void
    onAgeChange: (val: string) => void
    onOccupationChange: (val: string) => void
    onDateTimeChange: (val: string) => void
    onDetailChange: (val: string) => void
    onClickAddButton: () => void
}

const FormContainer: FC<FormContainerProps> = (props) => {

    return (
        <Container>
            <FormPaper>
                <Typography.FormHeader>
                    ข้อมูลผู้ป่วย
                </Typography.FormHeader>
                <FormRow>
                    <GenderSelect
                        label="เพศ"
                        value={props.gender}
                        onChange={props.onGenderChange}
                        margin="0 16px"
                    />
                    <TextField
                        label="อายุ"
                        type="number"
                        value={props.age}
                        onChange={props.onAgeChange}
                        margin="0 16px"
                    />
                </FormRow>
                <TextField
                    label="อาชีพ"
                    value={props.occupation}
                    onChange={props.onOccupationChange}
                    margin="16px"
                />
            </FormPaper>

            <FormPaper>
                <Typography.FormHeader>
                    ข้อมูลไทม์ไลน์
                </Typography.FormHeader>
                <TextField
                    label="วันเวลา"
                    type="datetime-local"
                    value={props.dateTime}
                    onChange={props.onDateTimeChange}
                    margin="0 16px"
                />
                <TextArea
                    label="รายละเอียด"
                    value={props.detail}
                    onChange={props.onDetailChange}
                    margin="16px 16px"
                />
                <AddButton
                    margin="0 16px 16px 16px"
                    onClick={props.onClickAddButton}
                >
                    + เพิ่มข้อมูล
                </AddButton>
            </FormPaper>

        </Container>
    )
}

const FormRow = styled.div`
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px){
        flex-direction: row;
    }
`;

const FormPaper = styled.div`
    background-color: ${(props) => props.theme.blueFormContainer};
    margin: 0 0 16px 0;
    display: flex;
    flex-direction: column;

    @media only screen and (min-width: 768px){
        display: unset;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 1;

    @media only screen and (min-width: 768px){
        margin-right: 32px;
    }
`;

export default FormContainer
