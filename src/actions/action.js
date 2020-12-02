export function fetchEvents() {
    // Redux Thunk permet d'accéder aux fonctions dispatch() et getState()
    return (dispatch, getState) => {
        const state = getState();
        dispatch(fetchEventsPending());
        fetch(process.env.REACT_APP_API_URL + '/events/'+ state.front.joinSlug)
            .then(response => response.json())
            .then(data => dispatch(fetchEventsSuccess(data)))
            .catch(err => dispatch(fetchEventsFailure(err)))
    }
}
export const FETCH_EVENTS_PENDING = 'FETCH_EVENTS_PENDING';
function fetchEventsPending() {
    return { type: FETCH_EVENTS_PENDING };
}

export const FETCH_EVENTS_SUCCESS = 'FETCH_EVENTS_SUCCESS';
function fetchEventsSuccess(events) {
    return { type: FETCH_EVENTS_SUCCESS, payload: events };
}

export const FETCH_EVENTS_FAILURE = 'FETCH_EVENTS_FAILURE';
function fetchEventsFailure(error) {
    return { type: FETCH_EVENTS_FAILURE, payload: error };
}

//-----------Change-join-slug------------------------------------
//TODO faut-il modifié le CHANGE-JOIN POUR =>id?

export const CHANGE_JOIN_SLUG = 'CHANGE_JOIN_SLUG';
export function joinChangeSlug(value){
    return { type: CHANGE_JOIN_SLUG, payload: value}
}
