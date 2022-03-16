import Banner from "./Banner";
import LeftSide from "./LeftSide";
import Post from "./Post";
import {Grid } from "@material-ui/core";

const Home = () => {
   
    return(

        <>
            <Banner />
            <Grid container>
                <Grid item lg={2} xs={12} sm={2}>
                    <LeftSide />
                </Grid>
                <Grid container item xs={12} sm={10} lg={10}>
                    <Post />
                </Grid>
            </Grid>
        </>
    )
}

export default Home;