const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(`${__dirname}/../db/banco.json`);
const db = lowdb(adapter);

module.exports = () => {
  db.defaults(
      {
          users: [
              {
                  id: 1,
                  name: "John Doe",
                  age: 25,
                  genre: "male"
              }
            ]
      }
  ).write();

  return db;
};
