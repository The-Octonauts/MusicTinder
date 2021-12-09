import React, {useEffect, useState} from "react"
import {Col, Card, Container, Image, Nav, Row} from "react-bootstrap";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material/styles';
import {PodpalCards} from "./PodpalCards";
import "./recommend.css";
import "./PodpalCards"
// import {SwipeButtons} from "./SwipeButtons";
import {Chats} from "./Chats";
import {httpConfig} from "../utils/httpConfig";
import {useDispatch, useSelector} from "react-redux";
import { fetchProfileByProfileId} from "../store/profile";
import {fetchMatchedProfilesByProfileId, setMatches} from "../store/matches";

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
        TabIndicatorProps={{children: <span className="MuiTabs-indicatorSpan"/>}}
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
    ({theme}) => ({
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
    const dispatch = useDispatch()
    const profile = useSelector(state => state.profile ? state.profile : null)
    const sideEffects = () => {
        dispatch(fetchProfileByProfileId())

    }
    //TODO: this returns an array now, may be able to switchthis out for your dummy data matches below.
    const matches1 = useSelector(state => state.matches ? state.matches : null)
    //TODO: no idea why this array will not map
    console.log('matches', matches1)
  /*  if(matches){
    matches.map(item => {
        console.log('item', item)
    }})*/

    const [matches, setPeople] = useState([
        {
            name: "Jessie",
            url: "https://specials-images.forbesimg.com/imageserve/5f3f2b8d8a1a17a277d7abc5/960x0.jpg?fit=scale",
            bio: "This is fun"
        },
        {
            name: "Gal",
            url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/Gal_Gadot_by_Gage_Skidmore_2.jpg/1200px-Gal_Gadot_by_Gage_Skidmore_2.jpg",
            bio: "I need friends that love podcasts."

        },
        {
            name: "Georga",
            url: "https://live-production.wcms.abc-cdn.net.au/3710db622751cea6b0303ef6fe345509?impolicy=wcms_crop_resize&cropH=2913&cropW=3884&xPos=387&yPos=0&width=862&height=647",
            bio: "Are there any gym rats like myself?"
        },
        {
            name: "Tony",
            url: "https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Shave-and-Beard-2020.jpg?v=1608649489",
            bio: "NPR is the best news podcast change my mind."
        },
        {
            name: "Ricardo",
            url: "https://images.hugoboss.com/is/image/hugobossdm/HBME_110_W21FW_BOSS_CTG_BMB_009_sRGB?%24large%24&cropN=0.3242188,0.021102,0.4960938,0.8722157&align=0,-1&fit=crop,1&ts=1629736813112&wid=520&hei=608",
            bio: "I love true crime podcasts about ted bundy."
        },
        {
            name: "David",
            url: "https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bWFufGVufDB8fDB8fA%3D%3D&w=1000&q=80",
            bio: "Does anyone like the joe rogan podcast as much as me?"
        },
        {
            name: "Frank",
            url: "https://st.depositphotos.com/1371851/1256/i/600/depositphotos_12560188-stock-photo-young-man.jpg",
            bio: "Hello I like to go out shooting and fishing. Taking long walks in the park is my guilty pleasure."
        },
    ])

    useEffect(sideEffects, [])
    console.log('theprofile', profile)

    useEffect(() => {
        if(profile){
                httpConfig.get(`/apis/saved/getProfileMatches/${profile.profileId}`)
                    .then(reply => {
                        dispatch(fetchMatchedProfilesByProfileId(reply))

                        let {message, type} = reply;

                        if (reply.status === 200) {
                            // resetForm();
                        }

                        return (reply)
                    }).catch(error => {console.log('inside the error', 'error')})
        }



    }, [profile]);
    //this is a watcher for the profile in the state.  When the profile updates this useEffect will run


    return (
        <>
            <Container>
                <Row className="mt-5">
                    <Col>
                        <Card className={"cardBody"}>
                            <Card.Header className="cardHeader">
                                <Box sx={{bgcolor: '#30C3E9'}}>
                                    <StyledTabs value={value} onChange={handleChange} aria-label="nav tabs example">
                                        <StyledTab label="Matches" href="#"/>
                                        <StyledTab label="Messages" href="#"/>
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

                            <PodpalCards matches={matches}/>

                            {/*<SwipeButtons/>*/}
                        </div>
                    </Col>

                </Row>
            </Container>
        </>
    )
};

