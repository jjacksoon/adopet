const Database = require('sqlite-async');

function execute(db){
   return db.exec(`
    CREATE TABLE IF NOT EXISTS kennels (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      latitude TEXT,
      longitude TEXT,
      name TEXT,
      about TEXT,
      whatsapp TEXT,
      images TEXT,
      instructions TEXT,
      opening_hours TEXT,
      open_on_weekends TEXT
    );
  `)
}

module.exports = Database.open(__dirname + '/database.sqlite').then(execute);