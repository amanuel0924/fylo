import { Model,DataTypes } from "sequelize";
import { db } from "../config/dbConfig";
import { IFileAttributes, IFileInput, IFileOuput } from "../types/fileTypes";



export class File extends Model<IFileOuput, IFileInput> implements IFileAttributes {
    public id!:string
    public name!: string
    public type!: string
    public description!: string
    public size!: number
    public readonly createdAt!: Date;
    public readonly updatedAt!: Date;

  }

File.init(
    {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            allowNull: false,
            defaultValue: DataTypes.UUIDV4
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        size: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        type: {
            type: DataTypes.STRING,
            allowNull: false
        },
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        createdAt: "",
        updatedAt: ""
    }, {
    sequelize: db,
    modelName: 'File',
    tableName: 'files',
    timestamps: true,
    
});