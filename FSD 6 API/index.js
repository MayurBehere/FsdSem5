import express from "express";
import bodyParser from "body-parser";
import UsersRoutes from "./Routes/users.js";

const app = express();
const PORT = 5000;

app.get('/', (req, res) => res.send('Hello User, Welcome to the Home Page of the API Server'));

app.use(bodyParser.json());
app.use('/users', UsersRoutes);
app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));