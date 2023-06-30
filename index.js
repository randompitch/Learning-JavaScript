const users = [
    { fN: "Megha", lN: "Chauhan", age: 19 },
    { fN: "Richa", lN: "Chauhan", age: 23 },
    { fN: "Taylor", lN: "Swift", age: 33 },
    { fN: "Harry", lN: "Styles", age: 29}  
];

const output = users.filter((x) => x.age<27).map((x) => x.fN)
console.log(output);

const vut = users.reduce(function(acc, curr){
    if(curr.age < 27){
        acc.push(curr.fN);
    }
    return acc;df
}, []);

console.log(vut);