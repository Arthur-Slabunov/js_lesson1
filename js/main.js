var myNum = 10;
var myString = 'строка';
var myBool = true;
var myArray = [1,2,3,4,5];
var myObj = {first: "first name", last:'last name'};

console.log (myNum);
console.log (myString);
console.log (myBool);
console.log (myArray);
console.log (myObj);

var decimal2 = (myNum.toFixed(2));

console.log (decimal2);

var i = 5;

console.log(i++);
console.log(i);

var myTest = 20;


myTest += myNum;
console.log('+=', myTest);

myTest -= 10;
console.log('-=', myTest);

myTest *= 2;
console.log('*=', myTest);

myTest /= myNum;
console.log('/=', myTest);

myTest %= 3;
console.log('%=', myTest);

var myPi = Math.PI; 
console.log('myPi:', myPi);

var myRound = Math.round(23.1231243446)
console.log('myRound:', myRound)

var myRandom = Math.random() * 10
console.log('myRandom:',myRandom)

var myPow = Math.pow(2, 7); 
console.log('myPow:', myPow);

var strObj = {str: 'Мама мыла раму, рама мыла маму'};
strObj.length = strObj.str.length;
console.log('strObj = ', strObj);

var isRamaPos = strObj.str.indexOf('рама');

console.log('isRamaPos:', isRamaPos);

var strReplace = strObj.str.replace('мыла', 'моет')

strReplace = strReplace.replace('рама', 'Рама');
strReplace = strReplace.replace('мыла', 'держит');
console.log('strReplace:', strReplace);

console.log(myString.toUpperCase())
console.log(myString.toLowerCase())