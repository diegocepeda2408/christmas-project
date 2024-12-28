import { Request, Response } from "express";

interface Toy {
  id: number;
  name: string;
  type: string;
  magicLevel: number;
  packed: boolean;
  assignedTo: string | null;
}

const toys: Toy[] = [];
let toyId = 1;

export const createToy = (req: Request, res: Response) => {

    const {name, type, magicLevel} = req.body

    if (!name || name.length == 0){
        return res.status(422).json({
            message: "name is required"
        })
    }

    if (!type || type.length <= 0 ){
        return res.status(422).json({
        message: "type is required"
        })
    }

    if (!magicLevel || magicLevel.length <= 0 ){
        return res.status(422).json({
        message: "magic level is required"
        })
    }

    const newToy: Toy= {
        id:toyId++,
        name,
        type,
        magicLevel,
        packed: false,
        assignedTo: null
    };

    toys.push(newToy);

    return res.status(201).json({
        message: "toy successfully created!",
        toy: newToy
    })
}

export const packedToy = (req:Request, res: Response) => {

    const { id } = req.params;
    const toyId = +id;
    const toy = toys.find(t => t.id === toyId);

    if (!toy) {
        return res.status(404).json({
            message: `toy not found wuth id: ${id}`
        })
    }

    if (toy.packed){
        return res.status(400).json({
            message: 'toy already packed'
        })
    }

    toy.packed = true;

    return res.status(200).json({
        message: 'The toy has been packed!',
        toy
    })

}

export const assignedToy = (req:Request, res: Response) => {

    const { id } = req.params;
    const toyId = +id;

    const { childName } = req.body;

    if(!childName || childName.length <= 0) {
        return res.status(422).json({
            message: 'The children is required!'
        })
    }

    const toy = toys.find(t => t.id === toyId)

    if (!toy) {
        return res.status(404).json({
            message: `Toy with the id ${id} was not found!`
        })
    }

    if (!toy.packed) {
        return res.status(400).json({
            message : 'Toy is not packed yet!'
        })
    }

    toy.assignedTo = childName;

    return res.status(200).json({
        message : `The toy has been assigned to ${childName}`
    })
}

export const storeStatus = (req:Request, res: Response) => {
    return res.status(200).json({
        toys: toys
    })
}