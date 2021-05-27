import React, { FC } from 'react';
import styled from 'styled-components';

const Container: FC = (props) => {
    return (
        <TimelineContainer>
            {props.children}
            <VerticalLine />
        </TimelineContainer>
    )
}

const TimelineContainer = styled.div`
    align-content: center;
    position: relative;
    margin-top: 16px;
`;

const VerticalLine = styled.div`
    border-left: 1px solid ${(props) => props.theme.white};
    position: absolute;
    z-index: -1;
    top: 16px;
    bottom: 16px;
    left: 128px;

`;

export interface Description {
    time: string;
    detail: string;
}

export interface TimelineItemProps {
    date: string
    descriptions: Description[]
    onClickCloseButton: () => void
}

const Item: FC<TimelineItemProps> = (props) => {
    return (
        <TimelineItem>
            <Date>
                {props.date}
            </Date>
            <Dot>
                <circle cx="12" cy="12" r="5" />
            </Dot>
            <Descriptions>
                <div>
                    {props.descriptions.map((description, index) => {
                        return (
                            <Text key={`${props.date} ${description.time}`}>
                                <Time>{description.time}</Time>
                                {description.detail}
                            </Text>
                        )
                    })}
                </div>
                <CloseButton
                    onClick={props.onClickCloseButton}
                >
                    x
                </CloseButton>
            </Descriptions>
        </TimelineItem>
    )
}

const TimelineItem = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: row;
    color: ${(props) => props.theme.yellow};
`;

const Date = styled.div`
    width: 92px;
    padding-top: 8px;
`;

const Dot = styled.svg`
    height: 24px;
    width: 24px;
    fill: ${(props) => props.theme.yellow};
    margin: 0 8px 0 8px;
    padding-top: 8px;
`;

const Descriptions = styled.div`
    width: min-content;
    word-break: break-word;
    padding: 8px;
    background-color: ${(props) => props.theme.blueInfoContainer};
    border-radius: 8px;
    flex-grow: 1;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`;

const Text = styled.div`
    color: ${(props) => props.theme.white};
    margin-bottom: 8px;
`;

const Time = styled.span`
    color: ${(props) => props.theme.yellow};
    margin-right: 16px;
`;

const CloseButton = styled.button`
    margin-left: 16px;
    border: none;
    background-color: ${(props) => props.theme.blueInfoContainer};
    color: ${(props) => props.theme.white};
    display: flex;
`;

const Timeline = { Container, Item }

export default Timeline;
