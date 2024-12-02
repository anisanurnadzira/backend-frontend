import {Sequelize} from "sequelize";

const db = new Sequelize('ecopari_db', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});

export default db;