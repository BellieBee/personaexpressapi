import sqlite from 'sqlite3'

const DBSOURCE = `db_${process.env.NODE_ENV}.sqlite`

let db = new sqlite.Database(DBSOURCE, (err) => {
    if(err) {
        console.log(err.message)
        throw err
    } else {
        console.log('Connected to SQLite')
        db.run(`CREATE TABLE persona (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title text, 
            description text, 
            img text
            )`,
        (err) => {
            if (err) {
                // Table already created
            }else{
                // Table just created, creating some rows
                var insert = 'INSERT INTO persona (title, description, img) VALUES (?,?,?)'
                db.run(insert, ["Gojo Satoru","Shame of you for love me","https://i.postimg.cc/TwzgNmNW/catoru.jpg"])
                db.run(insert, ["Geto Suguru","I would never be happy in a world like this","https://i.postimg.cc/sDPj3Dzq/tumblr-fd6324d2eda5ef8568f24ba8d1f135ed-4bfb012a-400.png"])
                db.run(insert, ["Sukuna Ryomen","What a waste of talent","https://i.postimg.cc/Ssm3rfVC/Fushiguro-Megumi-full-3329775.jpg"])
            }
        });
    }
})

export default db