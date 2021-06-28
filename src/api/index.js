import axios from 'axios';
//const url = 'https://memories--web-app.herokuapp.com/posts';
//const url = 'http://localhost:5000/posts';

const API = axios.create({baseURL:'http://localhost:5000'});

API.interceptors.request.use((req) =>{
    if(localStorage.getItem('profile')){
        req.headers.Authorization =  `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});


export const fetchPosts = () => API.get('/posts');
export const createPost = (newPost) => API.post('/posts',newPost);


//export const createPost = (newPost) => axios.post('http://localhost:5000/posts',newPost);

// export const createPost = (newPost) => {
//     console.log(newPost);
//     return API.post('/posts',newPost);
// }
// export const createPost = (newPost) => {
//     // const config = {
//     //     headers: {
//     //       "Content-Type": "application/json",
//     //     },
//     //   };
//     // console.log(newPost);
// //   const response =  await 
//     return API.post('/posts', newPost) ;
//     // console.log(response);
// };
export const updatePost = (id,updatedPost) => API.patch(`/posts/${id}`,updatedPost);
export const deletePost = (id) => API.delete(`/posts/${id}`);
export const likePost = ( id ) => API.patch(`/posts/${id}/likePost`);

export const signIn = (formData) => API.post('/user/signin',formData);
export const signUp = (formData) => API.post('/user/signup',formData);