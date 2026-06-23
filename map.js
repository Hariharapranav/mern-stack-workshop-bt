const skills = ["Html", "Css", "JavaScript"]
//Print Array Elements using Loop

// for(let i=0; i<=2; i++){
//     console.log(skills[i])
// }
 
//Print Array Elements using Map //Print Array and its Index
// skills.map((skillPrint)=>{console.log(skillPrint)})
skills.map((i, index) => {
  console.log("index is: " +index + " Value is: " +i);
})

//Hiker Example for Map
const hiker_oxygen = [98.4, 76.3, 99.8]

let current_oxygen = hiker_oxygen.map((level)=>{
    return level / 2
})

console.log(current_oxygen);

//Convert to Uppercase
skills.map((up)=>{console.log(up.toUpperCase())})
//React Connection
