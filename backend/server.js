const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const port = 8080;

app.use(cors({ origin: 'http://localhost:4200' }));
app.use(bodyParser.json());

//GET - end point
app.get('/api/tasks', async (req, res) => {
  try {
    console.log('Tentativo di recupero tasks...');
    const [rows] = await db.query('SELECT * FROM tasks');
    console.log('Task recuperate:', rows);
    res.json(rows);
  } catch (error) {
    console.error('Errore GET tasks:', error);
    res.status(500).json({ error: 'Errore nel recupero tasks' });
  }
});

//POST
app.post('/api/tasks', async (req, res) => {
  const {title, description} = req.body
  try{
    const [result] = await db.query(
      'INSERT INTO tasks (title, description, completed) VALUES (?, ?, ?))',
      [title, description, false]
    )

    const newTask = {id = result.insertId, title, description, completed: false};
    res.json(newTask)
  }catch(err){
    console.error('Errore POST task', error)
    res.status(500).json({error: 'Errore creazione task'})
  }
});

// PATCH toggle completato
app.patch('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    // Toggle stato
    await db.query('UPDATE tasks SET completed = NOT completed WHERE id = ?', [id]);
    const [rows] = await db.query('SELECT * FROM tasks WHERE id = ?', [id]);
    res.json(rows[0]);
  } catch (error) {
    console.error('Errore PATCH task', error);
    res.status(500).json({ error: 'Errore toggle task' });
  }
});

// DELETE elimina task
app.delete('/api/tasks/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await db.query('DELETE FROM tasks WHERE id = ?', [id]);
    res.json({ success: true });
  } catch (error) {
    console.error('Errore DELETE task', error);
    res.status(500).json({ error: 'Errore eliminazione task' });
  }
});

async function startServer() {
  try {
    await db.initDatabase();
    console.log('Database MySQL pronto (phpMyAdmin compatibile).');
    console.log(
      `Connessione DB: ${db.config.user}@${db.config.host}:${db.config.port}/${db.config.database}`
    );

    app.listen(port, () => {
      console.log(`Server Express + MySQL su http://localhost:${port}`);
    });
  } catch (error) {
    console.error('Errore inizializzazione database:', error.message);
    process.exit(1);
  }
}

startServer()
