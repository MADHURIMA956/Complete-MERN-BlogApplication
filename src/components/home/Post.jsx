import SinglePost from "./SinglePost";
import {Grid } from "@material-ui/core";
import {useState,  useEffect } from "react";
import { Link } from 'react-router-dom';

import { getAllposts } from "../../service/api";

const Post = () => {
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        const fetchData = async() => {
            let data = await getAllposts();
            setPosts(data)
            console.log(data);
        }
        fetchData();
    },[])
    return (
        // item lg={3} sm={4} xs={12}
        posts.map(post => (
            <Grid item lg={3} sm={4} xs={12}>
            <Link to={`/post/${post._id}`}><SinglePost post={post}/></Link>
            </Grid>
        ))
    )
}

export default Post;