import jwt_decode from "jwt-decode";

export const setCurrentUser = () => async dispatch => {
  dispatch({ type: 'LOG_IN' });
  dispatch({ type: 'SET_LOADING', payload: true });
  try {
    let token = await localStorage.getItem('token');
    const TokenArray = token? token.split(" "): null
    dispatch({ type: 'SET_CURRENT_USER', payload: TokenArray? jwt_decode(TokenArray[1]) : {} });
  } catch (error) {
    alert('error');
    console.log(error);
    console.log(error?.response);
  } finally {
    dispatch({ type: 'SET_LOADING', payload: false });
  }
};