import { getToken } from "./local";

const API_URL = "http://localhost:3030/api";

const fetchData = async(route,method,inputData=null)=>{    
    const url = new URL(API_URL + route);
    const fetchOptions = {
        method:method,
        headers:{
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getToken()}`
        }
    }
    if(inputData){
        if(method === "get"){
            Object.keys(inputData).forEach(key=>{
                url.searchParams.append(key,inputData[key]);
            })
        }
        else if(method === "post" || method === "put" || method === "patch"){
            fetchOptions.body = JSON.stringify(inputData);
        }
    }
    try {
        const result = await fetch(url.toString(),fetchOptions);
        const data  = await result.json();

        return data;
    } catch (error) {
        console.error(error);
        return ({error:error.message})
    }
}

const register = async(userData)=>{
    const result = await fetchData("/register","post",userData);
    return result;
}
const login = async(userData)=>{
    const result = await fetchData("/login","post",userData);
    return result;
}
const fetchUserData = async()=>{
    const result = await fetchData("/users/bytoken","get");
    return result;
}

const getUserData = async()=>{
    const result = await fetchData("/users/bytoken","get");
    return result;
}

const getAllPostsInSubforum = async()=>{
    const result = await fetchData("/subforum","get");
    return result;
}
 const getOnePostInSubforumById = async(id)=>{
    const result = await fetchData(`/subforum/${id}`,"get");
    return result;
}
const createPostInSubforum = async(postData)=>{
    const result = await fetchData("/subforum","post",postData);
    return result;
}

const updatePostInSubforum = async(id,postData)=>{
    const result = await fetchData(`/subforum/${id}`,"put",postData);
    return result;
}
const deletePostInSubforum = async(id)=>{
    const result = await fetchData(`/subforum/${id}`,"delete");
    return result;
}
const getAllUsers = async()=>{
    const result = await fetchData("/users","get");
    return result;
}
const getRecursos = async()=>{
    const result = await fetchData("/resources","get");
    return result;
}
const getRecurso= async(id)=>{
    const result = await fetchData("/resources/"+id,"get");
    return result;
}
const createRecurso = async(recursoData)=>{
    const result = await fetchData("/resources","post",recursoData);
    return result;
}

const barraBusqueda = async(busquedaData)=>{
    const result = await fetchData("/resources/busqueda/"+busquedaData,"get");
    return result;
}
const getAllCommentsByPostId = async (forumId) => {
    const result = await fetchData(`/comments/subforum/${forumId}`, "get");
    return result;
};

const createComment = async (forumId, commentData) => {
    const result = await fetchData(`/comments/${forumId}`, "post", commentData);
    return result;
};

const updateComment = async (commentId, commentData) => {
    const result = await fetchData(`/comments/${commentId}`, "put", commentData);
    return result;
};

const deleteComment = async (commentId) => {
    const result = await fetchData(`/comments/${commentId}`, "delete");
    return result;
};
const likeComment = async (commentId) => {
    const result = await fetchData(`/comments/${commentId}/like`, "post");
    return result;
};

const dislikeComment = async (commentId) => {
    const result = await fetchData(`/comments/${commentId}/dislike`, "post");
    return result;
};

const getCompanyByUserId = async () => {
    const result = await fetchData(`/companies/user/company`, "get");
    return result;
};

const getProjectByUserId = async () => {
    const result = await fetchData(`/projects/user/project`, "get");
    return result;
};

const createCompany = async (companyData) => {
    const result = await fetchData(`/companies/`, "post", companyData);
    return result;
};

const getUserPanel= async(id)=>{
    const result = await fetchData("/create/"+id,"get"); 
    return result;
}

const updateUser = async(id)=>{
    const result = await fetchData("/users/"+id,"put"); 
    return result;
}


const createProject = async(postData)=>{
    const result = await fetchData("/projects","post",postData);
    return result;
}

const inviteUserToProject = async(projectId, data)=>{
    const result = await fetchData(`/projects/${projectId}/invite`,"post",data);
    return result;
}


const respondToInvitation = async(projectId, data)=>{
    const result = await fetchData(`/projects/${projectId}/respondInvitation`,"post",data);
    return result;
}

const getUserInvitations = async()=>{
    const result = await fetchData("/projects/user/invitations","get");
    return result;
}
const getUserResources = async()=>{
    const result = await fetchData("/resources/user/resource","get");
    return result;
}

export {
    register,
    login,
    getUserData,
    getAllPostsInSubforum,
    getOnePostInSubforumById,
    createPostInSubforum,
    updatePostInSubforum,
    deletePostInSubforum,
    getAllUsers,
    fetchUserData,
    getRecursos,
    getRecurso,
    createRecurso,
    barraBusqueda,
    getUserPanel,
    getAllCommentsByPostId,
    createComment,
    updateComment,
    deleteComment,
    likeComment,
    dislikeComment,
    getCompanyByUserId,
    getProjectByUserId,
    createCompany,
    updateUser,
    createProject,
    inviteUserToProject,
    respondToInvitation,
    getUserInvitations,
    getUserResources
}