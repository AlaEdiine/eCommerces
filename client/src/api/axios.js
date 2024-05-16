import axios from "axios";

// export default axios.create({
//     baseURL : 'http://localhost:3001' ,
//     // headers:  { "authoriza": accountService.GetTokenCookies()
//     // }
// })


// axios.interceptors.request.use((request) =>{

   
//         request.headers.Authorization = 'Bearer '+accountService.GetTokenCookies()

//     return request    https://servers-7ssr.onrender.com/
   
// })

const API = axios.create({
          baseURL : 'https://ecommerces-ncev.onrender.com' ,
        //  baseURL : 'http://localhost:3001' , 
        //  headers:   { 
        //    'auth' : token
        //   }
        // baseURL : 'https://servers-7ssr.onrender.com/' ,
    })
    
    API.interceptors.request.use((request) =>{
        
        request.headers.authorization = 'Bearer '+localStorage.getItem("Token")
        return request
        
    })
    // axios.interceptors.request.use(function (request) {
    //   request.headers.auth = Cookies.get("Token")
    //   // faire quelque chose avant que la requête ne soit envoyée
    //   return request;
    // }, function (error) {
    //   // faire quelque chose en cas d’erreur
    //   return Promise.reject(error);
    // });
    API.defaults.withCredentials = true
    
    export default API