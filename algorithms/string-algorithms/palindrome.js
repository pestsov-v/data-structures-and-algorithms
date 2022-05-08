function palindrome1(str) {
    return str.split('').every((char, i) => {
        return char === str[str.length - i - 1]
    })
}

const result1 = palindrome1('Vlad')
const result11 = palindrome1('vllv')
console.log("result1", result1)
console.log("result11", result11)
