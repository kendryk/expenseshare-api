import React from 'react';
import EventExpenseForm from "./EventEspenseForm";

function Event(props) {



    return (
        <React.Fragment>

            <div className=' d-flex flex-column px-5'>

                <h1> titre </h1>
                <span>Identifier :  </span>

                <button className='btn btn-info my-2'> <h3>Ajouter une nouvelle dépense</h3> </button>

                <EventExpenseForm/>


            </div>


        </React.Fragment>
    );
}

export default Event;