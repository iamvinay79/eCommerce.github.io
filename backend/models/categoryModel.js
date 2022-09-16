import mongoose from "mongoose";


//create table into DB
const categorySchema = new mongoose.Schema(
    {
        title: { type: String, require: true, unique: true },
        image: { type: String, require: true },
      
       
    },
    {
        timestamps: true, //add date
    }
);

       const Category = mongoose.model('Category', categorySchema);
       export default Category;