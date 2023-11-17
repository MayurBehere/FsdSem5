import  express  from "express";
import bodyPasrer from "body-parser";

const app = new express();
const PORT = 5000;

app.use(bodyPasrer.json());

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));