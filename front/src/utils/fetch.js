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
    const result = await fetchData("/recursos","get");
    return result;
}
const getRecurso= async(id)=>{
    const result = await fetchData("/recursos/"+id,"get");
    return result;
}
const createRecurso = async(recursoData)=>{
    const result = await fetchData("/recursos","post",recursoData);
    return result;
}

const barraBusqueda = async(busquedaData)=>{
    const result = await fetchData("/resources/busqueda/"+busquedaData,"get");
    return result;
}

const getUserPanel= async(id)=>{
    const result = await fetchData("/panel-de-usuario/"+id,"get");
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
    getUserPanel

}