export const ADMIN_NAVBAR_LOADING = 'ADMIN_NAVBAR_LOADING'
export const ADMIN_NAVBAR_NOT_LOADING = 'ADMIN_NAVBAR_NOT_LOADING'

export function startLoading() {
  return {
    type: ADMIN_NAVBAR_LOADING
  }
}

export function stopLoading() {
  return {
    type: ADMIN_NAVBAR_NOT_LOADING
  }
}
