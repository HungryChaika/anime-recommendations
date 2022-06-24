const { Client } = require("pg");

const config = {
    user: process.env.TO_CREATE_DB_USER,
    host: process.env.TO_CREATE_DB_HOST,
    database: process.env.TO_CREATE_DB_DATABASE,
    password: process.env.TO_CREATE_DB_PASSWORD,
    port: Number(process.env.TO_CREATE_DB_PORT)
};

const db_name_to_create = process.env.DB_TO_BE_CREATED;

const createDB = async () => {
    const client = new Client(config);
    try {
        await client.connect();
    } catch (e) {
        console.log(e);
    };
    await client.query('CREATE DATABASE ' + db_name_to_create);
    client.end();
}

module.exports = createDB;
