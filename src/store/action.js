import axios from 'axios';

export function getUser(value){
    const action = {type:"GET_USER",value}
    return action;
}

export function fetchUser(value){
    return function(dispatch){
        axios.get(`https://api.github.com/users/${value}`)
        .then(response => {
            if(response.status >= 200){
                dispatch({type:"FETCH_USER",response})
            }
        });
    }
}


