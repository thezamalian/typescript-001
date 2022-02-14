var a = "Hello World!";
function getLowerCase(str) {
    return str.toLowerCase();
}
console.log(getLowerCase('HELLO'));
console.log(getLowerCase('HELLO World'));
console.log(getLowerCase(''));
var b = 223;
function add(n1, n2) {
    return n1 + n2;
}
var substract = function (n1, n2) {
    return n1 - n2;
};
add(4, 3);
add(54, b);
substract(22, 223);
var arr = [12, 231, 33];
var arr1 = ['12', '231', '33'];
var id = 23;
var person1 = {
    name: "Tamim",
    age: 22,
    hobby: "Programming"
};
var person2 = {
    name: 'Mama',
    age: 21,
    hobby: 'Travelling'
};
// enums
var Colors;
(function (Colors) {
    Colors["color1"] = "#ededed";
    Colors["color2"] = "#edeeff";
    Colors["color3"] = "#ededee";
})(Colors || (Colors = {}));
console.log(Colors.color1);
// Generic
function _concat(a, b) {
    return a + b;
}
_concat(1, 2);
_concat('Muktadir', 'Tamim');
