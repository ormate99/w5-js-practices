var MyFirstString = 'ez egy string';
var MySecondString = "ez is egy string";
var MyThirdString = 
`ez is egy string
ez 
'egy'
"több"
soros
string
`;

var MyFirstNumber = 0;
var MySecondNumber = 35;
var MyThirdNumber = 6478999;

var MyFirstBoolean = true ;
var MySecondBoolean = false;

var MyFirstArray = ["1984", "Lord of the Rings", "A Mester és Margarita", "Vita Brevis", "Galaxis utikalauz stopposoknak"]

var MyFirstObject = {
    title: "Lord of the Rings",
    publicationdate: 1954, 
    translations: ["hu", "de", "fr", "jp"]
};

console.log(MyFirstArray[0]);
console.log(MyFirstObject.title);
console.log(MyFirstObject["title"]);

var a = 1;
var b = 2;
var c = a + b;
console.log(c)

function add(firstNumber, secondNumber) {
    console.log(firstNumber+secondNumber);
}

add(1,2);
add(17948, 18743); 

var subtraction = function(a,b){
    if (a > b) {
    console.log ( a - b);
    }
    else if (a == b) {
        console.log ("A végeredmény 0 lesz");
    }
    else {
        console.log ( b - a);
    }
}

subtraction(3,6);
subtraction("15",15);
add("15",15);
add("Nyitva","Tartás");
subtraction("Nyitva","Tartás");

function ifElseCheck (text) {
    if (text === "hello"){
        console.log("a text az volt, hogy hello");
    }
    else if (text === "hello"){
        console.log("a text megint az volt, hogy hello");
    }

    if (text === "hello") {
        console.log("a text már megint hello");
    }
}

ifElseCheck("hello");

function compare(a,b){
    console.log("== ", a == b);
    console.log("=== ", a === b);
    var c = a + b;
    console.log(typeof c);
    console.log(c);
}

compare("1984", 1984);
compare("15", "15");

var myFirstFuctionVariable = function (){
    console.log("Ez egy függvény ami változóban van eltárolva");
}

myFirstFuctionVariable();

(function(){
    console.log("?");
}());

var anotherVar = myFirstFuctionVariable(); //ha zárójel van a mögötte instant lefut

console.log(typeof anotherVar);

var anotherVar2 = myFirstFuctionVariable;
anotherVar2();

console.log(typeof anotherVar2);

function theLastFunction(obj1, obj2){
    console.log("obj 1 értéke: ", obj1);
    console.log("obj 1 tipusa: ", typeof obj1);
    console.log("obj 2 értéke: ", obj2);
    console.log("obj 2 tipusa: ",   typeof obj2);
    console.log(obj2());
}

theLastFunction("Hello", function(){
    return "I'm calling theLastFunction"
});
/*
var window = {
    addEventListener: function(eventName, eventFunction){
        ...
    }
}
*/

window.addEventListener("load", function(){
    console.log("Az oldal betöltődött");
});