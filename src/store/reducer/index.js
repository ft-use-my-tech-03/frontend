import {
    SIGN_UP_SUCCESS,
    LOG_IN_SUCCESS,
    LOG_OUT_SUCCESS,
    GET_TECH_START,
    GET_TECH_SUCCESS,
    GET_TECH_FAILURE,
    ADD_TECH_START,
    ADD_TECH_SUCCESS,
    EDIT_TECH_START,
    EDIT_TECH_SUCCESS,
    EDIT_TECH_FAILURE,
    DELETE_TECH_START,
    DELETE_TECH_SUCCESS,
  } from "../actions";
  
  const initialState = {
    tech: [],
    addTech: [],
    deleteTech: [],
    editTech: [],
    isLoggedin: false,
    currentUser: {
      auth_code: null,
      password: '',
      user_id: 0,
      user_type: 1,
      user_name: ''
    },
    loading: false,
    errors: "",
  };
  
  export function rootReducer(state = initialState, action) {
    switch (action.type) {
      case SIGN_UP_SUCCESS:
        return {
          ...state,
          currentUser: action.payload
        };
  
      case LOG_IN_SUCCESS:
        console.log("here", action)
        return {
          ...state,
          isLoggedIn: true, 
          currentUser: action.payload
        }
  
      case LOG_OUT_SUCCESS:
        return {
          ...state,
          isLoggedin: action.payload
        }

    case GET_TECH_START:
      return {
        ...state,
        loading: true,
        errors: "",
      };
    case GET_TECH_SUCCESS:
      return {
        ...state,
        tech: action.payload,
        loading: false,
        isLoggedin: true,
        errors: "",
      };

    case GET_TECH_FAILURE:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      };

      case ADD_TECH_START:
        return {
          ...state,
          loading: true,
        };
      case ADD_TECH_SUCCESS:
        return {
          ...state,
          loading: false,
          addTech: action.payload,
        };
      case DELETE_TECH_START:
        return {
          ...state,
          loading: true,
        };
      case DELETE_TECH_SUCCESS:
        console.log(action.payload);
        return {
          ...state,
          deleteTech: state.deleteTech.filter(
            (classId) => classId.class_id !== action.payload
          ),
        };
      case EDIT_TECH_START:
          return {
              ...state,
              loading: true,
              errors: ""
          }
      case EDIT_TECH_SUCCESS:
          return {
              ...state,
              editTech: action.payload,
              loading: false
          }
      case EDIT_TECH_FAILURE:
          return {
              ...state,
              loading: false,
              errors: action.payload
          }
      default:
        return state;
    }
  }