import { types } from '../types/types';


export const loginEmailAndPassword = (email,password) => {
    return (dispatch) => {

        setTimeout(() => {

            dispatch(login('123456','Camilo'))

        }, 3500);
    }
}

export const login = (uid, displayName) => (
    {
        type: types.login,
        payload:{
            uid,
            displayName
        }
    }
);