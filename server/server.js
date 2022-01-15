import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import userRoutes from "./routes/user.js"

const app = express();


app.use(bodyParser.json({
    limit: "30mb",
    extended: true
}))
app.use(bodyParser.urlencoded({
    limit: "30mb",
    extended: true
}))
app.use(cors());


app.use(`/users`, userRoutes);



const CONNECTION_URL = "mongodb+srv://shneurGreenberg:4qyqwbzP8wJi3rS@cluster0.gt18p.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const PORT = process.env.PORT || 3500;


mongoose.connect(CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(() => app.listen(PORT, () => console.log(`server is run on port ${PORT}`)))
    .catch(error => {
        console.log(error.message)
    })

// mongoose.set("useFindAndModify", false);