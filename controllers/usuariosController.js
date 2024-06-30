const db = require('../config/db')


exports.getUsuarios = (req,res) => {
    db.query('SELECT * FROM usuarios', (error,resultado) =>{
        if (error){
            res.status(500).json({error:error});
            return;
        }
        res.json(resultado);
    });
}

exports.getUsuario = async (req,res)=>{
    const {id} = req.params;
    const query = 'select * from usuarios where id = ?';
    try {
        const [result] = await db.promise().query(query,[id]);
        res.json(result[0]);
    } catch (error) {
        res.status(500).json({error:error});
    }
}

exports.createUsuario = async (req,res)=>{
    const {nombre,email} = req.body;
    const query = 'INSERT INTO usuarios (nombre, email) VALUES (?,?)';
    const VALUES = [nombre,email];
    try {
        const [result] = await db.promise().query(query,VALUES);
        res.json({ id: result.insertId, nombre, email })
    } catch (error) {
        res.status(500).json({error:error});
    }
}

exports.updateUsuario = async (req,res)=>{
    const {id} = req.params;
    const {nombre,email} = req.body;
    const query = 'update usuarios SET nombre = ?, email = ? where id = ?;'
    const VALUES = [nombre,email,id];
    try {
        await db.promise().query(query,VALUES);
        res.json({id,nombre,email})
    } catch (error) {
        res.status(500).json({error:error});
    }
}

exports.deleteUsuario =  async (req, res)=>{
    const {id} = req.params;
    const query =' DELETE FROM usuarios WHERE id = ?';
    VALUES = [id];
    try {
        await db.promise().query(query,VALUES);
        res.json({message:'Usuario eliminado de la NBase de Datos correctamente'});
    } catch (error) {
        res.status(500).json({error:error});
    }
}