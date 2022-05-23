function chunk1(array, size) {
  const chunked = [];
  for (let element of array) {
    const last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}

const result1 = chunk1([1, 2, 3, 4, 5, 6], 3);
console.log("result1", result1);

function chunk2(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    const element = array.slice(index, index + size);
    chunked.push(element);
  }

  return chunked;
}

const result2 = chunk2([1, 2, 3, 4, 5, 6], 2);
console.log("result2", result2);
