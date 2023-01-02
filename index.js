const arr = []
for (let i = 20; i <= 30;i++){
   arr.push(i)
    if(i !==30) {
        arr.push(i + 0.5)
    }
}
alert(arr.join(' '))

const price = 27
for (let i = 1; i<=10;i++){
    let result = i * 10
    console.log(`${result}$ = ${result*price}грн`)
}

const numberN = 20;
const arrTrue = []
for (let i = 1 ; i<101;i++){
    if(i**2 < numberN){
        arrTrue.push(i)
    }
}
console.log(arrTrue)


function isPrimeNum(num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return true
}

console.log(isPrimeNum(12));
function searchNumber(number) {
    let result = false
    for (let i=1 ;i<=number;i++){
        if(3**i === number){
           result = true
            break
        }
    }
    console.log(result)
}

searchNumber(567)


