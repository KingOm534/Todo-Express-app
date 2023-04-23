const express =require('express');
const app =express();

 //load config from env file
 require("dotenv").config();
 const PORT =process.env.PORT || 4000;

 //middleware to parse json req body
 app.use(express.json());

 //importing routes
 const todoRoutes =  require("./routes/Todos");

 //mounting(appends) todo API routes
 app.use("/api/v1",todoRoutes);

 //starting server
app.listen(PORT, () => {
    console.log(`App is running at the ${PORT}`);
})

//connecting DB
const dbConnect =require("./config/database");
dbConnect();

//default route
app.get("/", (req,res) => {
    res.send(`<h1>Ye HOMEPAGE hai beta</h1>`);
})