'use strict'
import db from '../config/database'

class PersonasController {
    static index(req, res){
        var sql = "select * from persona"
        db.all(sql, (err, personas) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json(personas)
          });
    }

    static store(req, res){
        const { title, description, img } = req.body
        const SQL = 'INSERT INTO persona (title, description, img) VALUES (?,?,?)'
        const params = [title, description, img]        
        db.run(SQL, params, function (err) {
            if (err){
                res.status(500).json({'error': err.message})
                return;
            }
            req.body.id = this.lastID
            res.json({
                'persona': req.body
            })
        })
    }

    static details(req, res){
        var sql = "select * from persona where id = ?"
        
        db.get(sql, req.params.id, (err, persona) => {
            if (err) {
              res.status(500).json({'error': err.message});
              return;
            }
            res.json({
                persona
            })
        });
    }
}

export default PersonasController
