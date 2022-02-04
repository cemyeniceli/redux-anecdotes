const notificationReducer = (state = '', action) => {
    switch (action.type) {
      case 'SET_NOTIFICATION':
        return action.message
      default:
        return state
    }
}

export const setNotification = (message, duration) => {
    return async dispatch => {
        dispatch({
            type: 'SET_NOTIFICATION',
            message
        })
        setTimeout(() => {
            dispatch(resetNotification())  
          }, duration*1000);
    } 
}

export const resetNotification = () => {
    return {
        type: 'SET_NOTIFICATION',
        message: ''
    }
}

export default notificationReducer