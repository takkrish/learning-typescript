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

export {};
