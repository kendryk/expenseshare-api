import { connect } from 'react-redux';
import JoinEvent from "./JoinEvent";
import {joinChangeSlug,fetchEvents} from "../../actions/action";


// Envoyer des données dans les props
const mapStateToProps = (state, ownProps) => ({
    joinSlug: state.front.joinSlug,
    event:state.front.event,
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    joinChangeSlug: joinSlug => dispatch(joinChangeSlug(joinSlug)),

    //TODO revoir la function fetchEvents!!!
    fetchEvents: event => dispatch(fetchEvents(event)),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinEvent)