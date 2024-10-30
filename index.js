const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
app.use(express.json());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'ragnarok_online'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Database connected');
});

app.get('/class_info', (req, res) => {
    const sql = 'SELECT * FROM class_info';
    db.query(sql, (err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

app.get('/class_info/:id', (req, res) => {
    const sql = 'SELECT * FROM class_info WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json(result[0]);
    });
});

app.post('/class_info', (req, res) => {
    const { class_name, primary_weapon, skills, job_level, description } = req.body;
    const sql = 'INSERT INTO class_info (class_name, primary_weapon, skills, job_level, description) VALUES (?, ?, ?, ?, ?)';
    db.query(sql, [class_name, primary_weapon, skills, job_level, description], (err, result) => {
      if (err) throw err;
      res.json({ id: result.insertId, ...req.body });
    });
});

app.put('/class_info/:id', (req, res) => {
    const { class_name, primary_weapon, skills, job_level, description } = req.body;
    const sql = 'UPDATE class_info SET class_name = ?, primary_weapon = ?, skills = ?, job_level = ?, description = ? WHERE id = ?';
    db.query(sql, [class_name, primary_weapon, skills, job_level, description, req.params.id], (err, result) => {
      if (err) throw err;
      res.json({ id: req.params.id, ...req.body });
    });
});

app.delete('/class_info/:id', (req, res) => {
    const sql = 'DELETE FROM class_info WHERE id = ?';
    db.query(sql, [req.params.id], (err, result) => {
      if (err) throw err;
      res.json({ message: 'Class deleted', id: req.params.id });
    });
});

app.get('/class_info/level/:job_level', (req, res) => {
    const sql = 'SELECT * FROM class_info WHERE job_level = ?';
    db.query(sql, [req.params.job_level], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

app.get('/class_info/weapon/:primary_weapon', (req, res) => {
    const sql = 'SELECT * FROM class_info WHERE primary_weapon = ?';
    db.query(sql, [req.params.primary_weapon], (err, results) => {
      if (err) throw err;
      res.json(results);
    });
});

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000');
});