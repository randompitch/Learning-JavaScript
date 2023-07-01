function mapFilRed(){
    const users = [
        { fN: "Megha", lN: "Chauhan", age: 19 },
        { fN: "Richa", lN: "Chauhan", age: 23 },
        { fN: "Taylor", lN: "Swift", age: 33 },
        { fN: "Harry", lN: "Styles", age: 29}  
    ];
    
    alert("Open Console");
    console.log("This shows the working of map(), filter() and reduce()");
    console.log("Print the names of users who are less than 27 years of age: (using Filter and Map)");
    
    const output = users.filter((x) => x.age<27).map((x) => x.fN)
    console.log(output);
    
    const vut = users.reduce(function(acc, curr){
        if(curr.age < 27){
            acc.push(curr.fN);
        }
        return acc;df
    }, []);
    
    console.log("Print the names of users who are less than 27 years of age: (using only Reduce)");
    console.log(vut);
}
let mySW;
function counter(){
    alert("Open Console");
    let timer = 0;
    function sWatcho(){
        timer++;
        //console.clear();
        console.log(timer);
    }
    mySW = setInterval(sWatcho,1000);
}
function stopCounter(){
    clearInterval(mySW);
    console.log("Terminating counter");
}
