import axios from "axios";

// Action Types
const GET_USER_REQUEST = "GET_USER_REQUEST";
const GET_USER_SUCCESS = "GET_USER_SUCCESS";
const GET_USER_FAILURE = "GET_USER_FAILURE";
export const getUser = () => async (dispatch) => {
  try {
    dispatch({
      type: GET_USER_REQUEST,
    });
    const { data } = await axios.get("/api/v1/user");
    dispatch({
      type: GET_USER_SUCCESS,
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: GET_USER_FAILURE,
      payload: error.response ? error.response.data.message : "Network error",
    });
  }
};


export {
  GET_USER_REQUEST,
  GET_USER_SUCCESS,
  GET_USER_FAILURE,
};



const LOGIN_REQUEST = "LOGIN_REQUEST";
const LOGIN_SUCCESS = "LOGIN_SUCCESS";
const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "LOGIN_REQUEST",
    });

    const { data } = await axios.post("/api/v1/login",
      {
        email,
        password,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGIN_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
};





const LOGOUT_REQUEST = "LOGOUT_REQUEST";
const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
const LOGOUT_FAILURE = "LOGOUT_FAILURE";
export const logout = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOGOUT_REQUEST",
    });

    const { data } = await axios.get("/api/v1/logout");

    dispatch({
      type: "LOGOUT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "LOGOUT_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export {
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
  LOGOUT_FAILURE,
};


const LOAD_REQUEST = "LOAD_REQUEST";
const LOAD_SUCCESS = "LOAD_SUCCESS";
const LOAD_FAILURE = "LOAD_FAILURE";
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({
      type: "LOAD_REQUEST",
    });
    const { data } = await axios.get("/api/v1/me");

    dispatch({
      type: "LOAD_SUCCESS",
      payload: data.user,
    });
  } catch (error) {
    dispatch({
      type: "LOAD_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export {
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LOAD_FAILURE,
};


const UPDATE_REQUEST = "UPDATE_REQUEST";
const UPDATE_SUCCESS = "UPDATE_SUCCESS";
const UPDATE_FAILURE = "UPDATE_FAILURE";
export const  updateUser = (name,email,password,skills,about) => async (dispatch) => {
  try {
    dispatch({
      type: "UPDATE_REQUEST",
    });
   
    const { data } = await axios.put(`/api/v1/admin/update`,
      { 
        name,
        email, 
        password,
        skills, 
        about
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "UPDATE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "UPDATE_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  UPDATE_REQUEST,
  UPDATE_SUCCESS,
  UPDATE_FAILURE,
};




const ADD_TIMELINE_REQUEST = "ADD_TIMELINE_REQUEST";
const ADD_TIMELINE_SUCCESS = "ADD_TIMELINE_SUCCESS";
const ADD_TIMELINE_FAILURE = "ADD_TIMELINE_FAILURE";
export const  addTimeline = (title,description,date) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_TIMELINE_REQUEST",
    });
   
    const { data } = await axios.post(`/api/v1/admin/timeline/add`,
      { 
        title,
        description,
        date
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  ADD_TIMELINE_REQUEST,
  ADD_TIMELINE_SUCCESS,
  ADD_TIMELINE_FAILURE,
};


const DELETE_TIMELINE_REQUEST = "DELETE_TIMELINE_REQUEST";
const DELETE_TIMELINE_SUCCESS = "DELETE_TIMELINE_SUCCESS";
const DELETE_TIMELINE_FAILURE = "DELETE_TIMELINE_FAILURE";
export const  deleteTimeline = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_TIMELINE_REQUEST",
    });
   
    const { data } = await axios.delete(`/api/v1/admin/timeline/${id}`);

    dispatch({
      type: "DELETE_TIMELINE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_TIMELINE_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  DELETE_TIMELINE_REQUEST,
  DELETE_TIMELINE_SUCCESS,
  DELETE_TIMELINE_FAILURE,
};


// addYoutube
const ADD_YOUTUBE_REQUEST = "ADD_YOUTUBE_REQUEST";
const ADD_YOUTUBE_SUCCESS = "ADD_YOUTUBE_SUCCESS";
const ADD_YOUTUBE_FAILURE = "ADD_YOUTUBE_FAILURE";
export const  addYoutube = (title,url,image) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_YOUTUBE_REQUEST",
    });
   
    const { data } = await axios.post(`/api/v1/admin/youtube/add`,
      { 
        title,
        url,
        image
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  ADD_YOUTUBE_REQUEST,
  ADD_YOUTUBE_SUCCESS,
  ADD_YOUTUBE_FAILURE,
};


const DELETE_YOUTUBE_REQUEST = "DELETE_YOUTUBE_REQUEST";
const DELETE_YOUTUBE_SUCCESS = "DELETE_YOUTUBE_SUCCESS";
const DELETE_YOUTUBE_FAILURE = "DELETE_YOUTUBE_FAILURE";
export const  deleteYoutube = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_YOUTUBE_REQUEST",
    });
   
    const { data } = await axios.delete(`/api/v1/admin/youtube/${id}`);

    dispatch({
      type: "DELETE_YOUTUBE_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_YOUTUBE_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  DELETE_YOUTUBE_REQUEST,
  DELETE_YOUTUBE_SUCCESS,
  DELETE_YOUTUBE_FAILURE,
};


// add_project

const ADD_PROJECT_REQUEST = "ADD_PROJECT_REQUEST";
const ADD_PROJECT_SUCCESS = "ADD_PROJECT_SUCCESS";
const ADD_PROJECT_FAILURE = "ADD_PROJECT_FAILURE";
export const  addProject = (title,url,image,description,techStack) => async (dispatch) => {
  try {
    dispatch({
      type: "ADD_PROJECT_REQUEST",
    });
   
    const { data } = await axios.post(`/api/v1/admin/project/add`,
      { 
        title,
        url,
        image,
        description,
        techStack,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "ADD_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "ADD_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  ADD_PROJECT_REQUEST,
  ADD_PROJECT_SUCCESS,
  ADD_PROJECT_FAILURE,
};


const DELETE_PROJECT_REQUEST = "DELETE_PROJECT_REQUEST";
const DELETE_PROJECT_SUCCESS = "DELETE_PROJECT_SUCCESS";
const DELETE_PROJECT_FAILURE = "DELETE_PROJECT_FAILURE";



export const  deleteProject = (id) => async (dispatch) => {
  try {
    dispatch({
      type: "DELETE_PROJECT_REQUEST",
    });
   
    const { data } = await axios.delete(`/api/v1/admin/project/${id}`);

    dispatch({
      type: "DELETE_PROJECT_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "DELETE_PROJECT_FAILURE",
      payload: error.response.data.message,
    });
  }
};


export {
  DELETE_PROJECT_REQUEST,
  DELETE_PROJECT_SUCCESS,
  DELETE_PROJECT_FAILURE,
};




const CONTACT_US_REQUEST = "CONTACT_US_REQUEST";
const CONTACT_US_SUCCESS = "CONTACT_US_SUCCESS";
const CONTACT_US_FAILURE = "CONTACT_US_FAILURE";
export const  contactUs = (name,email,message) => async (dispatch) => {
  try {
    dispatch({
      type: "CONTACT_US_REQUEST",
    });
   
    const { data } = await axios.post(`/api/v1/contact`,
      { 
        name,
        email,
        message,
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    dispatch({
      type: "CONTACT_US_SUCCESS",
      payload: data.message,
    });
  } catch (error) {
    dispatch({
      type: "CONTACT_US_FAILURE",
      payload: error.response.data.message,
    });
  }
};

export {
  CONTACT_US_REQUEST,
  CONTACT_US_SUCCESS,
  CONTACT_US_FAILURE,
};

