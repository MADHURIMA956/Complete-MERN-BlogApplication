import SinglePost from "./SinglePost";
import {Grid } from "@material-ui/core";
import {useState,  useEffect } from "react";
import { Link, useLocation } from 'react-router-dom';

import { getAllposts } from "../../service/api";

const Post = () => {
    const [posts, setPosts] = useState([]);
    const {search} = useLocation();

    useEffect(()=>{
        const fetchData = async() => {
            let data = await getAllposts(search);
            setPosts(data)
            console.log(data);
        }
        fetchData();
    },[search])
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