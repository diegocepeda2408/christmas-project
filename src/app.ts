import express from "express";
import { assignedToy, createToy, packedToy, storeStatus } from "./routes";

const app = express(); //? con esta linea inicializamos express

app.use(express.json());

interface Toy {
  id: number;
  name: string;
  type: string;
  magicLevel: number;
  packed: boolean;
  assignedTo: string | number;
}

const toys: Toy[] = [];
let toyId = 1;



//crear el juguete
app.post('/toy', createToy)

//empacar el juguete :id es el juguete que se quiere empacar
app.get('/toy/:id/pack', packedToy)

//asignar el juguete
app.post('toy/:id/assign', assignedToy)

//ver el estado del taller
app.get('/workshop', storeStatus)

const PORT = 3000
app.listen(PORT, () => {
  
});