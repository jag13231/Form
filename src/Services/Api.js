import axios from 'axios'
axios.defaults.baseURL="https://identitytoolkit.googleapis.com/v1"
let API_KEY = "AIzaSyAUM0a1waLBFzOopOHca-Za3VxYYFZ6c9Q"
const REGISTER_URL = `/accounts:signUp?key=${API_KEY}`


export const RegisterApi =(inputs)=>{
        let data = {displayName:inputs.name,email:inputs.email,password:inputs.password}
      return axios.post(REGISTER_URL,data)
}