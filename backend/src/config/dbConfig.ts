import dotenv from 'dotenv';
dotenv.config();
import { Sequelize } from 'sequelize-typescript';


export const db= new Sequelize(`${process.env.DB_NAME}`,`${process.env.DB_USER}`,`${process.env.DB_PASS}`,{
  host: `${process.env.DB_HOST}`,
  dialect: 'mysql',
  logging: false,
});



export async function DBconnection() {
  try {
   
    await db.authenticate();
    console.log('Connection has been established successfully.');
    await db.sync();
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}