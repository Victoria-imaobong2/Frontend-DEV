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
   
var num = parseInt(prompt("Enter a number", "Enter..."))
var count = 0;
while (num > 0)
    {
    num = Math.trunc(num / 10);
    count++;
    }
    document.writeln("Digits : " + count);
