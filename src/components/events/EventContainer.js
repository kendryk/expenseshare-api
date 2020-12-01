import { connect } from 'react-redux';
import Event from "./Event";
import {joinChangeSlug} from "../../actions/action";


// Envoyer des données dans les props
const mapStateToProps = (state, ownProps) => ({

})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({

})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Event)