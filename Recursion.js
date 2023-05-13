const factorial = (n) => {
    if(n <= 0){
        return 'Enter number > than 0'
    }
    if(n === 1){
        return 1
    }
    return n * factorial(n-1)
}

//1 1 2 3 5 8 13

const fibbonachi = (n) =>{
    if(n === 1 || n === 2){
        return 1
    }
    return fibbonachi(n - 1) + fibbonachi(n - 2)
}

console.log(fibbonachi(4))


