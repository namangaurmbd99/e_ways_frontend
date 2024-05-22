export const auth_token = () => {
  let currentUserData = localStorage.getItem('current_user');
  if (currentUserData) {
    currentUserData = JSON.parse(currentUserData);
    if(currentUserData && currentUserData.hasOwnProperty('auth_token')) {
      auth_token = currentUserData.auth_token;
      return auth_token
    }
  }
}