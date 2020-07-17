// 5 variables of different data types
// string, number, array, boolean &&
// object(4 key value pairs) string, number, array, boolean

const myString = 'Hello this is my string!';
console.log(myString);

const myNum = 25000;
console.log(myNum);

const myArray = [1, 'b', 9, true, 'false'];
console.log(myArray);

const myBoolean = false;
console.log(myBoolean);

const myObject = {name: 'Barent', age: 30, colors: ['green', 'blue', 'black', 'purple'], anxious: true};
console.log(myObject);

let myString2 = 'this is my second string';
let myNum2 = 3930;
let myArray2 = [1, 5, 'turtles', 3];
let myBoolean2 = true;
let myObject2 = {
    name: 'Barent again',
    age: 30,
    colors: ['black', 'white'],
    anxious: true
};

// make 10 different functions

// one of functions pass in an array
// one passess callback
// one passes string
// one passes object
// one passes boolean
// then freestyle
function displayColors(array){
    let result = [];

    for (let i = 0; i < array.length; i++){
        let color = array[i];

        if (color.length > 4){
            result.push(color);
        }
    }
    return result;
};
console.log(displayColors(myObject.colors));


function removeFromArray(callback, array){
    let result = callback(array)[0];
    console.log(result);
};

removeFromArray(displayColors, myObject.colors);

function printSentence(string){
    console.log(string);
    return 
};

printSentence(myString);
printSentence(myString2);


function printArray(object){
    console.log(object.colors);
};
printArray(myObject);

function doesThisReallyWork(boolean){
    if (boolean){
        console.log('this works')
    }else{ 
        console.log('this does not work')
    }
};

doesThisReallyWork(myBoolean);


function anArray(array){
    console.log(array[0]);
};

function aCallback(callback){
    let i = 1;
    callback(i);
};

function stringPass(string){
    myString = string;
    console.log(myString);
};

function objectPass(object){
    console.log(object);
};

function booleanPass(bool){
    if (bool === true){
        return bool;
    }
};

function anArray2(array){
    for (let i = 0; i < array.length; i++){
        console.log(array[i]);
    }
};

function aCallback2(callback){
    let name = 'Barent';
    callback(name);
};

function stringPass2(string){
    myString = string;
    for (let i = 0; i < string.length; i++){
        console.log(string[i]);
    }
};

function objectPass2(object){
    console.log(object.keys);
};

function booleanPass2(bool){
    let name = 1;
    if (name === bool){
        return bool;
    }
};

const sectionOne = document.getElementById('section-one');
console.log(sectionOne);

const sectionTwo = document.getElementById('section-two');
console.log(sectionTwo);

const sectionThree = document.querySelector('#section-three');
console.log(sectionThree); // when using querySelector you must include css selector #,.

const sectionFour = document.querySelector('#section-four');
console.log(sectionFour);

const sectionFive = document.querySelector('#section-five');
console.log(sectionFive);

// innerHTML can get u hacked, textContent is preferable
sectionOne.textContent = 'Japanes Films:';

sectionTwo.textContent = 'Hara Kiri: Death of a Samurai';
sectionThree.textContent = 'Twilight Samurai';
sectionFour.textContent = 'Roshamon';
sectionFive.textContent = 'Lone Wolf and Cub';