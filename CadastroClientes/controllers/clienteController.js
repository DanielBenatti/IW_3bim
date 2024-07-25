const db = require('../db');

exports.list = (req, res) => {
    let sql = 'SELECT * FROM clientes';
    db.query(sql, (err, clientes) => {
        if (err) throw err;
        res.render('index', { clientes });
    });
};

exports.formAdd = (req, res) => {
    res.render('add');
};

exports.add = (req, res) => {
    let { nome, email, telefone } = req.body;
    let sql = `INSERT INTO clientes (nome, email, telefone) VALUES (?, ?, ?)`;
    db.query(sql, [nome, email, telefone], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.formEdit = (req, res) => {
    let id = req.params.id;
    let sql = `SELECT * FROM clientes WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.render('edit', { clientes: result[0] });
    });
};

exports.edit = (req, res) => {
    let id = req.params.id;
    let { nome, email, telefone } = req.body;
    let sql = `UPDATE clientes SET nome = ?, email = ?, telefone = ? WHERE id = ?`;
    db.query(sql, [nome, email, telefone, id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
};

exports.delete = (req, res) => {
    let id = req.params.id;
    let sql = `DELETE FROM clientes WHERE id = ?`;
    db.query(sql, [id], (err, result) => {
        if (err) throw err;
        res.redirect('/');
    });
};
