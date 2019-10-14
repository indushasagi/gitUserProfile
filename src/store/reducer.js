

const initialState = {
    userName: '',
    userData: []
};

function fetchUser(state=initialState, action){
    switch (action.type){
        case "GET_USER":
            return {...state, userName: action.value};
        case "FETCH_USER":
            return {...state, userData: [action.response.data]};
        default:
            return state;
    }
}

export default fetchUser;