
import {makeStyles,Box,Typography} from "@material-ui/core";

const useStyle = makeStyles({
    image:{
       background: `url(${'https://neilpatel.com/wp-content/uploads/2017/02/blogging.jpg'})center/55% repeat-x #000000`,
       width:'100%S',
       height: '50vh',
       backgroundSize:'cover',
       display: 'flex',
       flexDirection : 'column',
       alignItems: 'center',
       justifyContent:'center',
    },
    para:{
        fontSize:60,
        color:'#ffffff',
        lineheight:0.5,
   },
   paraTwo:{
    fontSize:20,
    color:'#ffffff',
    backgroundColor:'#000000'
   }
})
const Banner = () => {
    const classes = useStyle();
    return(
        <Box  className={classes.image}>
            <Typography className={classes.para}>Blog</Typography>
            <Typography className={classes.paraTwo}>Start Writing Your Thoughts</Typography>
        </Box>
    )
}

export default Banner