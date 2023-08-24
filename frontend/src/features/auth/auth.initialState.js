// Get user from localStorage
const user = JSON.parse(localStorage.getItem('user'))
 const initialAuthState = {
    user: user ? user : null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: '',
  }

  export default initialAuthState;