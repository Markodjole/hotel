import axios from '../../axios-base';
import * as actionTypes from './actionTypes';


export const login = ( user ) => {
    return {
        type: actionTypes.LOGIN,
        user: user
    };
};

export const logout = (  ) => {
    return {
        type: actionTypes.LOGOUT,
        user: false
    };
};

const fetchStoriesSuccess = ( stories ) => {
   return {
       type: actionTypes.FETCH_STORIES_SUCCESS,
       stories: stories
   };
};
 const fetchStoriesFail = ( error ) => {
    return {
        type: actionTypes.FETCH_STORIES_FAIL,
        error: error
    };
};
const fetchStoriesStart = () => {
    return {
        type: actionTypes.FETCH_STORIES_START
    };
};

 const fetchCommentsSuccess = ( comments ) => {
    //  debugger;
    return {
        type: actionTypes.FETCH_COMMENTS_SUCCESS,
        comments: comments
    };
};

 const fetchCommentsFail = ( error ) => {
    return {
        type: actionTypes.FETCH_COMMENTS_FAIL,
        error: error
    };
};
const fetchCommentsStart = () => {
    return {
        type: actionTypes.FETCH_COMMENTS_START
    };
};

const fetchStart = () => {
    return {
        type: actionTypes.FETCH_START
    };
};
 

export const fetchStories = () => {
    return dispatch => {
        dispatch(fetchStart());
       axios.get( '/topstories.json' )
            .then( res => {  
                // console.log('akdnfjf')
                Promise.all(res.data.map(id => axios.get(`/item/${id}.json`)))
                .then(results => {
                    // console.log(results)
                    dispatch(fetchStoriesSuccess(results.map(result => result.data)))
                    })
                })
                .catch(err => {
                dispatch(fetchStoriesFail(err))
            })
            
    };
};
export const fetchComments = (ids) => {
    // debugger;
    return dispatch => {
        dispatch(fetchStart());
                Promise.all(ids ? ids.map(id => axios.get(`/item/${id}.json`)) : null)
                .then(results => {
                    // console.log(results)
                    dispatch( fetchCommentsSuccess(results.map(result => result.data)) )
                    })
                    .catch(err => {
                        dispatch( fetchCommentsFail(err) )
                    })         
    };
};