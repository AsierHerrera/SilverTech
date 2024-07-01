
const saveToken =(token)=>{
    localStorage.setItem("token",token);
}

const getToken = ()=>{
    return localStorage.getItem("token");
}


export{
    saveToken,
    getToken
}