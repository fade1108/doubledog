const express = require('express');
const pool = require('../pool.js');
var router = express.Router();

router.get("/v1/back_index",function (req,res) {
    var sql = "select * from dg_user";
    pool.query(sql, function (err, result) {
        if (err) throw err;
        res.send(result);
    })
});





module.exports = router;
