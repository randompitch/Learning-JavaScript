const express = require('express')
const app = express()
const port = 3000

function calculateSsum(counter) {
    let sum = 0;
    for(let i=0;i<=counter; i++){
        sum += i;
    }
    return sum;
}

function handleFirstRequest(req,res) {
    var counter = req.query.counter;
    var calcSum = calculateSsum(counter);
    var answer = "The sum is " + calcSum;
    res.send(answer);
}

app.get('/', handleFirstRequest);
app.get('/handleSum', handleFirstRequest);

function started() {
    console.log(`Example app listening on port ${port}`);
}

app.listen(port, started);