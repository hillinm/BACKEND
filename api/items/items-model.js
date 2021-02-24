const db = require('../../database/dbConfig.js');

module.exports = {
    add,
    find,
    findBy,
    findById,
}

function find() {
    return db('items')
}

function findBy(filter) {
    return db('items').where(filter).orderBy('id');
} 

function findById(id) {
    return db('items').where({ id }).first();
}

async function add(item) {
    const [id] = await db('items').insert(item, 'id');
    return findById(id);
}