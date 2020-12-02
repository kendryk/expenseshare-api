import React from 'react';

class HomePage extends React.Component{

    componentDidMount() {
        document.title = 'Home Page';
    }

    render() {
    return (
        <React.Fragment>

            <div className="jumbotron jumbotron-fluid bg-info text-white">
                <div className="container">
                    <h1 className="display-4"> Expenseshare</h1>
                    <p className="lead">  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        Accusantium ad alias aliquid animi aut blanditiis consequuntur cum cupiditate
                        distinctio ea enim eos, esse est mollitia officia, rerum temporibus unde vitae?</p>
                </div>
            </div>


        </React.Fragment>

    );
}
}
export default HomePage;