
function devide(a,b){
    try {
        if(b == 0){
            throw Error("Devide by 0");
        }
        else{
            console.log(a/b);
        }
    } catch (error) {
        console.log(error);
    }
}

devide(34,0)