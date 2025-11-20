/*var arr= new Array(10, 20, 30, 40, 50);

for (i = 0; i < 5; i++){
    document.write(arr[i] + "<br/>");
}*/

/*var arr = new Array(7, 2, 8, 1, 3, 4);
var i, j, temp;

document.write("<br/> <br/>Before sort...<br/>");
for (i = 0; i < 6; i++){
     document.write(arr[i] + "<br/>");
}

for (i = 0; i < 6; i++){
    for (j = 0; j < 5; j++){
        if (arr[j] > arr[j + 1]){
            temp = arr[j];
            arr[j] = arr[j + 1];
            arr[j + 1] = temp;
        }
    }
}

document.write("<br/> <br/>After sort...<br/>");
for (i = 0; i < 6; i++){
     document.write(arr[i] + "<br/>");
}*/

/*var marks1 = parseInt(prompt("Enter marks1", "Enter"));
var marks2 = parseInt(prompt("Enter Marks2", "Enter"));
var marks3 = parseInt(prompt("Enter Marks3", "Enter"));

var total = marks1 + marks2 + marks3;
var percent = total * 100 / 150;
alert(percent);
if (percent >= 80){
    alert("Grade A, congratulations");
}
else if (percent >= 60){
    alert("Grade B, good job");
}

else if(percent >= 40){
    alert("Grade C, pass.")
}

else(
    alert("Grade D, try again.")
)

/*document.writeln(percent[i] + "<br/>")*/


/*var x;
var sum = 0;
var num = parseInt(prompt("Enter a number", "Enter...."))
for (x = 1; x <= num; x++)
    {
        if (x % 2 == 0)
        {
                sum = sum + x;
        }
    }
            /*document.writeln("The value of x = " + x + "<br/>");*/
    /*document.writeln("Total: " + sum);*/
   
/*var x;
var product = 1;
var num = parseInt(prompt("Enter a number", "Enter...."))
for (x = 1; x <= num; x++)
    {
        product = product * x;
    }
         /*document.writeln("The value of x = " + x + "<br/>");*/
    /*document.writeln("The factorial is: " + product); */
   
/*var num = parseInt(prompt("Enter a number", "Enter..."))
var count = 0;
while (num > 0)
    {
    num = Math.trunc(num / 10);
    count++;
    }
    document.writeln("Digits : " + count);*/

/* Do while loop
var actualPin = "3456";
var pin;
var count = 0;
do {
    pin = prompt("Enter your pin", "Enter");
    count++;
} while(pin != actualPin && count < 3);
if (pin == actualPin){
    document.writeln("Welcome User.");
}
else{
    document.writeln("Account is locked!");
}*/

/*var m;
for (m = 1; m <= 10; m++)
{
    if (m == 5 || m == 7)
        continue;
    document.writeln("m = " + m + "<br/>");
}

var ch = prompt("Enter a character", "Enter");
switch (ch)
{
    case 'a':
        document.writeln("A is a vowel");
        break;
    case 'e':
        document.writeln("E is a vowel");
        break;
    case 'i':
        document.writeln("I is a vowel");
        break;
    case 'o':
        document.writeln("O is a vowel");
        break;
    case 'u':
        document.writeln("U is a vowel");
        break;
    default:
        document.writeln(ch + " is a consonant / special character.")
        break;

}*/
/*var num = 10;
var result = num++;
document.writeln(result);*/

/*var uid = prompt("Enter user id", "User Id");
var pwd = prompt("Enter Password", "Password");

var message = (uid == "John" && pwd == "1234") ? "Welcome" : "Invalid User Id or password"
alert(message);*/

function sayHello(name, age)
{
    if (name == "" || age == "")
        return;
    document.writeln(name + " is " + age + " years old.");
}

function mouseOver(){
    document.images["img1"].src = "Assets/close-up-street-food-neon-light.jpg"
}

function mouseOut(){
    document.images["img1"].src = "Assets/images/Stir Fry Spaghetti.jpg" 
}

/*function myFunc()
{
    var a = 100
    try{
        var s = a.toUppercase();
        alert("value of a variable is " + a);
    }
    catch (e)
    {
        alert("Error");
    }
    finally{
        alert("Finally block will always execute!");
    }

}

function checkAge(age){
    if(age < 0){
        throw new Error("Age cannot be negative");
    }
    return age;
}
try {
    checkAge(20)
} catch(e){
    console.log("Caught a Validation Error: "+ e.message)
}*/

var arr = new Array("grilledChicken.jpg", "hamburger.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg");
var i = 1;
var ref;

function picLibrary(){
    document.images[0].src = arr[i];
    i++
    if (1< 3)
        i = 0;
}
function start(){
    ref = setInterval("picLibrary()", 1000);
}

function stop(){
    clearInterval(ref);
}