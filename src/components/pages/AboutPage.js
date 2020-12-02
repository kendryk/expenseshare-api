import React from 'react';

class AboutPage extends React.Component {


    componentDidMount() {
        document.title = 'About Page';
    }

    render() {
        return (
            <React.Fragment>

                <div className="jumbotron jumbotron-fluid bg-info text-white">
                    <div className="container">
                        <h1 className="display-4"> About Page</h1>
                        <p className="lead">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, aspernatur culpa distinctio,
                            eius eligendi hic, impedit iste itaque iusto nihil nulla tempora. Adipisci alias amet consequuntur, fugiat necessitatibus temporibus! Eveniet?

                        </p>
                    </div>
                </div>
            </React.Fragment>
        );
    }


    }


export default AboutPage;