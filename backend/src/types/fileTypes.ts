import { Optional } from "sequelize";
export interface IFileAttributes {
    id:string;
    name: string;
    size: number;
    type: string;
    description: string;
    createdAt?: Date;
    updatedAt?: Date;
}


export interface IFileInput extends Optional<IFileAttributes, 'id' > {}
export interface IFileOuput extends Required<IFileAttributes> {}