module.exports = {
  //DBMS
  client: "sqlite3",
  //location of db file
  connection: {
    filename: "./data/car-dealer.db3",
  },
  //SQLite specific flag
  useNullAsDefault: true,
};
