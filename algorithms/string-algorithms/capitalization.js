function capitalize1(str) {
  let words = [];

  for (let word of str.split(" ")) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(" ");
}

const result1 = capitalize1("a little fox");
console.log("result1", result1);

function capitalize2(str) {
  let result = str[0].toUpperCase();

  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === " ") {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }

  return result;
}

const result2 = capitalize2("a little fox");
console.log("result2", result2);
