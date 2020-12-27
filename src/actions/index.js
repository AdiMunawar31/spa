import axios from "axios";

export const GET_USER = "GET_USER";
export const GET_USER_DETAIL = "GET_USER_DETAIL";
export const POST_USER_CREATE = "POST_USER_CREATE";
export const PUT_USER_EDIT = "PUT_USER_EDIT";

export const getUser = () => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/adimunawar31/d2yAPI/users")
      .then(function (response) {
        dispatch({
          type: GET_USER,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const getUserDetail = (id) => {
  return (dispatch) => {
    axios
      .get("http://my-json-server.typicode.com/adimunawar31/d2yAPI/users/" + id)
      .then(function (response) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: GET_USER_DETAIL,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const postUserCreate = (data) => {
  return (dispatch) => {
    axios
      .post(
        "http://my-json-server.typicode.com/adimunawar31/d2yAPI/users",
        data
      )
      .then(function (response) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: POST_USER_CREATE,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};

export const putUserUpdate = (data, id) => {
  return (dispatch) => {
    axios
      .put(
        "http://my-json-server.typicode.com/adimunawar31/d2yAPI/users/" + id,
        data
      )
      .then(function (response) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: response.data,
            errorMessage: false,
          },
        });
      })
      .catch(function (error) {
        dispatch({
          type: PUT_USER_EDIT,
          payload: {
            data: false,
            errorMessage: error.message,
          },
        });
      });
  };
};
export const deleteUser = (id) => {
  return (dispatch) => {
    axios
      .delete(
        "http://my-json-server.typicode.com/adimunawar31/d2yAPI/users/" + id
      )
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
};

export const setUserDetail = () => {
  return (dispatch) => {
    dispatch({
      type: GET_USER_DETAIL,
      payload: {
        data: false,
        errorMessage: false,
      },
    });
  };
};
