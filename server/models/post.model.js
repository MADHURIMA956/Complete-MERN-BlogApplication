const {Schema,model} = require('mongoose');

const PostSchema = new Schema({
    title:{type:String, required:true, unique:true},
    description:{type:String, required:true},
    picture:{type:String, required:false},
    username:{type:String, required:true},
    categories:{type:String, required:false},
    createDate:{type:Date, required:true},
},{
    versionKey:false,
}
);

module.exports = model('post' , PostSchema)