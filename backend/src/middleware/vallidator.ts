import Joi,{ObjectSchema,ValidationError} from "joi";
import { Request,Response,NextFunction } from "express";
import {  IFileInput } from "../types/fileTypes";

export function ValidateSchema(schema:ObjectSchema){
    return async(req:Request,res:Response,next:NextFunction)=>{
        try {
            await schema.validateAsync(req.body);
            next();
        } catch (error:any) {
            return  res.status(400).json({message:error.details[0].message})
        }
    }
}

export const Schema={
    create:Joi.object<IFileInput>({
        name:Joi.string().required(),
        size:Joi.number().required(),
        type:Joi.string().required(),
        description:Joi.string().required()
    })
    
}