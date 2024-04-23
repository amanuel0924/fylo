import { Sequelize } from 'sequelize-typescript';

const connection = new Sequelize({
    database: process.env.DBNAME ,
    dialect: 'mysql', 
    username: process.env.USER,
    password: process.env.PASSWORD,
    host: process.env.HOST,
    models: [__dirname + '/../models'],
  });

 export default connection;

