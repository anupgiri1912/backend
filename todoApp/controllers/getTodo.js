//import th model
const Todo =require("../models/Todo");

//define route handler

exports.getTode = async(req,res) => {
    try{
 // fetch all todo items from database
  const todos= await  Todo.find({});


  //response
  res.status(200)
  .json({
    success:true,
     data:todos,
     message:"Entire Todo Data is fetched",

  })
}
    catch(err){
   console.error(err);
   res.status(500)
   .json({
    success:false,
    data:"internal server error",
    message:err.message,  
 })
}
}