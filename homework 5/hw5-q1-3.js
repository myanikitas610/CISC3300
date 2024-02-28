//question 1
var age = 20;
var status = (age >= 18) ? "Adult" : "Child";
console.log(status)
console.log("\n")

//question 2
var myself = {
    name: "Mya",
    myAge: 20,
    major: "Computer Science"

};

for(var property in myself){
    console.log(myself[property])
}
console.log("\n")

//question 3
var numbers = [1, 2, 3, 4]
var numbersSquared = numbers.map(num => num * num);
console.log(numbersSquared);
