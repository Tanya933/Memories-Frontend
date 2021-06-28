import {CREATE , DELETE , FETCH_ALL , LIKE , UPDATE} from '../constants/actionTypes';

// eslint-disable-next-line import/no-anonymous-default-export
export default (posts=[] ,action) => {
   //action.payload is the updated post
    switch(action.type){
        case DELETE:
            return posts.filter((post) => post._id !== action.payload);
        case LIKE: 
            return posts.map( (post) => post._id === action.payload._id ? action.payload : post);
        case UPDATE:
            return posts.map( (post) => post._id === action.payload._id ? action.payload : post);
        case FETCH_ALL:
            return action.payload;
        case CREATE:
            return [...posts, action.payload];
        default :
             return posts;
    }

}