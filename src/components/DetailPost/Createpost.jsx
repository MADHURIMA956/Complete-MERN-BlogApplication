

import {Box, makeStyles,FormControl,InputBase,Button ,TextareaAutosize} from "@material-ui/core";
import AddBoxIcon from '@material-ui/icons/AddBox';
import { upload } from "@testing-library/user-event/dist/upload";
import { useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom'
import {postCreate, uploadFile} from '../../service/api'

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

const inialValue = {
    title: '',
    description:'',
    picture:'',
    username:'user',
    categories:'All',
    createDate:new Date()
}


const Createpost = () => {
    const classes = useStyle();
    const [post , setPost] =useState(inialValue);
    const [file, setFile] = useState('');

    const navigate  = useNavigate();
    const handleChange = (e) => {
        setPost({...post, [e.target.name] : e.target.value })
    }

    const savepostData = async () => {
       await postCreate(post);
       navigate('/')
    }

    useEffect(()=> {
        const getImage =async () => {
            if(file){
                const data = new FormData() ;
                data.append("name", file.name);
                data.append('file', file)
                await uploadFile(data)
            }
        };
        getImage();
    },[file])
    return(
       <Box className={classes.container}>
           <img className={classes.image} src="https://media.istockphoto.com/photos/blogging-woman-reading-blog-picture-id887987150?k=20&m=887987150&s=612x612&w=0&h=vCVYGvEkLb3DuCL7DOSoNm8i78Lci4oCt7XD4HGasIg=" alt="" />
           <FormControl className={classes.form}>
               <label htmlFor="fileinput">
                <AddBoxIcon fontSize="large"  color="action"/>
               </label>
               <input type="file" 
               id="fileinput" 
               style={{display : 'none'}}
               onChange={(e) => setFile(e.target,file[0])}
               />
               <InputBase 
                    onChange={(e) => handleChange(e)} 
                    className={classes.text} 
                    placeholder="title"
                    name="title"
                    />
               <Button variant="contained"  onClick={() => savepostData()} className={classes.Blogbtn}>Publish</Button>
           </FormControl>
           <TextareaAutosize 
                rowsMin={5}
                placeholder="Write your story..."
                className={classes.textarea}
                name='description'
                onChange={(e) => handleChange(e)}
            />
       </Box>
    )
}

export default Createpost;