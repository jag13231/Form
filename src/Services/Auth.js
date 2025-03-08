import { getUserData } from "./Storage"

export const Authenticate =()=>{
     return getUserData()!=null?true:false;
}