const mongoose = require("mongoose");

// Inner section schema
const innerSectionStyleSchema = new mongoose.Schema({
    imgUrl: { type: String },
    videoUrl: { type: String },
    opacity: { type: Number },
    background: { type: String },
    gradientAngle: { type: Number },
    gradientLeft: { type: String },
    gradientRight: { type: String },
    backgroundType: { type: String },
});

// Array items schema
const arrayItemsSchema=new mongoose.Schema({
    type:{type:String},
    value:mongoose.Schema.Types.Mixed,
    style:mongoose.Schema.Types.Mixed
});

// Nested data schema
const nestedDataSchema=new mongoose.Schema({
    col:{type:String},
    innerSectionStyle:innerSectionStyleSchema,
    array:[arrayItemsSchema]
});

const NestedModel= mongoose.model("nestedModel",nestedDataSchema);
module.exports=NestedModel;

// Above model is for this type of nested Data

// {
//     "col": "100%",
//     "innerSectionStyle": {
//         "imgUrl": "Zoom https---firebasestorage.googleapis.com-v0-b-techno-projects.appspot.com-o-images.jpg?alt=media&token=3aa3bfae-6fcf-4706-af93-543b6aba3ba9https://firebasestorage.googleapis.com/v0/b/techno-projects.appspot.com/o/images.jpg?alt=media&token=3aa3bfae-6fcf-4706-af93-543b6aba3ba9",
//         "videoUrl": "https://firebasestorage.googleapis.com/v0/b/techno-projects.appspot.com/o/SampleVideo_1280x720_2mb.mp4?alt=media&token=67a28510-04cf-475f-b3f7-742dfdd8e9e3",
//         "opacity": 10,
//         "background": "#ffffff",
//         "gradientAngle": 45,
//         "gradientLeft": "#232323",
//         "gradientRight": "#676767",
//         "backgroundType": "Color"
//     },
//     "array": [
//         {
//             "type": "text",
//             "value": "text",
//             "style": {
//                 "fontsize": 18,
//                 "fontUnit": "px",
//                 "justifyContent": [{"a1":"normal"},{"a2":"center"},{"a3":"start"}],
//                 "textDecor": "none",
//                 "color": "#000000",
//                 "background": "#ffffff",
//                 "backgroundType": "color",
//                 "space": 1,
//                 "lineHeight": 2,
//                 "fontWeight": 400,
//                 "textAlignItems": "start",
//                 "alignItems": "normal",
//                 "fontStyle": "normal",
//                 "fontFamily": "auto",
//                 "width": "auto",
//                 "widthNumber": 0,
//                 "widthUnit": "px",
//                 "height": "auto",
//                 "heightNumber": 0,
//                 "heightUnit": "px",
//                 "marginUnit": "px",
//                 "margin": "auto",
//                 "marginL": 0,
//                 "marginR": 0,
//                 "marginT": 0,
//                 "marginB": 0,
//                 "paddingUnit": "px",
//                 "padding": "inherit",
//                 "paddingL": 0,
//                 "paddingR": 0,
//                 "paddingT": 0,
//                 "paddingB": 0,
//                 "textTransform": "none",
//                 "gradientAngle": 45,
//                 "gradientLeft": "#ffffff",
//                 "gradientRight": "#ffffff"
//             }
//         },
//     ]
// }