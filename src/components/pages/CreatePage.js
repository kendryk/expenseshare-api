import React from 'react';

class CreatePage extends React.Component {


    componentDidMount() {
        document.title = 'Create Page';
    }

    render() {
    return (
        <React.Fragment>

            <div className="jumbotron jumbotron-fluid bg-info text-white">
                <div className="container">
                    <h1 className="display-4">
                        Créer un événement</h1>
                    <p className="lead">
                        Créer un événement et envoyer l'indicateur généré à d'autres</p>
                </div>
            </div>

            <div className="input-group  mb-3">
                <input type="text" className="form-control"/>
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" id="btnCreate">CREATE</button>
                </div>
            </div>



        </React.Fragment>

    );
}
}
export default CreatePage;