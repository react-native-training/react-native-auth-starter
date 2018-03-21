export const LOG_IN = 'LOG_IN'
export const LOG_IN_SUCCESS = 'LOG_IN_SUCCESS'
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE'
export const LOG_OUT = 'LOG_OUT'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE'

export const SHOW_SIGN_IN_CONFIRMATION_MODAL = 'SHOW_SIGN_IN_CONFIRMATION_MODAL'
export const SHOW_SIGN_UP_CONFIRMATION_MODAL = 'SHOW_SIGN_UP_CONFIRMATION_MODAL'

export const CONFIRM_SIGNUP = 'CONFIRM_SIGNUP'
export const CONFIRM_SIGNUP_SUCCESS = 'CONFIRM_SIGNUP_SUCCESS'
export const CONFIRM_SIGNUP_FAILURE = 'CONFIRM_SIGNUP_FAILURE'

export const CONFIRM_LOGIN = 'CONFIRM_LOGIN'
export const CONFIRM_LOGIN_SUCCESS = 'CONFIRM_LOGIN_SUCCESS'
export const CONFIRM_LOGIN_FAILURE = 'CONFIRM_LOGIN_FAILURE'

const initialState = {
  isAuthenticating: false,
  user: {},

  signUpError: false,
  signInError: false,

  showSignUpConfirmationModal: false,
  showSignInConfirmationModal: false,

  confirmSignUpError: false,
  confirmLoginError: false,

  signInErrorMessage: '',
  signUpErrorMessage: '',

  confirmLoginErrorMessage: '',
  confirmSignUpErrorMessage: ''
}

export default (state = initialState, action) => {
  switch(action.type) {
    case SHOW_SIGN_IN_CONFIRMATION_MODAL:
      return {
        ...state,
        isAuthenticating: false,
        showSignInConfirmationModal: true
      }
      case SHOW_SIGN_UP_CONFIRMATION_MODAL:
      return {
        ...state,
        isAuthenticating: false,
        showSignUpConfirmationModal: true
      }
    case CONFIRM_SIGNUP:
      return {
        ...state,
        isAuthenticating: true
      }
    case CONFIRM_SIGNUP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        showSignUpConfirmationModal: false
      }
    case CONFIRM_SIGNUP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        confirmSignUpError: false,
        confirmSignupErrorMessage: action.error.message
      }
    case SIGN_UP:
      return {
        ...state,
        isAuthenticating: true,
      }
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        isAuthenticating: false
      }
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        signUpError: true,
        signUpErrorMessage: action.error.message
      }
    case LOG_IN:
      return {
        ...state,
        isAuthenticating: true,
        signInError: false
      }
    case LOG_IN_SUCCESS:
      return {
        isAuthenticating: false,
        user: action.user,
        showSignInConfirmationModal: true
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        isAuthenticating: false,
        signInError: true,
        signInErrorMessage: action.error.message
      }
    case CONFIRM_LOGIN: {
      return {
        ...state,
        isAuthenticating: true
      }
    }
    case CONFIRM_LOGIN_SUCCESS:
      return {
        ...state,
        isAuthenticating: false,
        showSignInConfirmationModal: false
      }
    case CONFIRM_LOGIN_FAILURE: {
      return {
        ...state,
        isAuthenticating: false
      }
    }
    case LOG_OUT:
      return {
        ...initialState,
      }
    default:
      return state
  }
}