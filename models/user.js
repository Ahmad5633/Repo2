import mongoose from "mongoose";
const schema = mongoose.Schema({
    name: {type: String , required : true},
    email: {type:String , required : true},
    password:{type:String , requird : true},
    age: {type:String ,required :true ,min:18},
});
export default mongoose.model("User",schema);