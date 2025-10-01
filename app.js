import express from "express";
import cors from "cors";
import * as db from "./data/db.js";
import bcrpyt from "bcrpyt";

const PORT = 3000;
const app = express();

app.use(express.json())
app.use(cors());
app.use(express.static("public"))
app.use(bcrpyt());

app.get("/users", (req, res) => {
    const users = db.getUsers();
    res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
    const user = db.getUserById(+req.params.id)
    if(!user){
        return res.status(404).json({message: "User is not found"})
    }
    res.status(200).json(user)
}
)
app.post("/users", async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(404).json({message: "You need to fill all the fields!"})
    }
    const salt = await bcrpyt.genSalt();
    const hashedPassword = await bcrpyt.hash(password, salt)
    const create = db.saveUser(hashedPassword, email)
    res.status(200).json(create);
})
app.post("/users", async (req,res) => {
    const {email, password} = req.body;
    if(!email || !password){
        res.status(404).json({message: "You need to fill all the fields!"})
    }
    const salt = await bcrpyt.genSalt();
    const hashedPassword = await bcrpyt.hash(password, salt)
    const create = db.saveUser(hashedPassword, email)
    res.status(200).json(create);
})

app.use((err, res, req, next) => {
    if(err) res.status(500).json({error: err.message})
})

app.listen(PORT, ()=> {
    console.log(`Server runs on port ${PORT}`)
})