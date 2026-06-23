/* Console Print */
console.log("Printing something...")

/* Variable creation types */
var value /*declaration*/
value = 10 /*initialization*/

var value = 10 /* var can be redeclared and reinitialized */
console.log(value)

let value2 = "String here" /* let cannot be redeclared but can be reinitialized */
value2 = "String There"
console.log(value2)

const num = 89.76 /* const cannot be redeclared as  well as reinitialized */
console.log(num)

/* Conditional Statements */
let number = -1
if((number == 0) || (number > 0)){
    console.log("Positive Number")
}
else{
    console.log("Negative Number")
}

if(!(true)){     /* !true ==> false - automatically goes to else and executes it */
    console.log("Inside If")
}
else{
    console.log("Inside Else")
}

let i   //global variable

/* Loops */    //5th
//       1st   2nd    4th  7th
for(i=1; i<=10; i++){
    console.log(i) //3rd  6trh
}    //i=11

console.log("final value: " + i) //string interpolation

let name = "Better Tomorrow"
console.log(name.toUpperCase())
console.log(name.toLowerCase())

//Function without parameters without return type
function addValues(){  //function definition
    let a = 23
    let b = 32
    console.log(a+b)
} 
addValues(); //function call

//Function without parameters with return type
function multValues(){
    let a = 2
    let b = 32
    return a*b
}
let res = multValues()  //to store the value returning from function
console.log(res)

//Function with parameters without return type
function subValues(a, b){  //function definition
    console.log(a - b)    //a = 10 b =5 
} 
subValues(10, 5);  //passing parameters in function call

//Function with parameters with return type
function divValues(a, b){
    return a / b
}
let divRes = divValues(4,2)
console.log(divRes)

let arr = [111, 222, 333];
console.log("index value of 2 with value: " + arr[2])

let mult_arr = [1, "Name", "9.8"];
console.log(mult_arr[2])

for(let i =0; i<=2; i++){
    console.log(mult_arr[i])
}

