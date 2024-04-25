import { Request, Response } from "express";
import  {v4 as uuidv4} from 'uuid';
import { File } from "../models/fileModel";
import { IFileInput,IFileOuput } from "../types/fileTypes";


export const createFile= async (req: Request, res: Response) => {
    try {
        const { name, size, type, description }:IFileInput = req.body;
       
        const file:IFileOuput = await File.create({ name, size, type, description });
        return res.status(201).json(file);
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}

