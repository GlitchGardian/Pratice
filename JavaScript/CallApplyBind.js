// call

var abc = {name : "sdfs", age : 23}

function hellis() {
    console.log(this);
}

hellis.call(abc) //we can set the value of this by call.


// apply

function wr(a,b) {
    console.log(this,a,b);
}
wr.apply(abc,[334,"fd",3424]); //same as call but it's first para is this and second para is array.


// bind


var sd1 = hellis.bind(abc) //bind is as call but it not execute while calling we have to save and call

sd1();
