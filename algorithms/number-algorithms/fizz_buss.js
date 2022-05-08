function fizz_buss(n) {
    for (let i = 1;i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizzbuss')
        } else if (i % 3 === 0) {
            console.log('fizz')
        } else if (i % 5 === 0) {
            console.log('buss')
        } else {
            console.log(i)
        }
    }
}

const result1 = fizz_buss(400)
const result2 = fizz_buss(2122)
console.log("result1", result1)
console.log("result2", result2)