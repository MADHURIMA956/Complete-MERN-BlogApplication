import { Button, makeStyles,Table,TableHead, TableRow, TableCell ,TableBody} from "@material-ui/core";
import { categories } from "../../Category-constants/data";
import {Link} from 'react-router-dom';

const useStyle = makeStyles({
    Blogbtn:{
        margin: 20,
        background :'#3F51B5',
        color: '#ffffff',
        width: '90%',
        '&:hover': {
            color: '#3F51B5',
        }
    },
    link:{
        textDecoration:'none',
        color: 'inherit',
    },
    table:{
        border: '1px solid rgba(224,224,244,1)',
        marginLeft: 5,
    }
})
const LeftSide = () => {
    const classes = useStyle();
    return (
        <>
           <Link className={classes.link}  to="/create"> <Button variant="contained" className={classes.Blogbtn}>Create Blog</Button></Link>
           <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>All Category</TableCell>
                    </TableRow>   
                </TableHead>
                <TableBody>
                    {
                        categories.map(category => (
                            <TableRow>
                                <TableCell>{category}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
           </Table>
        </>
    )
}

export default LeftSide;