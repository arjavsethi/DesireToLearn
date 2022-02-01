const Post = require("../models/postModel");
const catchAsyncErrors = require("../middleware/catchAsyncErrors.js");
const ApiFeatures = require("../utils/apifeatures");
const ErrorHander = require("../utils/errorhander");


exports.getAllPost= catchAsyncErrors(async(req,res)=>{
    const resultPerPage = 5;
    const postCount = await Post.countDocuments();
   const apiFeature=new ApiFeatures(Post.find(),req.query).search().pagination(resultPerPage);
  
    const posts=  await apiFeature.query;
  res.status(200).json({success:true,posts,postCount})
  
  });


  exports.createPost = catchAsyncErrors( async(req,res) =>{
    
    const post  = await Post.create(req.body);
    res.status(201).json({success:true,post});  
  });
  