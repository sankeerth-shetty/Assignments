//Q1 Write a program to show an alert
// alert("Hello world");


//Q2 What will be the result for these expressions?
// 5 > 4 // true
// "apple" > "pineapple" //false
// "2" > "12" //true
// undefined == null // true
// undefined === null //false
// null == "\n0\n" //false
// null === +"\n0\n" //false


//Q3 Will alert be shown?
// if ("0") {
//     alert( 'Hello');
// }
// yes the alert will be shown


//Q4 What is the code below going to output?
// alert( null || 2 || undefined );

//Q5 The following function returns true if the parameter age is greater than 18. Otherwise it asks for a confirmation and returns its result:
// function checkAge(age) {
//     if (age > 18) {
//         return true;
//     }
//     else {
//         confirm('did parents allow you?');
//     }
// }
// checkAge(20);


//Q6 Replace Function Expressions with arrow functions in the code below:
// let ask = (question,yes,no) => {
//     if(confirm(question)) yes();
//     else no();
// }
// ask("Do you agree?",function(){alert("You agreed");},function(){alert("You canceled the execution");})