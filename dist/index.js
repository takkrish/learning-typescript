"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const age = 22;
console.log(age);
const name = 'John Doe';
console.log(name);
const isAuthenticated = true;
console.log(isAuthenticated);
function addTwo(num) {
    return num + 2;
}
const result = addTwo(5);
console.log(result);
let hero; // type : any
function getHero() {
    return 'Thor';
}
hero = getHero();
hero = true;
hero = 100;
const sayHello = (name) => {
    return `Hello ${name}`;
};
console.log(sayHello('John Doe'));
const consoleError = (message) => {
    console.log(message);
};
const throwError = (message) => {
    throw new Error(message);
};
const handleError = (message) => {
    if (message === 'ERROR')
        return 'Status 400';
    return 'Status 200 OK';
};
