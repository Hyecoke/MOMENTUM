/*
console.log("lalsdlflsd"); // 콘솔에 log 도는 print 됨 

// 값을 일괄적으로 변경할 때 효율적으로 하기 위해 변수 사용! 
// const 상수 - 값이 바뀔 수 없음
// let - 값을 바꿀 수 싶을 때 사용
// var - 계속해서 업데이트 되기 때문에 .. 언어를 보호해주지 않음! 
const a = 10; 
const b = 2; 
let myName = "nice"; // 단어의 공백이 필요할 때에는 대문자 쓰기 카멜문자 
// 대부분은 const를 사용함, let은 가끔, var은 사용하지 않기 ! 
console.log(a+b);
console.log(a/b);
console.log(a*b);
console.log("hello " + myName);

myName = "hyecoke";
console.log("your new name is " + myName);

// 데이터 타입 
const amIFat = null; 
// true, false, null 은 정의는 되었지만 값이 없다, undefined 은 정의되어 있지 않다
let something;
console.log(something, amIFat); // undefined null 
// 사용자가 로그인을 했는지 안했는지 확인 가능! 

// 배열 
const mon = "mon"; 
const tue = "tue";
const wed = "wed";
const thu = "thu";
const fri = "fri";
const sat = "sat";
const sun = "sun"; 

const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

const nonsense = [1, 2, "hello", false, null, true, undefined, "nice"];
// 배열에서 아이템 가져오기 
console.log(daysOfWeek[2], nonsense);

// 배열에 데이터 추가하기 
daysOfWeek.push("sun");
console.log(daysOfWeek);

const toBuy = ["apple", "potato", 'pizza'];
toBuy.push("kimbab");
console.log(toBuy[2]);

// 객체 
const player = {
    name : "nico",
    points : 10, 
    fat : true,
}; 
console.log(player); 
console.log(player.name);
console.log(player["name"]);

console.log(player);
player.points = player.points + 15;
console.log(player);

// 함수 
console.log("Hello My Name is Nico");
console.log("Hello My Name is Dal");
console.log("Hello My Name is Shigatus");
console.log("Hello My Name is Flynn");
console.log("Hello My Name is Nico");
console.log("Hello My Name is Nico");

function sayHello(nameOfPerson, age) {
    console.log("Hello my name is " + nameOfPerson + " and I'm " + age + " years old"); 
}

sayHello("nico", 10);
sayHello("dal", 23);
sayHello("Lynn", 21);

function plus(firstNumber, secondNumber) {
    console.log(firstNumber + secondNumber);
}
console.log(firstNumber); // 오류남 firstNumber는 함수 안에서만 쓸 수 있는 지역변수임
function divide(a, b) {
    console.log(a/b);
}
plus(60, 80);
plus(98, 20);

const player = {
    name : "nico",
    sayHello : function (otherPersonName) {
        console.log("hello! " + otherPersonName + " nice to meet you");
    }, 
};
console.log(player.name);
player.sayHello("Lynn");
player.sayHello("nico"); */


const calculator = {
    plus : function (a, b) {
        return (a+b);
    },
    minus : function(a, b){
        return (a-b);
    }, 
    times : function(a, b){
        return (a*b);
    }, 
    divide : function(a, b) {
        return (a/b);
    }, 
    power : function(a, b) {
        return (a**b);
    },
}; 

const plusResult = calculator.plus(2, 3);
console.log(plusResult);
const timesResult = calculator.times(2,3);
console.log(timesResult);
const minusResult = calculator.minus(2,3);
console.log(minusResult);
const divideResult = calculator.divide(2,3)
console.log(divideResult);;
const powerResult = calculator.power(2,3);
console.log(powerResult); 

function calculaterKrAge(agrOfForeigner) {
    return agrOfForeigner +divide
  
}
