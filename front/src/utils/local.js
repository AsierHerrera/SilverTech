import {jwtDecode} from 'jwt-decode';
/**
 * Guarda un token en el almacenamiento local del navegador.
 *
 * @param {string} token - El token que se va a guardar.
 * @return {void} Esta función no devuelve nada.
 */

const saveToken =(token)=>{
    localStorage.setItem("token",token);
}

/**
 * Recupera el token almacenado en el almacenamiento local del navegador.
 *
 * @return {string} El valor del token almacenado en el almacenamiento local.
 */

const getToken = ()=>{
    return localStorage.getItem("token");
}

/**
 * Decodes a JWT token and returns the decoded payload.
 *
 * @param {string} token - The JWT token to decode.
 * @return {Object|null} The decoded payload of the token, or null if the token is invalid.
 */

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