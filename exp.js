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

function calculateMul(counter) {
    let ans = 1;
    for(let i=1;i<=counter; i++){
        ans *= i;
    }
    return ans;
}

function handleFirstRequest(req,res) {
    var counter = req.query.counter;
    //console.log(req.headers);
    //console.log(req.body);
    //var counter = req.headers.counter;
    //var counter = req.body.counter;
    var calcSum = calculateSsum(counter);
    var calcMul = calculateMul(counter);

    var objSum = {
        sum: calcSum,
        mul: calcMul
    }
    //var answer = "The sum is " + calcSum;
    res.status(200).send(objSum);
}

function givePage(req, res) {
    res.sendFile(__dirname + "/ind.html");
}

//app.get('/', handleFirstRequest);
//app.get('/handleSum', handleFirstRequest);
app.get('/handleSum', handleFirstRequest);
app.get("/", givePage);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);