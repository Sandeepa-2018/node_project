/*
    It will return "Hello" as response.
*/
exports.hello = function (req, res) {
    res.send('Hello');
};

/* 
    It will return "Hello username" as response.
*/
exports.helloWithName = function(req, res)  {
    res.send('Hello ' + req.params.username);
};

/*  
    It will return complete request body as response.
*/
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


