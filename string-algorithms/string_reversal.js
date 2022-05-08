
// Разворачивает строку с помощью массива и метода reverse
function reverse(str) {
    const arr = str.split('')
    arr.reverse()
    return arr.join('')
}

const str1 = reverse('Vlad')
console.log("str1", str1)