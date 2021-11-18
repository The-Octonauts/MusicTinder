import React from "react";
const PodcastSelect = () => {
    const [selected, setSelected] = React.useState("");
    const changeSelectOptionHandler = (event) => {
        setSelected(event.target.value);
    };
    const comedy = [
        "The Joe Rogan Experience",
        "Banter with Sapnap and Karl Jacobs",
        "Morbid: A True Crime Podcast",
        "Call Her Daddy",
        "Armchair Expert Umbrella with Dax Shepard"
    ];
    const news = [
        "The Ben Shapiro Show",
        "The Daily",
        "NPR Up First",
        "Breaking Points with Krystal and Saagar",
        "Morning Wire",
    ];
    const trueCrime = [
        "Bruh Issa Murder",
        "Wine & Crime",
        "Bear Brook",
        "Morbid: A True Crime Podcast",
        "A Murder in My Family",
    ];
    const sport = [
        "Pardon My Take",
        "The Bill Simmons Podcast",
        "The Rumor",
        "The Pat McAfee Show 2.0",
        "The Dan le Batard Show with Stugotz",
    ];
    const health = [
        "Mind Pump",
        "Sika Strength",
        "Ben Greenfield Fitness",
        "The Drive with Peter Attia",
        "The Doctors Farmacy",
    ];

    let type = null;
    let options = null;

    if (selected === "Comedy") {
        type = comedy;
    } else if (selected === "News"){
        type = news;
    } else if (selected === "True Crime") {
        type = trueCrime;
    }else if (selected === "Sports") {
        type = sport;
    } else if (selected === "Health/Fitness") {
        type = health
    }

    if (type) {
        options = type.map((el) => <option key={el}>{el}</option>);
    }

}