const db = require('../../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db('users')
}

function findBy(filter) {
    return db('users').where(filter).orderBy('id');
} 

function findById(id) {
    return db('users').where({ id }).first();
}

async function add(user) {
    const [id] = await db('users').insert(user, 'id');
    return findById(id);
}