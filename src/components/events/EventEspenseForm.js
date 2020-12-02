import React from 'react';

function EventExpenseForm(props) {

    return (
        <React.Fragment>
            <div className=' border border-dark w-100 p-4 mb-3'>
                <div className='d-flex '>

                    <form>
                        <input
                            className=' border border-dark  rounded-lg m-1 px-5 py-3'
                            type="text"
                            name="expenseEvent"
                            id="expenseEvent"
                            placeholder='Dépense'/>
                        <input
                            className='border border-dark  rounded-lg m-1 px-5 py-3'
                            type="text"
                            name="expenseTitle"
                            id="expenseTitle"
                            placeholder='titre de la dépense'/>

                        <input
                            className=' border border-dark  rounded-lg m-1 px-5 py-3'
                            type="int"
                            name="expensePrice"
                            id="expensePrice"
                            placeholder='price €'/>

                        <input
                            className=' border border-dark  rounded-lg m-1 px-5 py-3'
                            type="text"
                            name="expenseAuthor"
                            id="expenseAuthor"
                            placeholder='Author'/>

                        <div className='d-flex justify-content-end my-3'>
                            <button
                                className='btn btn-success px-3 py-2'>

                                <span className='font-weight-bolder'>Valider</span>
                            </button>
                        </div>


                    </form>
                </div>


            </div>

        </React.Fragment>
    );
}

export default EventExpenseForm;