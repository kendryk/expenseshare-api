import React from 'react';
import {Redirect} from "react-router-dom";

function JoinEvent(props) {
//TODO Redirection vers la page EventPage/anniversaire-de-john


    const{loading, joinSlug, event} = props;

    if (loading){
        return <div>chargement en cours...</div>
    }
    console.log(event);
    //TODO ??? EVENT non modifié
    if(event !== null){
        return <Redirect to={'/EventPage/' + joinSlug}/>
    }

    return (
        <React.Fragment>
        <div className="input-group  mb-3">

            <input value= {props.joinSlug} type="text" className="form-control"
                   onChange={joinSlug => props.joinChangeSlug(joinSlug.target.value)} placeholder='Noter votre évènement'/>

            <div className="input-group-append">

                <button className="btn btn-outline-secondary" onClick={ ()=> {
                    //TODO ??? EVENT non modifié par la function ???
                    props.fetchEvents(event);

                }}>JOIN</button>
            </div>
        </div>

        </React.Fragment>
    );
}

export default JoinEvent;