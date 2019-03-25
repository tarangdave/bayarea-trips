import { ActionTypes } from '../../constants';

const defaultState = {
    map_data: [],
    trips: [],
    single_trip: false,
    dates: [],
    date_trip: false,
    time_trip: false,
    time: [],
};


function appReducer(state = defaultState, action) {
    switch(action.type) {
        case ActionTypes.LOAD_DATA: 
            return {
                ...state,
                map_data: action.data
            }
        default:
            return state;
    }
}


export default appReducer;