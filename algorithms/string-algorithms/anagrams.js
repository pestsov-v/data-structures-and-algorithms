// compare two words. If this words anagrams return true, if not - return false
function anagrams1(stringA, stringB) {
    const aCharMap = buildCharMap(stringA)
    const bCharMap = buildCharMap(stringB)

    if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
        return false
    }

    for (let char in aCharMap) {
        if (aCharMap[char] !== bCharMap[char]) {
            return false
        }
    }

    return true
}

function buildCharMap(str) {
    const charMap = {}
    for (let char of str.replace(/[^'\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

// anagrams seraching word in array of words
const result1 = anagrams1('this is love', 'love is this')
console.log("result1", result1)

function anagrams2(stringA, array) {
    let resultsAr = []

    array.forEach(e => {
        const aCharMap = buildCharMap(stringA)
        const bCharMap = buildCharMap(e)

        if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
            return false
        }

        for (let char in aCharMap) {
            if (aCharMap[char] !== bCharMap[char]) {
                return false
            }
        }

        resultsAr.push(e)
    })

   return resultsAr
}

function buildCharMap(str) {
    const charMap = {}
    for (let char of str.replace(/[^'\w]/g, '').toLowerCase()) {
        charMap[char] = charMap[char] + 1 || 1
    }

    return charMap
}

const result2 = anagrams2('laser', ['lazing', 'lazy',  'lacer'])
console.log("result2", result2)
