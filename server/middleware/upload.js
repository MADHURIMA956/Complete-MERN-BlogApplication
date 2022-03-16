import {GridFsStorage} from 'multer-gridfs-storage'
import {multer} from 'multer'

const storage = new GridFsStorage({
    url : 'mongodb+srv://madhurima:Am123@cluster0.awxpg.mongodb.net/blogwebapplication?retryWrites=true&w=majority',
    options : {useUnifiedTopology:true,useNewUrlParser:true},
    file: (req,file)=>{
        const match = ['image/png', 'image/jpg'];
        if(match.indexOf(file.memeType) === -1)
            return `${Date.now()}-blog-${file.originalname}`;
        return {
            bucketName : 'photos',
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
});

export default multer({storage})