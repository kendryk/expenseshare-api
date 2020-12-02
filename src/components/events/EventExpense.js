import React from 'react';

function EventExpense(props) {

    return (
        <React.Fragment>
            <div className=' border border-dark w-100 p-4 mb-3'>
                <div className='d-flex '>
                    <h3 className=' border border-dark  rounded-lg m-1 px-5 py-3'>Dépense 1</h3>
                    <h4 className='m-1 px-2 py-3' >titre de la dépense 1</h4>
                    <hr/>
                    <h5 className=' m-0 p-2'>price €</h5>
                </div>
                <p className='p-2 m-0'> Ajouté le  createdDate par AuthorAjouter </p>
            </div>

        </React.Fragment>
    );
}

export default EventExpense;