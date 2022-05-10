// let k = prompt()

// let fibonacci = [0,1]

// for(let i = 0; i <= k; i++){
//     fibonacci.push(fibonacci[1] + fibonacci[i + 1 ])
// }
// console.log(fibonacci);




let name = prompt('name')
let sname = prompt('suranme')
let age = prompt('age')


let total = [
    `${name}${sname}${age}@gmail.com`,
    `${age}${name}${sname}@gmail.com`,
    `${sname}${age}${name}@gmail.com`,
    `${name}${age}${sname}@gmail.com`,
    `${sname}${name}${age}@gmail.com`
]
console.log(total);

let email = () =>{
    let position =Math.floor(Math.random() * 5)
    document.write(total[position])
}
email()


let arr = [1,3,,1241,4124,1,4,356,45,,6,34,1,423,4,23,5,344,12,423,5,23,5,34,,32,,32,2323,232,5675,234234]
console.log(arr.sort((a,b) => a - b ));