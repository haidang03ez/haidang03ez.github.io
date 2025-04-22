// let a = 5, b = 10, c = 15;

// z = ++a + b++ + --c + a++; // 6 + 10 + 14 + 6 = 36
// y = c-- + ++b - ++a + c++; // 14 + 12 - 8 + 13 = 31

// console.log(a, b, c, z, y); //36 31 8 12 14 

x = true, y = true, z = false

console.log(x && y && z)
console.log(x && y && !z)
console.log((x && y) || z)
console.log((x && y) || !z)
console.log(x && (y || z))
console.log(x && !(y || z))
console.log(x && (y || !z))
console.log(x && (!y || z))