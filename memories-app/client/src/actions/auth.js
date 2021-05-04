import { AUTH } from '../constant/actionTypes';
import * as api from '../api/index';

export const signup = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signUp(formData);

        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        console.log("da vao day sign up")
        console.log(error?.message);
    }
}

export const signin = (formData, history) => async (dispatch) => {
    try {
        const { data } = await api.signIn(formData);

        dispatch({ type: AUTH, data });
        history.push('/');
    } catch (error) {
        console.log("da vao day sign in")

        console.log(error?.message);
    }
}