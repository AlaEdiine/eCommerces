import axios from "axios";
import Cookies from "js-cookie";

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
          headers:   Cookies.get('Token')
        // baseURL : 'https://servers-7ssr.onrender.com/' ,
    })
    
    // axios.interceptors.request.use((request) =>{
        
    //     request.headers.Authorization = 'Bearer '+localStorage.getItem("Token")
    //     return request
        
    // })

    API.defaults.withCredentials = true
    
    export default API