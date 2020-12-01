import React from 'react';
import JoinEventContainer from "../events/JoinEventContainer";


function JoinPage(props) {


    return (
        <React.Fragment>

            <div className=" jumbotron jumbotron-fluid bg-info text-white">
                <div className="container  ">
                    <h1 className="display-4"> Rejoignez un événement</h1>
                    <p className="lead">  Saisissez votre identifiant d'événement pour rejoindre et gérer les dépenses</p>
                </div>
            </div>

            <JoinEventContainer/>


        </React.Fragment>

    );
}

export default JoinPage;