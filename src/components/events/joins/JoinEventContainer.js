import { connect } from 'react-redux';
import JoinEvent from "./JoinEvent";
import {joinChangeSlug,fetchEvents} from "../../../actions/action";


// Envoyer des données dans les props
const mapStateToProps = (state, ownProps) => ({
    joinSlug: state.front.joinSlug,

    //Todo si un joinSlug !== slug alors false

    eventJoin:state.front.eventJoin,
})

// Envoyer des fonctions dans les props
const mapDispatchToProps = dispatch => ({
    joinChangeSlug: joinSlug => dispatch(joinChangeSlug(joinSlug)),
    fetchEvents: () => dispatch(fetchEvents()),
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(JoinEvent)