function toSilab(str){
    str = str.replace(/\s/g, '')
    if(str.length % 2 == 0){
        result = str.match(/\w{2}/g)
    }
    else{
        str = str + "_"
        result = str.match(/\S{2}/g)
    }
    return result.toString().replace(/,/g, ' ')
}

console.log(toSilab('abaBbab')) 

function fact(n){
    if(n<=0){
        return 'Enter Number Bigger Than 0'
    }
    if(n === 1){
        return 1
    }
    return n * fact(n-1)
}

function fibbonachi(n){
    if(n === 1 || n === 2){
        return 1
    }
    return fibbonachi(n-1) + fibbonachi(n-2)
}

console.log(fibbonachi(4))