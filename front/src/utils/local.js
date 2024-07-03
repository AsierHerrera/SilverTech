import {jwtDecode} from 'jwt-decode';
const saveToken =(token)=>{
    localStorage.setItem("token",token);
}

const getToken = ()=>{
    return localStorage.getItem("token");
}

const parseToken = (token) => {
    try {
      return jwtDecode(token);
    } catch (error) {
      console.error("Invalid token:", error);
      return null;
    }
  };
  
//  const parseToken = (token) => {
//   try {
//     const decodedToken = jwtDecode(token);
//     return {
//       _id: decodedToken._id,
//       username: decodedToken.username,
//       role: decodedToken.role,
//       iat: decodedToken.iat,
//       exp: decodedToken.exp,
//       userId: decodedToken.userId 
//     };
//   } catch (error) {
//     console.error('Invalid token:', error);
//     return null;
//   }
// };


const deleteToken = ()=>{
    localStorage.removeItem("token");
}


export{
    saveToken,
    getToken,
    parseToken,
    deleteToken
}