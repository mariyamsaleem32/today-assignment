//this is question no:1
let Age;
Age = 17;
if (Age > 18){
   console.log(Age, "you are eligible  for vote");
}
else {
   console.log("you are not eligible  for vote");
}

//this is question no:2
let temprature = 27;
if (temprature > 25){
    console.log("It's a hot day!");
}
else {
    console.log("It's a normal day!");
}

//this question no:3
let grade = prompt ("enter your grade");
if (grade >= 60){
   console.log("You passed the test!'");
}
else{
   console.log("You faild the test!'");
}

//this is quetion no:4
let  is_raining = true;
if(is_raining){
   console.log("Remember to bring an umbrella");
}
else{
   console.log("enjoy the sunny weather");
}

//this is question no:5
let age = +prompt ("enter your age");
if (age >= 18){
   alert("You are an adult");
}
else {
    alert("You are a minor");
}

//this is question no:6
let number = +prompt("enter your number");
if (number>0){
   console.log("The number is positive");
}
else if (number<0){
   console.log("The number is negative");
}
else{
   console.log("The number is zero");
}
//logical operators
1.// let score = +prompt("enter your score"); 
// if (score >= 80 && score <= 90){
//     console.log("you are passed");
// }
// else{
//     console.log("you are faild");  
// }

2.let score = +prompt("enter your score"); 
if (score >= 80 || score <= 60){
    console.log("you are passed");
}
else{
    console.log("you are faild");  
}
