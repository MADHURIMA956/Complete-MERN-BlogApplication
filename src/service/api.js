import axios from 'axios';

export const postCreate = async (post) => {
   try{
    return await axios.post('http://localhost:3001/create', post)
   }catch(e){
    console.log(`Error while calling postData Api ${e}`)
   }
}

//for search basis of user

export const getAllposts = async(param) => {
   try{
      const res =  await axios.get(`http://localhost:3001/posts${param}`); //param "/?"
      return res.data;
   }catch(e){
    console.log(`Error while calling get all Post Api ${e}`)
   }
}


export const getposts = async (id) => {
   try{
      const res = await axios.get(`http://localhost:3001/post/${id}`);
      return res.data
   }catch(e){
      console.log(`Error while calling single post Api ${e}`)
     }
}



export const updatepost = async (id, post) => {
   try{
      const res = await axios.post(`http://localhost:3001/update/${id}`, post);
      return res.data
   }catch(e){
      console.log(`Error while calling update post Api ${e}`)
     }
}

export const deletepost = async (id) => {
   try{
      const res = await axios.delete(`http://localhost:3001/delete/${id}`);
      return res.data
   }catch(e){
      console.log(`Error while calling delete post Api ${e}`)
     }
}


export const uploadFile = async (data) => {
   try{
      const res = await axios.post(`http://localhost:3001/delete/file/upload`, data);
      return res.data
   }catch(e){
      console.log(`Error while uploading image Api ${e}`)
     }
}