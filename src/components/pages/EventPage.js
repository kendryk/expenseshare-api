import React from 'react';
import Event from "../events/Event";


class EventPage extends React.Component {

    componentDidMount() {
        document.title = 'EventPage ';
    }

    render() {
    return (
        <React.Fragment>

               <Event/>

        </React.Fragment>

    );
}
}
export default EventPage;