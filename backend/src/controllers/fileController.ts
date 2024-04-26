import fs from "fs";
import { Request, Response } from "express";
import  {v4 as uuidv4} from 'uuid';
import { File } from "../models/fileModel";
import { IFileInput } from "../types/fileTypes";
import path from "path";



export const createFile= async (req: Request, res: Response) => {
    try {
        if(req.file){
            req.body.name = req.file.filename;
            req.body.size = req.file.size;
            req.body.type = path.extname(req.file.originalname);
        }
        else
        {
            return res.status(500).json({ message: "File not found"});
        }
        
        const { name, size, type, description }:IFileInput = req.body;
       
        const file:File = await File.create({ name, size, type, description });
        return res.status(201).json(file);
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}

export const getFilesById= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        const file:File|null = await File.findByPk(id)
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
        const files:File[] = await File.findAll();
        return res.status(200).json(files);
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}

export const updateFile= async (req: Request, res: Response) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        const file:File|null = await File.findByPk(id);
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        if(req.file){
            req.body.name = req.file.filename;
            req.body.size = req.file.size;
            req.body.type = path.extname(req.file.originalname);
        }

        file.description=req.body.description||file.description;
        file.name=req.body.name||file.name;
        file.size=req.body.size||file.size;
        file.type=req.body.type||file.type;
        await file.save();
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
        await  fs.promises.unlink(path.join(__dirname, '..','uploads',file.name));
        await file.destroy();
        return res.status(200).json({
            message: "File deleted successfully",
        });
    } catch (error:any) {
        return res.status(500).json({ error: error.message });
    }
}
