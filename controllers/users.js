/* should echo "Hello" */
exports.hello = function (req, res) {
    res.send('Hello');
};

/* should echo "Hello {username}" */
exports.helloWithName = function(req, res)  {
    res.send('Hello ' + req.params.username);
};

/* should echo POST-Body */
exports.postResponse = function(req, res)  {
    if (req.body) {
        res.send({
            'status': 200,
            'data': req.body
        })
    }
    else {
        res.send({
            'status': 400,
            'message': 'Wrong data'
        })
    }
};


