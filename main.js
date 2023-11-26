const str = "olo"

const fn = (str) => str.split("").reverse().join("") === str;

console.log(fn(str))



const data = [
    {id: 1, name: "John", age: 25},
    {id: 2, name: "Alice", age: 30},
    {id: 3, name: "Bob", age: 22}
]

console.log(data.sort((per1, per2) => 
    per1.id - per2.id ||
    per1.name.localeCoimpare(per2.name) ||
    per1.age - per2.age))

const arr = [1, 2, 3, 4, 5, 6];

const index3 = arr.indexOf(3);
const index4 = arr.indexOf(4);

arr.splice(index3, 1, 4); 
arr.splice(index4, 1, 3); 

console.log(arr);