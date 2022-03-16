import {AppBar , Toolbar , Typography , makeStyles} from "@material-ui/core";
import { Link } from 'react-router-dom';

const useStyle = makeStyles({
    component:{
       
    },
    container:{
        justifyContent:'left',
        '&>*':{
            padding:20
        }   
     },
     link:{
         textDecoration:'none',
         color:'#ffffff',
     }
})
const Header = () => {
    const classes = useStyle();
    return (
        <AppBar className={classes.component} position="static">
        <Toolbar className={classes.container}>
            <Link  className={classes.link} to="/"><Typography > Blog Application </Typography> </Link>
            <Link  className={classes.link} to="/"><Typography > About Us </Typography> </Link>
            <Link  className={classes.link} to="/"><Typography > Contact </Typography> </Link>
            <Link  className={classes.link} to="/"><Typography > Login</Typography> </Link>
        </Toolbar>
      </AppBar>
    )
}

export default Header