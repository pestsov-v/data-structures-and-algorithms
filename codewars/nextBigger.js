function palindrome1(number) {
    const n = String(number)
    const s = 0.5 + n.length/2
    console.log(s)
    return n.split('').every((char, i) => {
        return char === n[n.length - i - 1]
    })
}

const result1 = palindrome1(5)
console.log("result1", result1)