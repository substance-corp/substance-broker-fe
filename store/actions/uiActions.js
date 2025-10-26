// UI Action Types
export const SHOW_LOADER = 'SHOW_LOADER';
export const HIDE_LOADER = 'HIDE_LOADER';
export const SHOW_SUCCESS_TOAST = 'SHOW_SUCCESS_TOAST';
export const SHOW_ERROR_TOAST = 'SHOW_ERROR_TOAST';
export const SHOW_INFO_TOAST = 'SHOW_INFO_TOAST';
export const HIDE_TOAST = 'HIDE_TOAST';

// UI Actions
export const showLoader = (message = 'Loading...') => ({
  type: SHOW_LOADER,
  payload: message,
});

export const hideLoader = () => ({
  type: HIDE_LOADER,
});

export const showSuccessToast = (message) => ({
  type: SHOW_SUCCESS_TOAST,
  payload: message,
});

export const showErrorToast = (message) => ({
  type: SHOW_ERROR_TOAST,
  payload: message,
});

export const showInfoToast = (message) => ({
  type: SHOW_INFO_TOAST,
  payload: message,
});

export const hideToast = () => ({
  type: HIDE_TOAST,
});
