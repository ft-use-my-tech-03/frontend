import axios from "axios";
import axiosWithAuth from '../../utils/axiosWithAuth';

export const ADD_TECH_START = "ADD_TECH_START";
export const ADD_TECH_SUCCESS = "ADD_TECH_SUCCESS";
export const ADD_TECH_FAILURE = "ADD_TECH_FAILURE";

export const DELETE_TECH_START = "DELETE_TECH_START";
export const DELETE_TECH_SUCCESS = "DELETE_TECH_SUCCESS";
export const DELETE_TECH_FAILURE = "DELETE_TECH_FAILURE";

export const GET_TECH_START = "GET_CLASSES_START";
export const GET_TECH_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_TECH_FAILURE = "GET_CLASSES_FAILURE";

export const EDIT_TECH_START = "EDIT_TECH_START";
export const EDIT_TECH_SUCCESS = "EDIT_TECH_SUCCESS";
export const EDIT_TECH_FAILURE = "EDIT_TECH_FAILURE";

export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS"
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";


// authentication actions
export const addUser = (newUser) => (dispatch) => {
  axios
    .post('', newUser)
    .then(res => {
      dispatch({type:SIGN_UP_SUCCESS, payload: res.data[0]})
    })
    .catch(err => {
      console.log({err})
    })
}

export const logIn = (newUser) => (dispatch) => {
  axios
    .post('', newUser)
    .then(res => {
      dispatch({type: LOG_IN_SUCCESS, payload: res.data.data})
      window.localStorage.setItem('token', res.data.token)
    })
    .catch(err => {
      console.log({err})
    })
}

export const logOut = () => {
  return {type: LOG_OUT_SUCCESS, payload: false}
}

// tech actions
export const addTech = (newTech) => (dispatch) => {
  dispatch({ type: ADD_TECH_START });
  axiosWithAuth()
    .post(`tech`, newTech)
    .then((res) => {
      dispatch({
        type: ADD_TECH_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getTechInfo = (id) => (dispatch) => {
  dispatch({ type: GET_TECH_START });
  return axiosWithAuth()
    .get(`tech/${id}`)
    .then((res) => {
      dispatch({ type: GET_TECH_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const editTech = (id, editTech) => (dispatch) => {
  dispatch({ type: EDIT_TECH_START });
  return axiosWithAuth()
    .put(`tech/${id}`, editTech)
    .then((res) => {
        dispatch({type: EDIT_TECH_SUCCESS, payload: res.data})
    })
    .catch((err) => dispatch({
        type: EDIT_TECH_FAILURE,
        payload: err.message
    }));
};

export const deleteTech = (id) => (dispatch) => {
  dispatch({ type: DELETE_TECH_START });
  return axiosWithAuth()
    .delete(`tech/${id}`)
    .then((res) => {
      console.log(res);
      dispatch({ type: DELETE_TECH_SUCCESS, payload: res });
    })
    .catch((err) => {
      console.log({err});
    });
};
