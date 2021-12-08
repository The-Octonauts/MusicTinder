import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchAllPodcasts} from "../store/podcast";
import TinderCard from "react-tinder-card";
import "./PodpalCards.css"
import Button from "@mui/material/Button";
import {Collapse} from "@mui/material";


export function PodpalCards () {

    const [people, setPeople] = useState([
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


    // const dispatch = useDispatch()
    // const initialEffects = () => {
    //     dispatch(fetchAllPodcasts())
    // }
    // React.useEffect(initialEffects, [dispatch])
    //
    // // Render our misquotes constant - before we have our data, render the skeleton.
    // // After we have our data, render the full object with our data.
    // const people = useSelector((state) => state.people ? state.people : [])

    const [open, setOpen] = useState(false);


    return (
        <>
            <div>
                <div className={"podpalCards-Container"}>
                {people.map(people =>
                    (<TinderCard
                            className={"swipe"}
                            key={people.name}
                            preventSwipe={['up', 'down']}>
                            <div className="card"
                                // style={{backgroundImage: `url(${profile.profilePhotoUrl})`}}
                                 style={{backgroundImage: `url(${people.url})`}}>
                                <h2>{people.name}</h2>
                                <Button variant="text" className="bioButton" onClick={() => setOpen(!open)} aria-controls="collapse-bio" aria-expanded={open}>Bio</Button>
                                <Collapse in={open}>
                                    <div id="collapse-bio">
                                    <TinderCard>{people.bio}</TinderCard>
                                    </div>
                                </Collapse>
                            </div>
                        </TinderCard>
                    ))}

            </div>
            </div>
        </>
    );
}

