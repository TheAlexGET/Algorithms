function cashFunction(fn){
    const cash = {}
    return function (n) {
        if(cash[n]){
            console.log('Took from cash', cash[n])
            return cash[n]
        }
        let result = fn(n)
        cash[n] = result
        console.log('Function calculed', cash[n])
        return result
    }
}

function factorial(n){
    let fact = 1
    while (n != 1) {
        fact *= n
        n -= 1
    }
    return fact
}



const cashFactorial = cashFunction(factorial)

cashFactorial(5)
cashFactorial(4)
cashFactorial(3)
cashFactorial(4)
cashFactorial(5)