// config/knex.config.js
module.exports = {
  client: "mysql",
  connection: {
    host: "localhost",       // Replace with the actual MySQL host
    user: "app_user",        // Replace with the actual MySQL username
    password: "app_password", // Replace with the actual MySQL password
    database: "my_whatsapp_chat_db", // Replace with the actual MySQL database name
  },
  migrations: {
    tableName: "knex_migrations",
    directory: __dirname + "/../src/database/migrations",
  },
};
