const Todo = require("../models/Todo");

exports.getTodo = async(req,res) => {

    try{
        // fetch all items
        const todos =await Todo.find({});

        res.status(200)
        .json({
            success:true,
            data:todos,
            message:"Here are all todos",
        });

    }
    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                message:`Server Error`,
                error:err.message,
            }
        )   
    }
}

exports.getTodoByID = async(req,res) =>{

    try{
        //extract by id
        const id =req.params.id;
        const todo =await Todo.findById({_id:id})

        //data not found
        if(!todo){
            return res.status(404)
            .json({
                sucess:false,
                message:"data not found",
            })
        }

        //data found
        res.status(200)
        .json({
            success:true,
            data:todo,
            message:`here are data at your ${id}`,
        })
    }

    catch(err){
        console.error(err);
        console.log(err);
        res.status(500)
        .json(
            {
                success:false,
                message:`Server Error`,
                error:err.message,
            }
        )   
    }

}