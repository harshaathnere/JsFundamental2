//Create Some array
// const numbers = [45,56,67,6,9];
// const numbers2 = new Array(45,67,54,765);
// const fruit = ['apple','orange' , 'grapes'];
// const mixed = ['22','apple','grapes',null, undefined, {a:1,b:2}, new Date()];
// console.log(mixed);
// console.log(numbers)
// // get array length
// let val ;
// val = numbers.length;
// // check if it is array
// val = Array.isArray(numbers);
// // get single value
// val = numbers[3];
// // insert into array
// numbers[2] = 100;
// val = numbers.indexOf(6);
// // // Mutating array
// // // add on to end
// numbers.push(250);
// // add on to front
// numbers.unshift(45);
// // Take from the end
// numbers.pop()
// // Take of from the front
// numbers.shift();
// //splice values
// numbers.splice(1,3);
// // Reverse
// numbers.reverse();
//concatenate array
// val = numbers.concat(numbers2);
// // Sorting array
// val = fruit.sort();
// // val = numbers.sort();
// // // use the compare function
// // val = numbers.sort(function(x,y){
//     return x-y
// })

// val = numbers.sort(function(x,y){
//     return y-x
// })
// console.log(val);
//find
// function under50(num){
//     return num < 50;
// } 
// // val = numbers.find(under50);
// function over50(num){
//     return num > 50;
// } 
// val = numbers.find(over50);
// console.log(val);
// Object literals
// const person = {
//     firstName: 'Harsha',
//     lastName: 'Athnere',
//     age: 22,
//     email: 'harshaathnere@gmail.com',
//     hobbies: ['music','dance'],
//     add: {
//         city: 'bhopal',
//         state: 'mp'
//     },
//      getBirthYear: function(){
//           return 2019- this.age;
//      }
// }
// let val; 
// val = person;
// console.log(val); 
// Get specific value
// val = person.firstName;
// val = person['lastName'];
// val = person.age;
// val = person.hobbies;
// val = person.hobbies[0];
// val = person.add.state;
// val = person.add['city']
// val = person.getBirthYear();
// console.log(val); 
// const person =[
//     {name: 'harsha', age: 22 },
    
//         { name : 'reena' , age: 19 },
//         { name : 'purva' , age: 14 }
// ];
// for( let i=0; i< person.length; i++){
//  console.log(person[i].name);
// }
let val;
 const today = new Date();
 let birthday = new Date('1-03-2019 11:25:00');
  birthday = new Date('march 10 2019');
   birthday = new Date('1/03/2019');
 val = today.getMonth();
 val = today.getDate();
 val = today.getDay();
 val = today.getFullYear();
 val = today.getHours();
 val = today.getMinutes();
 val = today.getSeconds();
 val = today.getMilliseconds();
 val = today.getTime();
 birthday.setMonth(2);
 birthday.setDate(12);
 birthday.setFullYear(1999);
 birthday.setHours(3);
 birthday.setMinutes(30);
 birthday.setSeconds(45);
 console.log(birthday);

 