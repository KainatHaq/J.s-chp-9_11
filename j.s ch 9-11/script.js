//Q#1
//Take city Name from User input
//var city = prompt ("Enter city Name");

//if(city == "Karachi" || city == "karachi")
//{document.write("Welcome to the city of lights")};

//Q#2
//take Gender as input
/*var Gender = prompt ("Enter Your Gender");

if(Gender == "Male" || Gender == "male")
{document.write("Good Morning Sir.")};

if(Gender == "Female" ||Gender == "female")
{document.write("Good Morning Ma'am.")};*/

//Q##3
//Take color input from traffic signal
/*var color = prompt("Write color of road traffic signal");

var color = prompt("Write color of road traffic signal");

if (color == "RED" || color == "Red" || color == "red") 
{alert("Must Stop");}
else if (color == "YELLOW" || color == "Yellow" || color == "yellow")
{alert("Ready to move");}
 else if (color == "GREEN" || color == "Green" || color == "green")
{alert("Move now.");}
 else {alert("Please enter a right color of road traffic signal.");}*/


//Q#4
//Take input for Remaining fuel in car

// var fuel = prompt ("Enter Your current fuel");

//if(fuel == "0.25Liter" || fuel == ".25liter")
//{alert("Please refill the fuel in your car.");}

//Q# 5.
// check whether alert message would be displayed or not. 
/*var a = 4;
if (++a === 5)
 { alert("given condition for variable a is true"); }
// Displayed  alert var a

var b = 82;
if (b++ === 83) 
{ alert("given condition for variable b is true"); }
//  not displayed alert var b

var c = 12;
if (c++ === 13)
 { alert("condition 1 is true"); }
//  not displayed 

if (c === 13) 
{ alert("condition 2 is true"); }
//    displayed

if (++c < 14)
 { alert("condition 3 is true"); }
// not displayed 

if (c === 14) 
{ alert("condition 4 is true"); }
// displayed

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) { alert("The cost equals"); }
//   displayed 

if (true) { alert("True"); }
//  displayed 

if (false) { alert("False"); }
//  not displayed 

if ("car" < "cat")
   { alert("car is smaller than cat"); }
//  not displayed */

//Q#6
//Mark sheets take percentage and compute grade
/*var subject1 = parseInt(prompt("Enter your marks for Subject 1:"));
var subject2 = parseInt(prompt("Enter your marks for Subject 2:"));
var subject3 = parseInt(prompt("Enter your marks for Subject 3:"));
var totalMarks = parseInt(prompt("Enter your Total Marks"));

var obtainedMArks = subject1 + subject2 + subject3;
var percentage = Math.round((obtainedMArks / totalMarks) * 100);

if (percentage >= 80) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>
       + Marks obtained : ${obtainedMArks} </br>
       + Percecntage : ${percentage}% </br>
       + Grade : A-one + </br>
       + Remarks : Excellent </br>`
    )

}
else if (percentage >= 70) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>
       + Marks obtained : ${obtainedMArks} </br>
       + Percecntage : ${percentage}% </br>
       + Grade : A + </br>
       + Remarks : Good </br>`
    );

}
else if (percentage >= 60) { 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
    document.write(
        `Total marks : ${totalMarks} </br>
       + Marks obtained : ${obtainedMArks} </br>
       + Percecntage : ${percentage}% </br>
       + Grade : B + </br>
       + Remarks : You need to improve </br>`
    );

}
else{(percentage < 60) 
    document.write("<h1>Marks Obtained</h1> </br> </br>");
          document(
        `Total marks : ${totalMarks} </br>
       + Marks obtained : ${obtainedMArks} </br>
       + Percecntage : ${percentage}% </br>
       + Grade : Fail + </br>
       + Remarks : Sorry </br>`
    );
}*/



//Q#7Guss game

//var num = prompt("Enter a secret Number");

//if (num == "6")
//{alert("Bingo!Correct Answer.");}
//else if (num == "7")
//{alert("Close enough to the correct Answer");}
//else {alert("You choose the wrong Number.");}

//Q#8
//Check whether the given number is divisible by 3

/*let number = prompt("Please enter a number:");
number = parseFloat(number);
if (!isNaN(number)) {
  // Check if the number is divisible by 3
  if (number % 3 === 0) {
    alert(number + " is divisible by 3.");
  } else {
    alert(number + " is not divisible by 3.");
  }
} else {
  alert("Please enter a valid number.");
}*/

//Q# 9.  
//checks given input is an even number or an odd number.

/*var number = parseInt(prompt("Please enter a number:"));
var evenNumber = number % 2;
if(evenNumber === 0){
    alert("The number is even.");
}
else{
    alert("The number is odd.");
}*/
//Q#10
//Take Tempreture as input and show message
/*var temperature = parseInt(prompt("Please enter the temperature in degrees Celsius:"));
if(temperature >= 40){
    alert("It is too hot outside.");
}
else if(temperature >=30){
    alert("The Weather today is Normal.");
}
else if(temperature >=20){
    alert("Today’s Weather is cool.");
}
else if(temperature >=10){
    alert("OMG! Today’s weather is so Cool.");
}
else {
    alert("It's quite cold today.");
}*/

//Q#11
//creat calculator
var firstNumber = parseInt(prompt("Enter the first number:"));
var secondNumber = parseInt(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");
var result;
if(operation === '+'){
    result = firstNumber + secondNumber;
}
else if(operation === '-'){
    result = firstNumber - secondNumber;
}
else if(operation === '*'){
    result = firstNumber * secondNumber;
}
else if(operation === '/'){
    result = firstNumber / secondNumber;
}
else if(operation === '%'){
    result = firstNumber % secondNumber;
}
else{
    alert("Invalid!")
}
if (result !== undefined) {
    alert("The result is: " + result);
}