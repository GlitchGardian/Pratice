// higher order function

// it means a function can accept the function as parameter or return a function

// ex1

function abcd() {

}

abcd(function () { });

// ex2

function abc() {
    return function asd() {  //it is like closure but in it does not mendotory to use parent value for returnting in function likke closure

    }
}


// ex3

var a = [12, 1, 32, 32434, 6456, 235, 3];

a.forEach(function (vl) {  //forEach is an higher order function.
    console.log(vl);
})