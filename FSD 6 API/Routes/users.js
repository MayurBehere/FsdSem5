import express from "express";
import {v4 as uuidv4} from "uuid";
uuidv4();

const router = express.Router();

let users = [ ];

router.get("/", (req, res) => {
    console.log(users);
    res.send(users);    
    console.log("GET ROUTE REACHED");
});

router.post("/", (req, res) => {
    console.log("POST ROUTE REACHED");
    const NewUser = req.body;
    const UserWithID = {...NewUser, id: uuidv4()};
    users.push(UserWithID);
    res.send(`User with the name ${NewUser.FirstName} added to the database!`);
});

router.get("/:id", (req, res) => {
    const {id}= req.params;
    const FoundUser = users.find((user) => user.id === id);
    res.send(FoundUser);
});

router.delete("/:id", (req, res) => {
    const {id}= req.params;
    users = users.filter((user) => user.id !== id);
    res.send(`User with the id ${id} deleted from the database!`);
});

router.patch("/:id", (req, res) => {
    const {id}= req.params;
    const {FirstName, LastName, Age} = req.body;
    const user = users.find((user) => user.id === id);
    if(FirstName) user.FirstName = FirstName;
    if(LastName) user.LastName = LastName;
    if(Age) user.Age = Age;
    res.send(`User with the id ${id} has been updated!`);
});
export default router;