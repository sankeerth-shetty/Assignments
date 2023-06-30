//Q1 Write the code, one line for each action:

//a) Create an empty object user.
// const user = {
// }

//b) Add the property name with the value John.
// const user = {
//     name: 'John'
// }

//c) Add the property surname with the value Smith.
// const user = {
//     name: 'John',
//     surname: 'Smith'
// }

//d) Change the value of the name to Pete.
// const user = {
//     name: 'John',
//     surname: 'Smith'
// }
// user.name = 'Pete';
// console.log(user);

//e) Remove the property name from the object.
// const user = {
//     name: 'John',
//     surname: 'Smith'
// }
// user.name = 'Pete';
// delete user.name;
// console.log(user);



//Q2 Is array copied?
//Yes array is copied
// let fruits = ["Apples", "Pear", "Orange"]; // push a new value into the "copy" let
// shoppingCart = fruits;
// shoppingCart.push("Banana"); // what's in fruits?
// alert(fruits.length); // The answer will display 4, because banana is pushed in fruits. So fruits length is 4.



//Q3 Map to names
// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };
// let users = [ john, pete, mary ];
// let names = users.map(user => user.name);
// alert( names ); // John, Pete, Mary



//Q4 Map to objects
// let john = { name: "John", surname: "Smith", id: 1 };
// let pete = { name: "Pete", surname: "Hunt", id: 2 };
// let mary = { name: "Mary", surname: "Key", id: 3 };
// let users = [ john, pete, mary ];
// let usersMapped = users.map(user => ({
//     fullname: `${user.name} ${user.surname}`,
//     id: user.id
// }))

// // usersMapped = [
// // { fullName: "John Smith", id: 1 },
// // { fullName: "Pete Hunt", id: 2 },
// // { fullName: "Mary Key", id: 3 }
// // ]
// alert( usersMapped[0].id ) // 1
// alert( usersMapped[0].fullname ) // John Smith



//Q5 Sum the properties There is a salaries object with arbitrary number of salaries. Write the function sumSalaries(salaries) that returns the sum of all salaries using Object.values and the for..of loop.If salaries is empty, then the result must be 0.
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};
let sumSalaries = (salaries) => {
    let sums = 0;
    for(let total of Object.values(salaries)){
        sums = sums + total;
    }
    return sums
}
alert( sumSalaries(salaries) ); // 650

