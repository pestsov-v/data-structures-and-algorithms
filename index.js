//REQUIRES MODULES

// STRING
// require('./algorithms/string-algorithms/string_reversal')
// require('./algorithms/string-algorithms/palindrome')
// require('./algorithms/string-algorithms/max_chars')
// require('./algorithms/string-algorithms/anagrams')
// require("./algorithms/string-algorithms/capitalization");

// NUMBERS
// require('./algorithms/number-algorithms/int_reverse')
// require('./algorithms/number-algorithms/fizz_buss')
require("./algorithms/number-algorithms/steps");

// ARRAY
// require("./algorithms/array-algorithms/array-chunk");

// CODEWARS
// require("./codewars/nextBigger");

const express = require("express");
const app = express();

app.listen(4011, () => {
  console.log(`Server is running on port 4011`);
});
