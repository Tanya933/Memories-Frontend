import axios from 'axios';
const url = 'https://memories--web-app.herokuapp.com/posts';

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => {
    // const config = {
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   };
    // console.log(newPost);
//   const response =  await 
    return axios.post(url, newPost) ;
    // console.log(response);
};

export const updatePost = (id,updatedPost) => axios.patch(`${url}/${id}`,updatedPost);

export const deletePost = (id) => axios.delete(`${url}/${id}`);

export const likePost = ( id ) => axios.patch(`${url}/${id}/likePost`);