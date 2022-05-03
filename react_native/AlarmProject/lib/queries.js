const createTableQuery =
  'CREATE TABLE IF NOT EXISTS alarms (id INTEGER PRIMARY KEY AUTOINCREMENT, status INT, notificationIN DATETIME, radio INT);';

const insertQuery =
  'INSERT INTO alarms (status, notificationIN, radio) VALUES (?, ?, ? )';

const selectQuery = 'SELECT * FROM alarms ORDER BY id DESC';

const deleteQuery = 'DELETE FROM alarms WHERE id = ?';

export {createTableQuery, insertQuery, selectQuery, deleteQuery};