import {CREATE , DELETE , FETCH_ALL , LIKE , UPDATE} from '../constants/actionTypes';
import * as api from '../api';

// Action creators

export const getPosts = () => async (dispatch)=>{

    try{
        //{ data } is destructing the response object which contains a data object
        const { data } = await api.fetchPosts();        //in the response we always have a data object which will represnt the post 
        dispatch( {type : FETCH_ALL ,payload:data});  //dispatching action object which contains type and payload
    }catch(error){
            console.log(error.message);
    }    
}

export const createPost = (post) => async (dispatch) =>{
    try {
        console.log("hellos" );
        const { data } = await api.createPost(post);
        console.log("helloss" );
        dispatch({type:CREATE , payload:data});
    }catch(error){
        console.log(error);
    }
}

export const updatePost = ( id , post) => async(dispatch) =>{
    try{
           const {data} = await api.updatePost(id,post);
        //    const response = await api.updatePost(id,post);
        //    console.log(response);
           dispatch({type:UPDATE , payload:data});
    }catch(error){
            console.log(error.message);
    }
}

export const deletePost = (id) => async (dispatch) => {
    try{
            await api.deletePost(id);
            dispatch({type: DELETE ,payload:id})
    }catch(error){
            console.log(error);
    }
}

export const likePost = (id) => async (dispatch) => {
        try {
                const {data} = await api.likePost(id);
                dispatch ( { type : LIKE ,payload:data});
        } catch (error) {
                console.log(error);
        }

}