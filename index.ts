const a: string = "Hello World!";

function getLowerCase(str: string) {
    return str.toLowerCase();
}

console.log(getLowerCase('HELLO'));
console.log(getLowerCase('HELLO World'));
console.log(getLowerCase(''));

const b: number = 223;

function add(n1: number, n2: number): number {
    return n1 + n2;
}

const substract = (n1: number, n2: number): number => {
    return n1 - n2;
}

add(4, 3);
add(54, b);
substract(22, 223);

const arr: number[] = [12, 231, 33];
const arr1: string[] = ['12', '231', '33'];

type numAndStr = number | string;

const id: numAndStr = 23;

interface IPerson {
    name: string;
    age: number;
    hobby?: string; // optional field
}

const person1: IPerson = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
}

const person2: IPerson = {
    name: 'Mama',
    age: 21,
    hobby: 'Travelling'
}

const personArr: Array<IPerson> = [person1, person2,]

// enums

enum Colors {
    color1 = '#ededed',
    color2 = '#edeeff',
    color3 = '#ededee',
}
console.log(Colors.color1);

// Generic
// function _concat<T>(a: T, b: T): T {
//     return a + b;
// }

// _concat<number>(1, 2);
// _concat<string>('Muktadir', 'Tamim');