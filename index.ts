const a: string = "Hello World!"; // starting

function getLowerCase(str: string) { // function with parameter types
    return str.toLowerCase();
}

console.log(getLowerCase('HELLO'));
console.log(getLowerCase('HELLO World'));
// console.log(getLowerCase(23)); // wrong: type is not matching

const b: number = 223;

function add(n1: number, n2: number): number { // normal function with return types
    return n1 + n2;
}

const substract = (n1: number, n2: number): number => { // arrow function with return types
    return n1 - n2;
}

// calling functions with parameter types
add(4, 3);
add(54, b);
substract(22, 223);

// arrays with array types
const arr: number[] = [12, 231, 33];
const arr1: string[] = ['12', '231', '33'];

// custom types with OR
type numAndStr = number | string;
// declaring with custom types
const id: numAndStr = 23;

// interface to set object properties types
interface IPerson { // no equal sign
    name: string;
    age: number;
    hobby?: string; // optional field
}
// object with custom interface types
const person1: IPerson = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
}
// another object with custom interface types
const person2: IPerson = {
    name: 'Mama',
    age: 21,
    hobby: 'Travelling'
}
// array with Custom & Generic interface types
const personArr: Array<IPerson> = [person1, person2,]; // Generic array types

// enums
enum Colors {// no equal sign
    color1 = '#ededed',
    color2 = '#edeeff',
    color3 = '#ededee',
}
console.log(Colors.color1);

// Generic types set up for a function
// function _concat<T>(a: T, b: T): T {
//     return a + b;
// }
// calling functions with generic types
// _concat<number>(1, 2);
// _concat<string>('Muktadir', 'Tamim');