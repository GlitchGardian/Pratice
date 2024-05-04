// This is called hoisting we can access variable and function before that declaration. 
// basically the function and variable are go at the top while the exe phase it is called hoisting. 
// hoisting is only possible in the var not in let,const.


console.log(s);  
var s=12;
  

a();

function a() {
    console.log("hello here is hoisting");
}