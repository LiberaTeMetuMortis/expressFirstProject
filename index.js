const express = require("express")
const sqlite = require("better-sqlite3")
const app = express()


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
        const db = sqlite("./database.db")
        db.exec(`CREATE TABLE IF NOT EXISTS users (name TEXT, age INTEGER)`)
        db.exec(`INSERT INTO users VALUES ('İsmail', 25)`)
        const row = db.prepare(`SELECT * FROM users WHERE name = 'İsmail'`).get();
        console.log(row.name, row.age);
        res.render('index', { name: row.name, age: row.age });
    }
)
 
app.listen(3000, () => {
    console.log('Server is running on port 3000')
})