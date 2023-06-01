/*

let , var , const 

""

33

for
if

function 

= assing 
ex let myname = "abedalrheem" 
== compare 
ex (5<10) true or false 


* multiply 
+ plus 
- minus 
/  divide 
% mod
**



*/

// for (let i =0 ; i<=10 ; i++) {

//  if(i%2==0){
//     console.log(i)
//  }

//  else if (i==5){
//    break;
//  }

//  else {
//     console.log("sorry "+i)
//  }

// }

// console.log(2%2)

// --- example one -----

// let theUserName = prompt("please enter your name");

// function OddNumbers(firstNumber, secondNumber) {
//   for (let i = firstNumber; i < secondNumber; i++) {
//     if (i % 2 == 1) {
//       console.log("this is an odd number which is" + i + theUserName);
//     }
//   }
// }

// OddNumbers(200, 220);



// length = last index + 1

// last index = length - 1

prompt("this is function for printing student pass and student fail");
let myStudents = ["ahmad", "ali", "anas", "omar"];
let myStudentsMarks = [60, 48, 33, 88];

function markCalculate(params) {
  for (let i = 0; i < myStudents.length; i++) {
    if (myStudentsMarks[i] >= 50) {
      console.log("conrg"+"  "+ myStudents[i] +" "+"you scored"+" "+ myStudentsMarks[i] +" "+ "and you have passed")
    } else {
      console.log("sorry"+" " + myStudents[i] +" "+ "you scored" +" " +myStudentsMarks[i] +" " +"and you have faild")
    }
  }
  

}



markCalculate();


"sorry ali you scored 33 and you have failed"
"conrg omar you scored 88 and you have passed"