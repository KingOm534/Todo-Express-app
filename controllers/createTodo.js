//import th model
const Todo = require("../models/Todo");

//define route handler
exports.createTodo =async(req,res)=> {
    try{
        //taking title and desctiption from request
        const {title,description} =req.body;
        //making todo obj and inserting in DB
        const response = await Todo.create({title,description});
        //send json res with success flag
        res.status(200).json(
            {
                success:true,
                data:response,
                message:'data entered'
            }
        );
    }   
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                message:`Server Error`,
                eror:err.message,
            }
        )
    }
}