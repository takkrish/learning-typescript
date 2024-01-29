const age: number = 22;
console.log(age);

const name: string = 'John Doe';
console.log(name);

const isAuthenticated: boolean = true;
console.log(isAuthenticated);

function addTwo(num: number) {
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

const sayHello = (name: string): string => {
	return `Hello ${name}`;
};

console.log(sayHello('John Doe'));

const consoleError = (message: string): void => {
	console.log(message);
};

const throwError = (message: string): never => {
	throw new Error(message);
};

const handleError = (message: string): string => {
	if (message === 'ERROR') return 'Status 400';
	return 'Status 200 OK';
};

export {};
