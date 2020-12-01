import {
    CHANGE_JOIN_SLUG,

    FETCH_EVENTS_PENDING,
    FETCH_EVENTS_SUCCESS,
    FETCH_EVENTS_FAILURE,

} from "../actions/action";

const initialState = {

    //TODO Revoir initialState

    loading:{
        events: false,
    },
    error:{
        events: null,
    },
    event: null,
    joinSlug : "",

};

function front(state = initialState, action) {
    switch (action.type) {

//------EVENTS------------------------------
        case FETCH_EVENTS_PENDING:
            return {...state, loading: {...state.loading, events: true}}
        case FETCH_EVENTS_SUCCESS:
            return {...state, events: action.payload, loading: {...state.loading, events: false}}

        case FETCH_EVENTS_FAILURE:
            return {...state, error: action.payload, loading: {...state.loading, events: false}}



//------CHANGE JOIN------------------------------
        case CHANGE_JOIN_SLUG:
            return {...state, joinSlug: action.payload};

//-----DEFAULT------------------------------
        default:
            return state;
    }
}

export default front;