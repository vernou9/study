let stroka='страшно, очень страшно, мы не знаем что это такое, если бы мы знали, что это такое, но мы не знаем, что это такое';
let str = Array.from(stroka.split(' '));
var count = {};
str.forEach(function(i) { count[i] = (count[i]||0) + 1;});
console.log(str)
console.log(count);