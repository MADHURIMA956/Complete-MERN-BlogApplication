import {Box , makeStyles,Typography} from "@material-ui/core";
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useEffect, useState } from "react";
import { getposts ,deletepost} from "../../service/api";
import {Link,useNavigate,useParams} from 'react-router-dom';

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
    icons:{
        float: 'right',
    },
    icoption:{
        margin: 5,
        padding: 5,
        border: '1px solid #878787',
        borderRadius:10,
    },
    title:{
        fontSize:38,
        fontWeight:600,
        textAlign:'center',
        margin: '50px 0  10px 0',
    },
    head:{
        color: '#878787',
        display: 'flex',
        margin: '20px 0',
        [theme.breakpoints.down('md')]:{
            display: 'block',
        }
    }
}));
const Postview = ({match} ) => {
    const classes = useStyle();
    const navigate = useNavigate();
    const [post, setPost] = useState({});
    const url = 'https://www.wpbeginner.com/wp-content/uploads/2016/11/blogimagetools.jpg';
    const { id } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            let data = await getposts(id);
            setPost(data);
        }
        fetchData();
    
    },[]);

    const deleteBlog = async () => {
        await deletepost(post._id);
        navigate('/');
    }
  return (
    <Box className={classes.container}>
        <img className={classes.image} src={post.picture || url} alt="" />
        <Box className={classes.icons}>
            <Link to={`/update/${post._id}`}><EditIcon className={classes.icoption} color='primary'/></Link>
            <DeleteIcon onClick={() => deleteBlog()} className={classes.icoption} color='error'/>
        </Box>
        <Typography className={classes.title}>{post.title}</Typography>
        <Box className={classes.head}>
             <Typography >Author : <span className={{fontWeight:600}}>{post.username}</span> </Typography>
             <Typography style={{marginLeft: 'auto'}} >{new Date(post.createDate).toDateString()}</Typography>
        </Box>
        <Typography >{post.description}</Typography>

    </Box>
  );
}

export default Postview;