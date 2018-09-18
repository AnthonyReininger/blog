var express = require('express');
var router = express.Router();

let posts = require('../models/data');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'My Blog', content: 'posts', posts });
});

router.get('/:id', function(req, res, next) {
    let post = null
    for(let p of posts){
        if(p.id == req.params.id){
            post = p;
            break;
        }
    }
  res.render('layout', { title: 'My Blog', content: 'archive-posts', post });
});


module.exports = router;