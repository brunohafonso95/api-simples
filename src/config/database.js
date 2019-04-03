const lowdb = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

// definindo em qual arquivo será feita a persistencia dos dados
const adapter = new FileSync(`${__dirname}/../db/banco.json`);
const db = lowdb(adapter);

// exportando função que inicia o "banco de dados"
module.exports = () => {
  // método serve para definir quais os dados iniciais do arquivo
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
