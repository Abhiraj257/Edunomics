const initState = {
  token: null,
  userId: null,
  url: '/login'
}

const reducer = (state = initState, action) => {
  switch (action.type) {
    case 'SUCCESS': {
      return {
        token: action.token,
        userId: action.id,
        url: '/account'
      }
    }
    case 'FAIL': {
      return {
        token: null,
        userId: null,
        url: '/login'
      }
    }
  }

  return state
}

export default reducer
