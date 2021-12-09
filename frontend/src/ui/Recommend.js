import React, {useState} from "react"
import { Col, Card, Container, Image, Nav, Row} from "react-bootstrap";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { styled } from '@mui/material/styles';
import {PodpalCards} from "./PodpalCards";
import "./recommend.css";
import "./PodpalCards"
// import {SwipeButtons} from "./SwipeButtons";
import {Chats} from "./Chats";

// function LinkTab(props) {
//     return (
//         <Tab
//             component="a"
//             onClick={(event) => {
//                 event.preventDefault();
//             }}
//             {...props}
//             sx={{
//                 color: '#FCF0D4'
//             }}
//         />
//     );
// }

const StyledTabs = styled((props) => (
    <Tabs
        {...props}
        TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
    />
))({
    '& .MuiTabs-indicator': {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#FCF0D4',
    },
    '& .MuiTabs-indicatorSpan': {
        maxWidth: 40,
        width: '100%',
        backgroundColor: '#FCF0D4',
    },
});

const StyledTab = styled((props) => <Tab {...props} />)(
    ({ theme }) => ({
        textTransform: 'none',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
        marginRight: theme.spacing(1),
        color: '#0166AB',
        '&.Mui-selected': {
            color: '#FCF0D4',
        },
        '&.Mui-focusVisible': {
            backgroundColor: 'rgba(100, 95, 228, 0.32)',
        },
    }),
);

export const Recommend = () => {
const [value, setValue] = React.useState(0);

const handleChange = (event, newValue) => {
    setValue(newValue);
};
    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Card className={"cardBody"}>
                            <Card.Header className="cardHeader">
                                <Box sx={{ bgcolor: '#30C3E9' }}>
                                    <StyledTabs value={value} onChange={handleChange} aria-label="nav tabs example">
                                        <StyledTab label="Matches" href="#" />
                                        <StyledTab label="Messages" href="#" />
                                    </StyledTabs>
                                </Box>
                            </Card.Header>
                            <Card.Body>
                                <Card.Title>Start Matching</Card.Title>
                                <Container>
                                    <Chats/>
                                </Container>
                            </Card.Body>
                        </Card>



                    </Col>
                    <Col>
                        <div>

                            <PodpalCards/>

                            {/*<SwipeButtons/>*/}
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
};

