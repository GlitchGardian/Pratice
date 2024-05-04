// Globle -window

console.log(this)

// function - window

function a() {
    console.log(this)
}

a();
// Method - object(return it's parent object)

var gen = {
    func : function () {
        console.log(this)  //also we can do console.log(this.name) 
    },
    name : "Acf",
    age : 23
}

gen.func();

// Function inside method(es5) - window 

var meth = {
    ks : function paren() {

        console.log(this) // it's return object 
        
        function child(){
            console.log(this) // it's return window 
        }

        child(); 

    }
}

meth.ks()

// Function inside method(es6) - object 

var were = {

    func1 : function parent() {

        var df = ()=>{   //arrow function means es6 andd arrow function hamesha this ni value parent pase thi le che to jo aapde parent function ne j arrow function banavi daiye to pachi te aapde ne window return kare karan k pachi to teno parent globle scope ma hoy atle.
            console.log(this)
        }
        df();
    }
} 

were.func1();

// constructor function me this ki value - new blank object

function bd(){
    console.log(this)
} 

var he = new bd();
// event listener main this ki value - that event jis par event lister laga hai

document.querySelector("button")
.addEventListener("click",function(){
    console.log(this);
})


