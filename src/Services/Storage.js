export const StoreUserData = (data)=>{
    localStorage.setItem('idToken',data)   
}

export const getUserData =()=>{
  return  localStorage.getItem('idToken')
}