const { Client } = require('pg'); 

class DB {
    constructor() {
        const client = new Client({ 
            user: 'postgres', 
            host: 'localhost', 
            database: 'test_tb',//'anime_recommendations', 
            password: 'postgres', 
            port: 5432, 
        }); 
        client.connect(); 
    }



};

module.exports = DB;