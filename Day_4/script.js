// let arr = ["Rahul", "21"];

// for(let i=0; i<=1; i++){
//     console.log(arr[i])
// }

//Object

let obj = {
    name:"ravi",
    age:21
};

console.log(obj.name);  //object_name.key_name
console.log(obj.age);

//Grade Task 

//JSON Topic
const user = { 
    name: "Alice", 
    age: 25 };

// Convert object → JSON string
const jsonData = JSON.stringify(user);
console.log(jsonData);

// Convert JSON string → object
const parsedData = JSON.parse(jsonData);
console.log(parsedData.name);  // Alice

//Arrow Function

let add = (a, b) => {
    console.log(a+b)
}

add(3,7)