// for ( let i = 1; i <= 10; i++) {
// console.log("пробежали круг:" , i)
// if ( i % 2 === 0 ) {
//     console.log("четное")
//     }
// }

// for ( let i = 0; i < 10; i++ ) {
//     console.log("end" , i)
// }

// let number = 10

// do {
//     number = +prompt("введите число больше 10" , 10);
// }
// while (number < 11);

// const number = +prompt("Введите число", 0)

// for ( let i = 1; i <= number; i++) {
//     if (number > 20) {
//         break
//     }
//     console.log(i)
// }

// for (let i = 1; i <= 5; i++) {
//    for (let j = 1; j <= 3; j++)  {
// console.log(`Внешний цикл: ${i}` , `Внутренний цикл: ${j}`)
//    }
// }


// 1
for (let a = 1; a <= 20; a++) {
    if ( a % 4 === 0) {
        continue
    }
    console.log(a)
}


// 2
let number = +prompt("введите число")
let result = 1;
for ( let k = 1; k <= number; k++ ) {
   result *= k ;
}
console.log(result)


// 3
 for ( j = 1; j <= 8 ; j++) {
    let line = "";
    for ( i = 1; i <= 8 ; i++) {
        line += ((i + j) % 2 === 0) ? "б" : "ч";
    }
 console.log(line)
 }

