import mongoose from "mongoose";


//create table into DB
const sliderSchema = new mongoose.Schema(
    {
        image: { type: String, require: true },
    },
    {
        timestamps: true, //add date
    }
);

       const Slider = mongoose.model('Slider', sliderSchema);
       export default Slider;