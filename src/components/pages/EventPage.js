import React from 'react';
import Event from "../events/Event";




function EventPage(props) {


    return (
        <React.Fragment>

           <div className=' d-flex flex-column px-5'>

               <h1> {props.events.name} </h1>
               <span>Identifier : {props.events.slug} </span>

               <button className='btn btn-info my-2'> <h3>Ajouter une nouvelle dépense</h3> </button>

               <Event/>


           </div>



        </React.Fragment>

    );
}

export default EventPage;