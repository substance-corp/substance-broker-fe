import {
  SHOW_LOADER,
  HIDE_LOADER,
  SHOW_SUCCESS_TOAST,
  SHOW_ERROR_TOAST,
  SHOW_INFO_TOAST,
  HIDE_TOAST,
} from '../actions/uiActions';

const initialState = {
  isLoading: false,
  loadingMessage: '',
  toast: {
    show: false,
    message: '',
    type: '', // success, error, info
  },
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return {
        ...state,
        isLoading: true,
        loadingMessage: action.payload,
      };

    case HIDE_LOADER:
      return {
        ...state,
        isLoading: false,
        loadingMessage: '',
      };

    case SHOW_SUCCESS_TOAST:
      return {
        ...state,
        toast: {
          show: true,
          message: action.payload,
          type: 'success',
        },
      };

    case SHOW_ERROR_TOAST:
      return {
        ...state,
        toast: {
          show: true,
          message: action.payload,
          type: 'error',
        },
      };

    case SHOW_INFO_TOAST:
      return {
        ...state,
        toast: {
          show: true,
          message: action.payload,
          type: 'info',
        },
      };

    case HIDE_TOAST:
      return {
        ...state,
        toast: {
          show: false,
          message: '',
          type: '',
        },
      };

    default:
      return state;
  }
};

export default uiReducer;
