import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();

app.use(express.json())

app.get("/users", (req, res) => {
    const users = db.getUsers();
    res.status(200).json(users);
})

app.get("/users/:id", (req, res) => {
    const user = db.getCarById(+req.params.id)
    if(!user){
        return res.status(404).json({message: "User is not found"})
    }
    res.status(200).json(user)
}
)
app.post("/users", (req,res) => {
    const {email, password} = req.body;
    if(!brand || !model){
        res.status(404).json({message: "You need to fill all the fields!"})
    }
    const create = db.saveCar(brand, model)
    res.status(200).json(create);
})

app.listen(PORT, ()=> {
    console.log(`Server runs on port ${PORT}`)
})