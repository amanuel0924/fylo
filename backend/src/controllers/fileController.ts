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

export const getFilesById= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const file:IFileOuput|null = await File.findByPk(id)
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        return res.status(200).json(file);
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}

export const  getAllFile= async (req: Request, res: Response) => {
    try {
        const files:IFileOuput[] = await File.findAll();
        return res.status(200).json(files);
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateFile= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const { name, size, type, description }:IFileInput = req.body;

        const file:File|null = await File.findByPk(id);
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        file.name = name;
        file.size = size;
        file.type = type;
        file.description = description;
        await file.update({ name, size, type, description });
        return res.status(200).json(file);
    }
    catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}

export const deleteFile= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const file:File|null = await File.findByPk(id);
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        await file.destroy();
        return res.status(204).json({
            message: "File deleted successfully",
        });
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}
