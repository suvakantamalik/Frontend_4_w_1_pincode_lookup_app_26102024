import { ADD_SEARCH_HISTORY } from "./actions";


const initialState = {
    searchHistory: [],
};

const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SEARCH_HISTORY:
            return {
                ...state,
                searchHistory: [action.payload, ...state.searchHistory],
            };
        default:
            return state;
    }
};

export default searchReducer;