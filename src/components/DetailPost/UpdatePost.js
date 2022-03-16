

import {Box, makeStyles,FormControl,InputBase,Button ,TextareaAutosize} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { useState,useEffect } from "react";
import { getposts,updatepost } from "../../service/api";
import {useParams, useNavigate} from 'react-router-dom';

const useStyle = makeStyles((theme) => ({
    container: {
        padding:'0 100px',
        [theme.breakpoints.down('md')]:{
            padding: 0,
        }
    },
    image:{
        width:'100%',
        height:'50vh',
        objectFit:'cover',
    },
    form:{
        display: 'flex',
        flexDirection:'row',
        marginTop: 10,
    },
    text:{
        flex: 1,
        fontSize:25,
        margin: '0 30px',
    },
    textarea:{
        width: '100%',
        border: 'none',
        marginTop: 50,
        fontSize: 18,
        '&:focus-visible': {
            outline: 'none'
        }
    },
    Blogbtn:{
        background :'#3F51B5',
        color: '#ffffff',
        '&:hover': {
            color: '#3F51B5',
        }
    },
}));

// const inialValue = {
//     title: '',
//     description:'',
//     picture:'',
//     username:'user',
//     categories:'All',
//     createDate:new Date()
// }


const UpdatePost = ({match}) => {
    const classes = useStyle();
    const [post,setPost] = useState({});
    const { id } = useParams();
    const navigate = useNavigate();
    useEffect(()=> {
        const fetchData = async () => {
          let data =   await getposts(id);
          console.log(data)
          setPost(data)
        };
        fetchData();
    },[])

    const handleChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value })
    };
    const updateBlog = async () => {
       await updatepost(id, post)
       navigate(`/post/${id}`)
    }
    return(
       <Box className={classes.container}>
           <img className={classes.image} src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=" alt="" />
           <FormControl className={classes.form}>
               <AddBoxIcon fontSize="large"  color="action"/>
               <InputBase 
               name="title"
               className={classes.text} 
               onChange={(e) => handleChange(e)} 
               value={post.title}
                placeholder="title" />
               <Button onClick={()=> updateBlog()} variant="contained" className={classes.Blogbtn}>Update</Button>
           </FormControl>
           <TextareaAutosize 
                name = "description"
                rowsMin={5}
                placeholder="Write your story..."
                value={post.description}
                className={classes.textarea}
                onChange={(e) => handleChange(e)}
            />
       </Box>
    )
}

export default UpdatePost;