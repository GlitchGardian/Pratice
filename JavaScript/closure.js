// closure means the fuction is return a function and use the parent function data(variable) is called closure. 

function print(){

    var st = "asdad";

    return function retu(){   //returning the function
        console.log(st);
    }

}

var sda = print();
sda();