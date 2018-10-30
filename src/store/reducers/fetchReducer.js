import * as actionTypes from '../actions/actionTypes';

const initialState = {
    stories: [] ,
    comments: [],
    loading: false,
    userLoggedIn: false
}

const fetchStart = ( state, action ) => {
    return {
        ...state,
        loading: true
    } 
};
const fetchStoriesSuccess = ( state, action ) => {
    return {
        ...state,
        stories: action.stories,
        loading: false
    } 
};
const fetchStoriesFail = ( state, action ) => {
    return {
        ...state,
        stories: action.error,
        loading: false

    } 
};

const fetchCommentsSuccess = ( state, action ) => {
    // debugger;
    return {
        ...state,
        comments: action.comments,
        loading: false

    } 
};
const fetchCommentsFail = ( state, action ) => {
    return {
        ...state,
        comments: action.error,
        loading: false

    } 
};
const login = (state, action) => {
    return {
        ...state,
        userLoggedIn: action.user
    }
}
const logout = (state, action) => {
    return {
        ...state,
        userLoggedIn: false
    }
}

const reducer = (state=initialState, action) => {
  // debugger;
    switch(action.type){
        case actionTypes.FETCH_STORIES_SUCCESS : 
        return fetchStoriesSuccess(state, action)
       
        case actionTypes.FETCH_STORIES_FAIL : 
        return fetchStoriesFail(state, action)
       
        case actionTypes.FETCH_COMMENTS_SUCCESS : 
        return fetchCommentsSuccess(state, action)
      
        case actionTypes.FETCH_COMMENTS_FAIL : 
        return fetchCommentsFail(state, action)
        
        case actionTypes.FETCH_START : 
        return fetchStart(state, action)

        case actionTypes.LOGIN :
        return login(state, action)
   
        case actionTypes.LOGOUT :
        return logout(state, action)
   
        default :
        return state
    }
}
export default reducer;