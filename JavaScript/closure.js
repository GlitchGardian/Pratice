function print(){

    var st = "asdad";

    return function retu(){   //returning the function
        console.log(st);
    }

}

var sda = print();
sda();