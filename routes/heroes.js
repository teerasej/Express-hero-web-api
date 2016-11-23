var express = require('express');
var router = express.Router();


/* GET users listing. */
router.get('/', function (req, res, next) {

    var collection = req.db.get('heroes');

    collection.find({}, function (e, documents) {
        res.json(documents);
    });

});

// _id
router.get('/:id', function (req, res, next) {

    req.db.get('heroes').find({ _id: req.params.id }, function (e, documents) {
        res.json(documents);
    })

})

router.get('/search/:keyword', function (req, res, next) {

    var keyword = req.params.keyword;
    var collection = req.db.get('heroes');
    // LIKE '%' + keyword + '%'
    collection.find({
        "name": {
            $regex: ".*" + keyword + ".*"
        }
    },
    function (e, documents) {
        res.json(documents);
    })
})

router.post('/create', function (req, res, next) {

    var collection = req.db.get('heroes');

    collection.insert(
        {
            name: req.body.name,
            realName: req.body.realName
        }
        , function (e, documents) {

            res.json(documents);

        });
});

router.delete('/:id', function (req, res, next) {
    var collection = req.db.get('heroes');

    collection.remove(
        {
            _id: req.params.id
        }
        , function (e, documents) {

            res.json(documents);

        });
})

// router.post('/create', jsonParser, function(req, res, next) {

//     console.log(JSON.stringify(req.body));

//     res.json({
//         name: req.body.name,
//         description: req.body.description
//     });

// });

module.exports = router;
