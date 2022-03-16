import {Helmet} from "react-helmet";
import Header from "./components/Header";
import Home from "./components/home/Home";
import Createpost from "./components/DetailPost/Createpost";
import {Box} from "@material-ui/core";
import Postview from "./components/DetailPost/Postview";
import { BrowserRouter,Route , Routes } from "react-router-dom";
import UpdatePost from "./components/DetailPost/UpdatePost";

function App() {
  return (
   
      <BrowserRouter>
        <Helmet>
                <meta charSet="utf-8" />
                <title>Blog Application</title>
                <link rel="canonical" href="http://mysite.com/example" />
                <meta name="description" content="Portfolio application" />
      </Helmet>
      <Header/>
      <Box >
       <Routes>
          <Route path='/' element={<Home />}> </Route>
          <Route path='/post/:id' element={<Postview/>}></Route>
          <Route path='/create' element={<Createpost/>}></Route>
          <Route path='/update/:id' element={<UpdatePost/>}></Route>
       </Routes>
      </Box>
      </BrowserRouter>
     
  );
}

export default App;
