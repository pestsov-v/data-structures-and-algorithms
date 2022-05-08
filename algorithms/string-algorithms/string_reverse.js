// Разворачивает строку с помощью массива и метода reverse
function reverse1(str) {
    const arr = str.split('')
    arr.reverse()
    return arr.join('')
}

const str1 = reverse1('Vlad')
console.log("str1", str1)

function reverse2(str) {
    return str.split('').reverse().join('')
}

const str2 = reverse2('Vlad')
console.log("str2", str2)

function reverse3(str) {
    let reversed = ''

    for (let character of str) {
        reversed = character + reversed
    }

    return reversed
}

const str3 = reverse3('Vlad')
console.log("str3", str3)

function reverse4(str) {
    return str.split('').reduce((reversed, character) => {
        return character + reversed
    }, '')
}

const str4 = reverse4('Vlad')
console.log("str4", str4)