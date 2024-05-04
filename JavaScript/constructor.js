function iam(name){
    this.name = name
    console.log(this.name);
}

const sd = new iam("Abpp");


function makehuman(name,age){
    this.name = name
    this.age = age
}

var human1 = new makehuman("asa",23)
var human2 = new makehuman("asada",21)

console.log(human1);