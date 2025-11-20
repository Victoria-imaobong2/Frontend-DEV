


function product(a, b){
    return (a * b);
}
let result = product(2, 15);


document.getElementById("test").innerHTML = "The product of both numbers is " + result + ".";

let toCelsius = (f) =>
     (5/9) * (f-32);


let value = toCelsius(77);
document.getElementById("testi").innerHTML = "The celsius is " + value + " degree celsius.";