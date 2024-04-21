import { Sequelize } from "sequelize";

const BD = new Sequelize('citasbd', 'root', '5493kgte52', {
    host:'localhost',
    dialect: 'mysql',
    port: 3307
});

export default BD;