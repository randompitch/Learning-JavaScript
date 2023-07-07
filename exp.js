const express = require('express')
var bodyParser = require('body-parser')
const app = express()
const port = 3000

/*
let noOfReq = 0;
function middleware1(req, res, next) {
    noOfReq += 1; 
    //console.log("from Middlware" + req.headers.counter);
    console.log(noOfReq);
    next();
}
*/

//app.use(middleware1);
app.use(bodyParser.json());

function calculateSsum(counter) {
    let sum = 0;
    for(let i=0;i<=counter; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req,res) {
    //var counter = req.query.counter;
    //console.log(req.headers);
    console.log(req.body);
    //var counter = req.headers.counter;
    var counter = req.body.counter;
    var calcSum = calculateSsum(counter);
    var answer = "The sum is " + calcSum;
    res.send(answer);
}

//app.get('/', handleFirstRequest);
//app.get('/handleSum', handleFirstRequest);
app.post('/handleSum', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);