import { Sequelize } from "sequelize";

const db = new Sequelize('biak-tourism', 'root', '',{
    host: "localhost",
    dialect: "mysql"
});

export default db;