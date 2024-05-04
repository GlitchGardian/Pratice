// aapde object ma method banaviye to pachi badha nava banavela object(client1,2) ma te aave and memory optomization reduced thy to pachi aapde tene prototype ma banaviye jethi te shared rite vapray 
// Syntax : funcname.prototype.variablename = value,function anything we want.


function marketing(name, email) {
    this.name = name
    this.email = email
}

marketing.prototype.print = function () {  //this is called prototypal inheritence
    console.log(this.name)
    console.log(this.email);
}

const client1 = new marketing("sada", "sfd@sdgv.com")
const client2 = new marketing("saegfs", "sfdsdff@saergav.com")

console.log(client1.print())