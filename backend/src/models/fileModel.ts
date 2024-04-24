import { Model,DataType } from "sequelize-typescript";
import { db } from "../config/dbConfig";
import { IFileAttributes } from "../types/fileTypes";



export class File extends Model<IFileAttributes>  {}

File.init({
    id: {
        type: DataType.UUIDV4,
        primaryKey: true,
        allowNull: false,
    },
    name: {
        type: DataType.STRING,
        allowNull: false,
    },
    size: {
        type: DataType.INTEGER,
        allowNull: false,
    },
    type: {
        type: DataType.STRING,
        allowNull: false,
    },
    description: {
        type: DataType.STRING,
        allowNull: false,
    },
}, {
    sequelize: db,
    tableName: 'files',
    timestamps: true,
});