import React, {useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {fetchAllPodcasts} from "../store/podcast";
import TinderCard from "react-tinder-card";
import "./PodpalCards.css"


export function PodpalCards () {

    const [people, setPeople] = useState([
        {
            name: "Joe Mama",
            url: "https://adultpaintbynumber.com/wp-content/uploads/2020/11/Elastigirl-Character-paint-by-numbers.jpg"
        },
        {
            name: "Ligma Balls",
            url: "https://memegenerator.net/img/instances/66919408/haha-got-em.jpg"

        }
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
                            </div>
                        </TinderCard>
                    ))}
            </div>
            </div>
        </>
    );
}

