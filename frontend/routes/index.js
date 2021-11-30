var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',(req, res) => {
    // req.session.destroy()
    return res.redirect('/veiculos')
});

// http://localhost:3000/


module.exports = router;
