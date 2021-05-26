import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AddButton, GenderSelect, TextArea, TextField, Typography } from "../components"

const FormContainer: FC = () => {

    const [genderVal, setGenderVal] = useState("")
    const [ageVal, setAgeVal] = useState("")
    const [occupation, setOccupation] = useState("")
    const [dateTime, setDateTime] = useState("")
    const [detail, setDetail] = useState("")

    return (
        <Container>
            <FormPaper>
                <Typography.FormHeader>
                    ข้อมูลผู้ป่วย
                </Typography.FormHeader>
                <div
                    style={{
                        display: 'flex',
                    }}
                >
                    <GenderSelect
                        label="เพศ" 
                        value={genderVal} 
                        onChange={setGenderVal} 
                        margin="0 16px" 
                    />
                    <TextField 
                        label="อายุ" 
                        value={ageVal} 
                        onChange={setAgeVal} 
                        margin="0 16px" 
                    />
                </div>
                <TextField 
                    label="อาชีพ"  
                    value={occupation} 
                    onChange={setOccupation} 
                    margin="16px" 
                />
            </FormPaper>
                
            <FormPaper>
                <Typography.FormHeader>
                    ข้อมูลผู้ป่วย
                </Typography.FormHeader>
                <TextField 
                    label="วันเวลา" 
                    type="datetime-local" 
                    value={dateTime} 
                    onChange={setDateTime} 
                    margin="0 16px" 
                />
                <TextArea 
                    label="รายละเอียด" 
                    value={detail} 
                    onChange={setDetail}
                    margin="16px 16px" 
                />
                <AddButton
                    margin="0 0 16px 16px" 
                    onClick={() => {console.log("click")}}
                >   
                    + เพิ่มข้อมูล
                </AddButton>
            </FormPaper>
           
        </Container>
    )
}

const FormPaper = styled.div`
    background-color: ${(props) => props.theme.blueFormContainer};
    margin: 0 0 16px 0;
`;

const Container = styled.div`
    margin-right: 32px;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
`;

export default FormContainer
