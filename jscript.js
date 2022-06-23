//learning loops and variables
//3 options to use to create JS, you can use var(depreciated) and let


//  variable  Value
//let userName='Jimmy'

//to define server name const SERVER_NAME="canvas.com/students";

//let userName=prompt("Enter your Name");
/*let emailAdd=prompt("Enter your Email Address");
let monthlySalary=prompt("Enter your monthly salary");
let annualSalary=monthlySalary*12;
console.log(userName)
console.log(`Welcome to the system ${userName}`);
//in class ex: get email, name and salary (monthly), from the prompt and disply the info on the HTML
document.write(
    `Welcome to the system ${userName} your email address is ${emailAdd} and your annual salary is ${annualSalary}`);
*/

//if-Statements
/*if(confirm("Are you "+ userName + "?")){
    console.log("Hello " + userName);
}else{
    console.log("The what do I call you?");
}*/
//----example 2 ---------

/*let number = 98;
if(number == 99);{
    console.log("The number is correct");
}*/

//----example 3 --------

/*let num1 = Number(prompt("Enter a number"));
let num2 = prompt("Enter a second number");
if(num1 < num2){
    console.log("num1 is less than num2");
    document.write("Number 1 is less than number 2");
}*/

//--------Logical Operators
let num1 = Number(prompt("Enter a number"));
let num2 = Number(prompt("Enter a second number"));
let num3 = Number(prompt("Enter a 3rd number"));
let notTrue = false;

if(num1<num2 && num3>num2){
    console.log("num1 is smaller than num2 AND num3 is larger than num2");
}

if(num1 == 1 || num2 == 1 ||  num3== 1){
    console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
}

if(!notTrue){
    console.log("not not true is true!");
}

//------implementing a simple login--------------


