
import { Box,Typography ,makeStyles} from "@material-ui/core";
// import { post } from "../../../server/route";
const useStyle = makeStyles({
    container: {
        border: '1px solid #d3cede',
        borderRadius: 10,
        margin: 10,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        height: 350,
        '& > *': {
            padding: '0 5px 5px 5px'
        }
    },
    image: {
        width: '100%',
        objectFit: 'cover',
        borderRadius: '10px 10px 0 0',
        height: 150
    },
    text:{
        color: '#878787',
        fontSize:12,
    },
    heading:{
        fontSize:18,
        fontWeight:600,
    },
    descrp:{
        fontSize:14,
        wordBreak: 'break-word'
    }
})

const SinglePost = ({post}) => {
    const classes = useStyle();
    const url = post.picture || "https://www.wpbeginner.com/wp-content/uploads/2016/11/choose-best-blogging-platform.png"
    return (
        <>
            <Box className={classes.container}>
                <img className={classes.image} src={url} alt="wrapper" />
                <Typography className={classes.text}>{post.categories}</Typography>
                <Typography className={classes.heading}>{post.title}</Typography>
                <Typography className={classes.text}>Author: {post.username}</Typography>
                <Typography className={classes.descrp}>{post.description}</Typography>

           </Box>
        </>
    )
}

export default SinglePost;