import React from 'react';
import {Redirect} from "react-router-dom";

function JoinEvent(props) {

    console.log(props);

    const{loading, joinSlug, eventJoin} = props;

    if (loading){
        return <div>chargement en cours...</div>
    }
    console.log(eventJoin);
    console.log(joinSlug);

    if(eventJoin !== null){
        return <Redirect to={'/EventPage/' + joinSlug}/>
    }

    return (
        <React.Fragment>
        <div className="input-group  mb-3">

            <input value= {props.joinSlug} type="text" className="form-control"
                   onChange={event => props.joinChangeSlug(event.target.value)} placeholder='Noter votre évènement'/>

            <div className="input-group-append">

                <button className="btn btn-outline-secondary" onClick={ ()=> {

                    props.fetchEvents();

                }}>JOIN</button>
            </div>
        </div>

        </React.Fragment>
    );
}

export default JoinEvent;