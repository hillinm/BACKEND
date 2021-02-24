const router = require("express").Router();

const Items = require('./items-model.js');

router.get('/', (req, res) => {
    Items.find()
    .then(items => {
        res.json(items);
    })
    .catch(err => res.send({message: err}));
});

module.exports = router;