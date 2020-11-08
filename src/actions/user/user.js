import userService from '../../userService/index'

function fetchStart() {
  return {
    type: 'USER_FETCHING'
  }
}

function fetchFail(payload) {
  return {
    type: 'USER_FAIL',
    payload
  }
}

export function fetchSuccess(payload) {
  return {
    type: 'USER_SUCCESS',
    payload
  }
}

export function loginAction(email, password) {
  return dispatch => {
    dispatch(fetchStart());

    return userService.login(email, password).then((data) => {
      dispatch(fetchSuccess(data))

      console.log('0')
    })
      .catch((error) => {
        dispatch(fetchFail(error))
        throw Error(error)
      })
  }
}

export function signupAction(user, password) {
  return dispatch => {
    dispatch(fetchStart());

    return userService.signup(user, password).then((data) => {
      console.log("successful signup", data)
      dispatch(fetchSuccess(data))
    })
      .catch((error) => {
        console.log("signup err", error)
        dispatch(fetchFail(error))
        throw Error(error)
      })
  }
}

export function setDataAction(data, email) {
  return dispatch => {
    dispatch(fetchStart());

    return userService.setdata(data, email).then((data) => {
      dispatch(fetchSuccess(data))
    })
      .catch((error) => {
        dispatch(fetchFail(error))
        throw Error(error)
      })
  }
}
