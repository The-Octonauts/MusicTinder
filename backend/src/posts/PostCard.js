import React from "react";
import Card from "react-bootstrap/Card";


export function PostCard(props) {

    const {podcast} = props

    return (
        <>
            <Card className="card text-center">
                <div className="card-body">
                    <Card.Title>{podcast().podcastAttribution}</Card.Title>
                    <Card.Text>
                        <div>
                            {podcast().podcastContent}
                        </div>
                        <small className="text-muted">{podcast().podcastSubmitter}</small>
                    </Card.Text>
                </div>
            </Card>
        </>
    )
}