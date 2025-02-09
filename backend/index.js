require ('dotenv').config();
const express = require('express');
const {Pool} = require('pg');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

pool.query('SELECT NOW()', (err, res) => {
    if (err) console.error(err);
    else console.log('Connected to PostgreSQL:', res.rows);
});


app.get('/', (req,res) => {
    res.send('API is working');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));