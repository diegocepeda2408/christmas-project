import express from "express";
import {router as toyRoutes} from "./routes";

const app = express(); //? con esta linea inicializamos express

app.use(express.json());
app.use(toyRoutes)

const PORT = 3000
app.listen(PORT, () => {
  
});