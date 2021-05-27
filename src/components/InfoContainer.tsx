import { format } from 'date-fns'
import React, { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { Timeline, Typography } from '../components'
import { TimelineItemProps } from './Timeline'

export interface Timeline {
    dateTime: string
    detail: string;
}

interface InfoContainerProps {
    gender: string;
    age: string;
    occupation: string;
    dateTime: string;
    detail: string;
    timeline: Timeline[];
    onClickCloseButton: (date: string) => void;
}

interface TimelineItem extends Omit<TimelineItemProps, 'onClickCloseButton'> { }

const InfoContainer: FC<InfoContainerProps> = (props) => {

    const [timeline, setTimeline] = useState<TimelineItem[]>([])

    useEffect(() => {
        const newTimeline: TimelineItem[] = []
        props.timeline.forEach(({ dateTime, detail }) => {
            const date = format(new Date(dateTime), "dd/MM/yyyy")
            const time = format(new Date(dateTime), "HH:mm")
            const timelineIndex = newTimeline.findIndex((t) => t.date === date)
            if (timelineIndex !== -1) {
                newTimeline[timelineIndex].descriptions.push({ time: time, detail: detail })
            } else {
                newTimeline.push({ date: date, descriptions: [{ time: time, detail: detail }] })
            }
        })
        setTimeline(newTimeline)
    }, [props.timeline]);



    return (
        <Container>
            <Typography.InfoHeader>
                Timeline
            </Typography.InfoHeader>
            <PatientInfo>
                <PatientInfoContent>
                    <Typography.TextH3>
                        ผู้ป่วย{props.gender} อายุ {props.age} ปี
                    </Typography.TextH3>
                    <Typography.TextH4>
                        อาชีพ {props.occupation}
                    </Typography.TextH4>
                </PatientInfoContent>
            </PatientInfo>
            <Timeline.Container>
                {timeline.map(({ date, descriptions }) => {
                    return (
                        <Timeline.Item
                            key={date}
                            date={date}
                            descriptions={descriptions}
                            onClickCloseButton={() => props.onClickCloseButton(date)}
                        />
                    )
                })}
            </Timeline.Container>
        </Container>
    )
}

const Container = styled.div`
    flex-grow: 7;
    border-style: solid;
    border-width: 1px;
    border-color: ${(props) => props.theme.yellow};
    border-radius: 1px;
`;

const PatientInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const PatientInfoContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${(props) => props.theme.yellow};
    border-radius: 50px;
    margin: 0;
    width: 300px;
`;


export default InfoContainer;
