
import axios from 'axios'; 


export const uploadFile=async(data)=>{
    try{
     const response= await axios.post(`https://file-sharing-app-backend-omega.vercel.app/upload`,data);
     return response.data;
    }
    catch(error){
        console.log("Error while calling the api",error.message)
    }
}
