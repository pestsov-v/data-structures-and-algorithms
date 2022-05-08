// Возвращает чаще всего встречающийся символ в строке
function max_chars(str) {
    const chars = {}
    let max = 0;
    let maxChar = ''

    for (let char of str) {
        if (chars[char]) {
            chars[char]++
        } else {
            chars[char] = 1
        }
    }

    for (let char in chars) {
        if (chars[char] > max) {
            max = chars[char]
            maxChar = char
        }
    }

    return maxChar
}

const result1 = max_chars("400")
const result11 = max_chars("43332g333333cccccccccccc")
console.log("result1", result1)
console.log("result11", result11)