// Реверсирует число
function int_reverse(n) {
    const reversed = n.toString().split('').reverse().join('')

    return parseInt(reversed) * Math.sign(n)
}

const result1 = int_reverse(400)
const result2 = int_reverse(-43332)
console.log("result1", result1)
console.log("result2", result2)