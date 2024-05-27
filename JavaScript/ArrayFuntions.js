// ****************************************************Push,pop,shift,unshift,splice,slice************************************************

var arr = [1,2,3,4,5]

arr.push(6,7,8) //add elements to last index

arr.pop() // remove last element

arr.shift() //remove element from first index

arr.unshift(-1,0) // add element to starting of array 

console.log(arr);


// arr.splice(start , count ,Elements(Optional))

var arra = [1,2,3,4,5,6,78,9]

arra.splice(2,4) //start from index 2 and 4 elements removed 

// also if we like to add any element inbeetween we use this with arra.splice(indexformwewanttoaddelement,0,elements)  
// example

arra.splice(2,0,456,56,456,645)

console.log(arra);

var ar = [1,2,3,4,5,6,7,8,9,10]

var slicedArray = ar.slice(2,5)  // from index 2 to 4 bacause 5 is not included new array generated

console.log(slicedArray);




// ***************************************************Flat Array Method*******************************************************************

var arr1 = [23,235,3655,[43534,345,3,36546,345,54],2343,[56456,3423,456]]

flatarr = arr1.flat() // if we have nested arrays it simply convert the nested array into the single array
console.log(flatarr);  


// Limitation : it only flatten array to max 1 nested array

const nestedArray = [1, 2, [3, 4], [5, [6, [7]]]];
const flattenedArray = nestedArray.flat();

console.log(flattenedArray);