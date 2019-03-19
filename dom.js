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
// let val;
//  const today = new Date();
//  let birthday = new Date('1-03-2019 11:25:00');
//   birthday = new Date('march 10 2019');
//    birthday = new Date('1/03/2019');
//  val = today.getMonth();
//  val = today.getDate();
//  val = today.getDay();
//  val = today.getFullYear();
//  val = today.getHours();
//  val = today.getMinutes();
//  val = today.getSeconds();
//  val = today.getMilliseconds();
//  val = today.getTime();
//  birthday.setMonth(2);
//  birthday.setDate(12);
//  birthday.setFullYear(1999);
//  birthday.setHours(3);
//  birthday.setMinutes(30);
//  birthday.setSeconds(45);
//  console.log(birthday);

 const id = 100;
 // equal to
//  if(id == 101)
//  {
//      console.log('correct');
//  }
//  else{
//      console.log('incorrect');
//  }
//  // not equal to
//  if(id != 101)
//  {
//      console.log('correct');
//  }
//  else{
//      console.log('incorrect');
//  }

//  // equal to value and type
//  if(id === 100)
//  {
//      console.log('correct');
//  }
//  else{
//      console.log('incorrect');
//  }
 // equal to value and type
//  if(id !== 100)
//  {
//      console.log('correct');
//  }
//  else{
//      console.log('incorrect');
//  } 
// Test if undefined
// if(typeof id !== 'undefined'){
//     console.log(`The id is ${id}`);
// }
// else{
//     console.log('no id');
// }
//Greater or less than
// if(id >= 100)
//   {
//       console.log('correct');
//   }
//  else {
//            console.log('incorrect');
//   }
// if else 
//  const color = 'yellow';
// //   if(color === 'red'){
//       console.log('color is red');
//   } 
//   else if(color === 'blue'){
//       console.log('color is blue');
//   }
//   else {
//       console.log('color is not red or blue');
//   }
//LOGICAL OPERATORS
//  const name = 'Harsha';
//  const age = 22;
//  // AND &&
//  if(age>0 && age<12){
//      console.log(`${name} is a child`);
//  }
//  else if(age>= 12 && age<= 19){
//      console.log(`${name} is a teenager`);
//  }
//  else{
//      console.log(`${name} is an adult`);
//  }
//  // OR
// if(age<16 || age>65){
//     console.log(`${name} can not run in a race` );
// }
// else{
//     console.log(`${name} is registered for the race`)
// }
// // ternary operator
// console.log(id ===100 ? 'correct' : 'incorrect')
//  // Without Braces
//  if(id === 100)
//      console.log('correct');
//  else
//   console.log('incorrect');
   // Switch
  //  const  color = 'red';
  //  switch(color){
  //      case 'red':
  //      console.log('color is red');
  //      break;
  //      case 'blue':
  //      console.log('color is blue');
  //      break;
  //      default :
  //      console.log('color is not red or blue');
  //      break;

  //  }
  //  let day;
  //  switch(new Date().getDay()){
      
  //   case 0:
  //      day = 'Sunaday';
//        break;
//      case 1:
//        day = 'Monday';
//        break;
//      case 2:
//        day = 'Tuesday';
//        break;
//      case 3:
//        day = 'wednesday';
//        break;
//      case 4:
//        day = 'Thrusday';
//        break;
//      case 5:
//        day = 'Friday';
//        break;
//      case 6:
//        day = 'Saturday';
//        break;
//    }
//    console.log(`Today is ${day}`);
//    // FUNCTION DECLARATIONS
//  function greet(firstName = 'harsha', lastName = 'Athnere'){
//     //  if(typeof firstName === 'undefined'){firstName = 'harsha'};
//     //  if(typeof lastName === 'undefined'){lastName = 'Athnere'};

     //console.log('hello');
    //  return 'hello ' + firstName + ' ' + lastName;
//  }
// console.log(greet());
// function expressions
// const square = function(x =3){
//  return x*x;
// };
// console.log(square());
//Immdiatley invokable function expression - iifes
// (function(name){
//     console.log('Hello' + name);
// })('Harsha');
// Property Method
//  const todo = {
//      add: function(){
//          console.log('Add too...');
//      },
//      edit: function(id){
//          console.log(`edit todo ${id}`)
//      }
//  }
//   todo.delete = function(){
//       console.log('Delete todo...');
//   }
//  todo.add();
//  todo.edit(22);
//  todo.delete();

//  // for loop
//  for(let i= 0; i<= 10; i++){
//      //console.log( 'Number' +i);
//      if(i==2){
//          console.log(' 2 is my favorite no');
//          continue;
//      }
//      if( i==5){
//          console.log('Stop the loop');
//          break;
//      }
// console.log( 'Number' +i);
//  }
// WHILE LOOP
// let i=0;
// while( i<10){
//  console.log('Number' + i);
//  i++;
// }
// do while loop 
// let i= 100;
// do {
//     console.log('Number' + i);
//     i++;
// }
// while(i<10);
// loop through array
//  const cars = ['ford','chevy', 'honda' ,'toyota']
// // for( let i=0 ; i< cars.length; i++){
//     console.log(cars[i]);
// }
// FOREACH
// cars.forEach(function(car , index, array){
//     console.log(`${index} : ${car}`);
//     console.log(array);
// });
// // Map
// const users = [
//     { id: 1 , name: 'harsha'},
//     { id: 2 , name: 'Reena'},
//     { id: 2 , name: 'Reena'}

// ];
// const ids = users.map(function(user){
//  return user.id;
// });
// console.log(ids);

//FOR IN LOOP
//  const user = {
//      firstName : 'harsha',
//      lastName: 'Athnere',
//      age: 22
//  }
//  for(let x in user){
//      console.log(`${x} : ${user[x]}`);
//  }
window.console.log(123);
// Alert
// window.alert(123);
//promt
// const input = prompt()
// alert(input);

// // confirm
// if(confirm('Are you sure')){
// console.log('Yes');
// }
// else 
// { console.log('no')};
let val;
// outter height and width
val = window.outerHeight;
val = window.outerWidth;

// inner height and width
val = window.innerHeight;
val = window.innerWidth;
// scroll points
val = window.scrollY;
val = window.scrollX;
// LOCATION OBJECT
val = window.location;
val = window.location.hostname;
val = window.location.port;
val = window.location.href;
val = window.location.search;

//Redirect
// window.location.href = 'http://google.com';
// Reload
// window.location.reload();
// histroy object
//window.history.go(-1);
//val = window.history.length;
// Navigator Object


// val = window.navigator;
// val = window.navigator.appName;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.platform;
// val = window.navigator.vendor;
// val = window.navigator.language;

// console.log(val);

//Global Scope
var a = 1;
let b = 2;
const c = 3;
// function test(){
//   var a = 1;
// let b = 2;
// const c = 3;
// console.log('function Scope' , a, b, c);
// }
// test();
// if(true){
//   // block scope
//   var a = 4;
// let b = 5;
// const c = 6;
// console.log('if Scope' , a, b, c);
// }
for(let a=0; a<10 ; a++){
  console.log(`loop: ${a}`);
}

console.log('Global Scope' , a, b, c);