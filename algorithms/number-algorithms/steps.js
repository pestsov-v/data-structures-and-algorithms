// for loops
function steps1(n) {
  for (i = 0; i < n; i++) {
    let stair = "";

    for (j = 0; j < n; j++) {
      if (j <= i) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log("stair1", stair);
  }
}

const result1 = steps1(5);
console.log("result1", result1);

//recursion
function steps2(n) {
  if (n === 0) {
    return;
  }

  console.log(n);
  steps2(n - 1);
}

const result2 = steps2(5);
console.log("result2", result2);
